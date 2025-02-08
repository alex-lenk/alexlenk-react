import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import isEmailValid from '../utils/isEmailValid.js';
import config from '../config.js';

const sendToken = (id) => {
  return jwt.sign(
    { id },
    config.jwtSecret,
    { expiresIn: '10h' },
  );
};

export const Login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    res.status(400).send({
      message: 'Пожалуйста, укажите все параметры',
    });
    return;
  }
  User.findOne({ username: username })
    .then(async (user) => {
      if (user) {
        const isPassowrdCorrect = await bcrypt.compare(password, user.password);
        const isAdminCorrect = user.isAdmin;
        if (isPassowrdCorrect && isAdminCorrect) {
          res.status(200).json({
            token: sendToken(user._id),
            imageURL: user.imageURL,
            username: user.username,
            email: user.email,
            fullName: user.fullName,
            id: user._id,
          });
          return;
        }
        res.status(401).json({
          message: 'Неправильный логин или пароль',
        });
        return;
      }
      res.status(404).send({
        message: 'Аккаунт не найден',
      });
    })
    .catch((error) => {
      res.status(500).send(error);
      return;
    });
};

export const GetUser = (req, res) => {
  User.findById(req.user.id)
    .then((user) => {
      if (!user) {
        res.status(404).send({
          message: 'Аккаунт не существует',
        });
        return;
      }
      res.send({
        imageURL: user.imageURL,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        id: user._id,
        isAdmin: user.isAdmin,
      });
    })
    .catch((error) => {
      res.status(500).send(error);
      console.log(error);
    });
};

export const Register = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const fullName = req.body.fullName;
  if (!username || !email || !password || !fullName) {
    res.status(400).send({
      message: 'Пожалуйста, укажите все параметры',
    });
    return;
  }
  if (!isEmailValid(email)) {
    res.status(400).send({
      message: 'Электронная почта недействительна',
    });
    return;
  }
  User.findOne({ username: username })
    .then(async (user) => {
      if (user) {
        res.status(409).send({
          message: 'Логин уже занято',
        });
        return;
      }
      const hashedPassowrd = await bcrypt.hash(password, 10);
      const newUser = new User();
      newUser.username = username;
      newUser.email = email;
      newUser.password = hashedPassowrd;
      newUser.fullName = fullName;
      newUser
        .save()
        .then((savedUser) => {
          res.send({
            message: 'Учетная запись успешно создана',
          });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
