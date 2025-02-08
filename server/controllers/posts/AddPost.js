import CyrillicToTranslit from 'cyrillic-to-translit-js';
import slugify from 'slugify';
import Post from '../../models/Post.js';

const generateSlug = (title) => {
  const cyrillicToTranslit = CyrillicToTranslit();
  const transliteratedTitle = cyrillicToTranslit.transform(title);

  const replacedTitle = transliteratedTitle.replace(/[',.&^%$#@!*()=+<>~:/`]/g, '-');

  const slugifiedTitle = slugify(replacedTitle, {
    lower: true,
    replacement: '-',
  });

  return slugifiedTitle.replace(/[^\w-]+$/g, '');
};

const AddPost = (req, res) => {
  const {
    browserTitle,
    pageTitle,
    imageURL,
    content,
    description,
    introtext,
    tags,
    category,
  } = req.body;

  if (!browserTitle) {
    res.status(401).send({ message: 'Обязательное поле browserTitle' });
    return;
  }
  if (!pageTitle) {
    res.status(401).send({ message: 'Обязательное поле pageTitle' });
    return;
  }
  if (!imageURL) {
    res.status(401).send({ message: 'Обязательное поле image URL' });
    return;
  }
  if (!content) {
    res.status(401).send({ message: 'Ваш пост требует содержания' });
    return;
  }
  if (!category) {
    res.status(401).send({ message: 'Ваш пост должен быть в категории' });
    return;
  }
  if (browserTitle.length < 3 || browserTitle.length > 180) {
    res.status(401).send({ message: 'Длина browserTitle должна быть от 3 до 180 символов.' });
    return;
  }
  if (pageTitle.length < 3 || pageTitle.length > 180) {
    res.status(401).send({ message: 'Длина pageTitle должна быть от 3 до 180 символов.' });
    return;
  }
  if (content.length < 15 || content.length > 30000) {
    res.status(401).send({ message: 'Длина контента должна быть от 15 до 30000 символов.' });
    return;
  }
  if (tags.length < 1 || tags.length > 6) {
    res.status(401).send({ message: 'Вам нужно указать от 1 до 6 тегов' });
    return;
  }
  const post = new Post();
  post.browserTitle = browserTitle;
  post.pageTitle = pageTitle;
  post.content = content;
  post.introtext = introtext.slice(0, 300);
  post.tags = [...tags];
  post.imageURL = imageURL;
  post.category = category;
  post.slug = generateSlug(post.browserTitle);
  post.description = description.slice(0, 200);
  post.createdBy = req.user.id;
  post.save()
    .then((savedPost) => {
      res.send({ message: 'Сообщение успешно опубликовано', post: savedPost });
    })
    .catch((error) => {
      res.status(500).send(error);
      console.log(error);
    });
};

export default AddPost;
