const router = require('express').Router();
const SpeicePlus = require('../db').import('../models/speicePlus');
const validateSession = require('../middleware/validate-session')


router.get('/', (req, res) => {
    SpeicePlus.findAll()
       .then(speices => res.status(200).json(speices))
       .catch(err => res.status(500).json({
           error: err
       }))
})
router.post('/', (req, res) => {

    SpeicePlus.create({
            speciesId: req.body.speciesId,
            speciePlural: '',
    
            specieAdj:'',
    
            homeworld: '',
            description: '',

                    }) 
   .then(
    
    createSuccess = () => {
        
        res.json({
            message: 'speices started'
           
        });
    },
    createError = (error) => {res.status(500).send({ error: 'failed to authenticate 1' })
})
})


router.get('/:id', (req, res) => {
    SpeicePlus.findAll(

        {where:
            {speciesId: req.params.id }
        }
            
        )
        .then(spieces => res.status(200).json(spieces))
        .catch(err => res.status(500).json({
            error: err
        }))
 })
  router.put('/:id', (req, res) => {
    SpeicePlus.update(req.body, { 
        where: { 
            speciesId: req.params.id }})
      .then(spieces => res.status(200).json(spieces))
      .catch(err => res.status(500).json({ error: err}))
  })

  router.delete('/:id', (req, res) => {
    SpeicePlus.destroy({
        where:
            {speciesId: req.params.id }
        })
        .then(spieces => res.status(200).json(spieces))
        .catch(err => res.status(500).json({
            error: err
        }))
    })


module.exports = router;