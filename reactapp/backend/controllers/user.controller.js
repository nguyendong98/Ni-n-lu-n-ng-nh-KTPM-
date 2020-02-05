let User = require('../models/user.model')
module.exports.index = (req, res, next) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+ err));
}

module.exports.add = (req, res, next) => {
    const username = req.body.username;
    const newUser = new User({ username })
    newUser.save()
        .then(() => res.json('User add!'))
        .catch(err => res.status(400).json('Error: '+ err));
}

