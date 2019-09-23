const router = require('express').Router();
const Speices = require('../db').import('../models/speice');
const validateSession = require('../middleware/validate-session')


router.get('/', (req, res) => {
    Speices.findAll()
       .then(speices => res.status(200).json(speices))
       .catch(err => res.status(500).json({
           error: err
       }))
})
router.post('/', (req, res) => {
   const speicesFromRequest = {
    spiecesName: req.body.spiecesName,
    spiecesType:  req.body.spiecesType,
    planetType:  req.body.planetType,
    preferedPreferance:  req.body.preferedPreferance,
    majorTrait: req.body.majorTrait,
    isMachine: req.body.isMachine,
    specialTrait:  req.body.specialTrait,
    doubleJointed:  req.body.doubleJointed,
    durable:  req.body.durable,
    efficientProcessors:  req.body.efficientProcessors,
    emotionEmulators:  req.body.emotionEmulators,
    enhancedMemory: req.body.enhancedMemory,
    learningAlgorithms:  req.body.learningAlgorithms,
    logicEngines:  req.body.logicEngines,
    massProduced:  req.body.massProduced,
    powerDrills:  req.body.powerDrills,
    recycled: req.body.recycled,
    Bulky:  req.body.Bulky,
    superconductive: req.body.superconductive,
    CustomMade:  req.body.CustomMade,
    HighMaintenance: req.body.HighMaintenance,
    Luxurious:  req.body.Luxurious,
    RepurposedHardware:  req.body.RepurposedHardware,
    Uncanny: req.body.Uncanny,
    domesticProtocols: req.body.domesticProtocols,
    harvesters:  req.body.harvesters,
    loyaltyCircuits:  req.body.loyaltyCircuits,
    
    propagandaMachines:  req.body.propagandaMachines,
    Adaptive:  req.body.Adaptive,
    ExtremelyAdaptive:  req.body.ExtremelyAdaptive,
    
    Agrarian: req.body.Agrarian,
    Charismatic: req.body.Charismatic,
    Communal:  req.body.Communal,

    Conformists: req.body.Conformists,
    Conservationist: req.body.Conservationist,
    Enduring:  req.body.Enduring,
    Venerable: req.body.Venerable,
    Industrious: req.body.Industrious,
    Ingenious: req.body.Ingenious,
    Intelligent: req.body.Intelligent,
    NaturalEngineers:  req.body.NaturalEngineers,
    NaturalPhysicists:  req.body.NaturalPhysicists,
    NaturalSociologists: req.body.NaturalSociologists,
    Nomadic: req.body.Nomadic,
    QuickLearners:  req.body.QuickLearners,
    RapidBreeders:  req.body.RapidBreeders,
    Resilient: req.body.Resilient,
    Strong:  req.body.Strong,
    VeryStrong: req.body.VeryStrong,
    Talented: req.body.Talented,
    Thrifty: req.body.Thrifty,
    Traditional:  req.body.Traditional,
    Decadent: req.body.Decadent,
    Deviants:  req.body.Deviants,
    Fleeting:  req.body.Fleeting,
    Nonadaptive:  req.body.Nonadaptive,
    Quarrelsome:  req.body.Quarrelsome,
    Repugnant: req.body.Repugnant,
    Sedentary: req.body.Sedentary,
    SlowBreeders: req.body.SlowBreeders,
    SlowLearners:  req.body.SlowLearners,
    Solitary: req.body.Solitary,
    Wasteful:  req.body.Wasteful,
    Weak:  req.body.Weak,
    Robust:  req.body.Robust,
    Erudite:  req.body.Erudite,
    Fertile:  req.body.Fertile,
    NerveStapled: req.body.NerveStapled,
    Delicious:  req.body.Delicious
       
   }
   Speices.create({
                userId: req.body.userId,
                spiecesName: req.body.spiecesName,
                spiecesType:  req.body.spiecesType,
                planetType:  req.body.planetType,
                preferedPreferance:  req.body.preferedPreferance,
                majorTrait: req.body.majorTrait,
                isMachine: req.body.isMachine,
                specialTrait:  req.body.specialTrait,
                doubleJointed:  req.body.doubleJointed,
                durable:  req.body.durable,
                efficientProcessors:  req.body.efficientProcessors,
                emotionEmulators:  req.body.emotionEmulators,
                enhancedMemory: req.body.enhancedMemory,
                learningAlgorithms:  req.body.learningAlgorithms,
                logicEngines:  req.body.logicEngines,
                massProduced:  req.body.massProduced,
                powerDrills:  req.body.powerDrills,
                recycled: req.body.recycled,
                Bulky:  req.body.Bulky,
                superconductive: req.body.superconductive,
                CustomMade:  req.body.CustomMade,
                HighMaintenance: req.body.HighMaintenance,
                Luxurious:  req.body.Luxurious,
                RepurposedHardware:  req.body.RepurposedHardware,
                Uncanny: req.body.Uncanny,
                domesticProtocols: req.body.domesticProtocols,
                harvesters:  req.body.harvesters,
                loyaltyCircuits:  req.body.loyaltyCircuits,
                propagandaMachines:  req.body.propagandaMachines,
                Adaptive:  req.body.Adaptive,
                ExtremelyAdaptive:  req.body.ExtremelyAdaptive,
                Agrarian: req.body.Agrarian,
                Charismatic: req.body.Charismatic,
                Communal:  req.body.Communal,
                Conformists: req.body.Conformists,
                Conservationist: req.body.Conservationist,
                Enduring:  req.body.Enduring,
                Venerable: req.body.Venerable,
                Industrious: req.body.Industrious,
                Ingenious: req.body.Ingenious,
                Intelligent: req.body.Intelligent,
                NaturalEngineers:  req.body.NaturalEngineers,
                NaturalPhysicists:  req.body.NaturalPhysicists,
                NaturalSociologists: req.body.NaturalSociologists,
                Nomadic: req.body.Nomadic,
                QuickLearners:  req.body.QuickLearners,
                RapidBreeders:  req.body.RapidBreeders,
                Resilient: req.body.Resilient,
                Strong:  req.body.Strong,
                VeryStrong: req.body.VeryStrong,
                Talented: req.body.Talented,
                Thrifty: req.body.Thrifty,
                Traditional:  req.body.Traditional,
                Decadent: req.body.Decadent,
                Deviants:  req.body.Deviants,
                Fleeting:  req.body.Fleeting,
                Nonadaptive:  req.body.Nonadaptive,
                Quarrelsome:  req.body.Quarrelsome,
                Repugnant: req.body.Repugnant,
                Sedentary: req.body.Sedentary,
                SlowBreeders: req.body.SlowBreeders,
                SlowLearners:  req.body.SlowLearners,
                Solitary: req.body.Solitary,
                Wasteful:  req.body.Wasteful,
                Weak:  req.body.Weak,
                Robust:  req.body.Robust,
                Erudite:  req.body.Erudite,
                Fertile:  req.body.Fertile,
                NerveStapled: req.body.NerveStapled,
                Delicious:  req.body.Delicious
                    }) 
                    .then(spieces => res.status(200).json(spieces))
                    .catch(err => res.status(500).json({
                        error: err
                    }))

})


router.get('/:id', (req, res) => {
    Speices.findAll(

        {where:
            {userId: req.params.id }
        }
            
        )
        .then(spieces => res.status(200).json(spieces))
        .catch(err => res.status(500).json({
            error: err
        }))
        
 })

 router.get('/:id', (req, res) => {
    Speices.findAll(

        {where:
            {id: req.params.id }
        }
            
        )
        .then(spieces => res.status(200).json(spieces))
        .catch(err => res.status(500).json({
            error: err
        }))
        
 })
  router.put('/:id', (req, res) => {
    Speices.update(req.body, { 
        where: { 
            id: req.params.id }})
      .then(spieces => res.status(200).json(spieces))
      .catch(err => res.status(500).json({ error: err}))
  })

  router.delete('/:id', (req, res) => {
    Speices.destroy({
        where:
            {id: req.params.id }
        })
        .then(spieces => res.status(200).json(spieces))
        .catch(err => res.status(500).json({
            error: err
        }))
    })

    
  router.delete('/all/:id', (req, res) => {
    Speices.destroy({
        where:
            {userId: req.params.id }
        })
        .then(spieces => res.status(200).json(spieces))
        .catch(err => res.status(500).json({
            error: err
        }))
    })
module.exports = router;