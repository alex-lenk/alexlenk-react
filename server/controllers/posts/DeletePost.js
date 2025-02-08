import Post from '../../models/Post.js';

const DeletePost = (req, res) => {
  const _id = req.body.id;
  if (!_id) {
    res.status(401).send({ message: 'Вам нужно указать id поста' });
    return;
  }
  Post.findOneAndDelete({ _id: _id, createdBy: req.user._id })
    .then((post) => {
      if (!post) {
        res.status(404).send({ message: 'ID не соответствует ни одному посту' });
        return;
      }
      res.json({ message: 'Пост успешно удалено' });
    })
    .catch((error) => {
      res.status(500).send({ message: 'Произошла ошибка при удалении поста' });
      console.log(error);
    });
};

export default DeletePost;
