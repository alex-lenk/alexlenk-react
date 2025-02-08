import User from '../models/User.js';
import isEmailValid from '../utils/isEmailValid.js';

const updateProfile = (req, res) => {
  const data = req.body.data;
  if (!data || !data.fullName || !data.email || !data.imageURL) {
    res.status(400).send({ message: 'please provide all parameters' });
    return;
  }
  if (!isEmailValid(data.email)) {
    res.status(400).send({ message: 'email is invalid' });
    return;
  }
  User.findById(req.user.id)
    .then(async (user) => {
      user.fullName = data.fullName;
      user.imageURL = data.imageURL;
      user.email = data.email;
      await user.save();
      res.send({ message: 'success' });
    })
    .catch((error) => {
      res.status(500).send(error);
      console.log(error);
    });
};

export default updateProfile;
