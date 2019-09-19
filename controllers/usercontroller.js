const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


router.post('/signup', (req, res) => {
    User.create({
    userName: req.body.userName,

    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
})
.then(
    createSuccess = (user) => {
        let token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
        res.json({
            user: user,
            message: 'user created',
            sessionToken: token
        });
    },
    createError = (error) => {res.status(500).send({ error: 'failed to authenticate' })
}
)
});


router.post('/signin', (req, res) =>{
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, matches) => {
                if(matches){
                    let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
                    res.json({
                        user: user,
                        message: 'successfully authenticated user',
                        sessionToken: token
                    })
                } else {
                    res.status(502).send({ error: 'bad gateway' })
                }
            })
        } else {
            res.status(500).send({ error: 'failed to authenticate' })
        }
    },  err => res.status(501).send({ error: 'failed to process'}))
 })


 router.delete('/:id', (req, res) =>{
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({
        error: err
    }))
 })

 module.exports = router;