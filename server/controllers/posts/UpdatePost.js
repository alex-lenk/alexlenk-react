import Post from '../../models/Post.js';

const UpdatePost = (req, res) => {
  const id = req.body.id;
  const newContent = req.body.content;
  if (!id) {
    res.status(401).send({ message: 'Вам нужно указать id поста' });
    return;
  }
  if (!newContent) {
    res.status(401).send({ message: 'Вам необходимо указать новое содержание поста' });
    return;
  }
  Post.findById(id)
    .then((post) => {
      if (!post) {
        res.status(404).send({ message: `Пост с этим ID ${id} не найден` });
        return;
      }
      post.content = newContent;
      post.save()
        .then((data) => {
          res.send({ data: data, message: 'Пост успешно обновлен' });
        })
        .catch((error) => {
          res.status(500).send(error);
          console.log(error);
        });
    })
    .catch((error) => {
      res.status(500).send(error);
      console.log(error);
    });
};

export default UpdatePost;
