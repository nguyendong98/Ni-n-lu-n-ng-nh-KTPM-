let Exercise = require('../models/exercise.model')

module.exports.index = (req, res, next) => {
    Exercise.find()
            .then(exercise => res.json(exercise))
            .catch(err => res.status(400).json('Error: '+ err));
}

module.exports.add = (req, res, next) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });
    newExercise.save()
            .then(() => res.json('Exercise add!'))
            .catch(err => res.status(400).json('Error: '+ err))
            

}

module.exports.search = (req, res, next) => {
    Exercise.findById(req.params.id)
            .then(exercise => res.json(exercise))
            .catch(err => res.status(400).json('Error: '+ err));
}

module.exports.delete =  (req, res, next) => {
    Exercise.findByIdAndDelete(req.params.id)
            .then(() => res.json('Exercise delete.'))
            .catch(err => res.status(400).json('Error: '+ err));
}

module.exports.update = (req, res, next) => {
    Exercise.findByIdAndUpdate(req.params.id)
            .then(exercise => {
                exercise.username = req.body.username;
                exercise.description = req.body.description;
                exercise.duration = Number(req.body.duration);
                exercise.date = Date.parse(req.body.date);
                exercise.save()
                        .then(() => res.json('Exercise update!'))
                        .catch(err => res.status(400).json('Error: '+ err))

            })
            .catch(err => res.status(400).json('Error: '+ err))
}
