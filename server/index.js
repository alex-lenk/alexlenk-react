import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import chalk from 'chalk';
import path from 'path';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import winston from 'winston';

import setupRoutes from './routes/index.js';
import config from './config.js';
const { port, clientUrl, clientDomain, dbUrl, localHost } = config;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

const app = express();

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", clientDomain],
  }
}));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: clientUrl,
  credentials: true,
}));

app.use(limiter);

setupRoutes(app);

const myFormat = winston.format.printf(({ level, message, label, timestamp }) => {
  return `${ timestamp } ${ level }: ${ message }`;
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    myFormat,
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

app.use(function (err, req, res, next) {
  logger.error(err.stack);
  res.status(500).send(`Something broke! Error: ${ err.message }`);
});

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../../public')));
  const indexPath = path.join(__dirname, '../../public', 'index.html');
  app.get('*', (req, res) => {
    res.sendFile(indexPath);
  });
}

async function start() {
  try {
    mongoose.connection.once('open', () => {
      console.log(chalk.bold('Connected to MongoDB'));
      logger.info('Connected to MongoDB');
    });

    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(port, () => {
        console.log(chalk.blue(
          `Server started on port ${ port } ${ localHost }/api/home`,
        ));
        logger.info(`Server started on port ${ port } ${ localHost }/api/home`);
      },
    );
  } catch (e) {
    logger.error('Error:', e.message);
    console.log(chalk.red('Error:', e.message));
    process.exit(1);
  }
}

start();
