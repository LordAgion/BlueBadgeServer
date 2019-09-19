module.exports = (sequelize, DataTypes)=> {
    const Speices = sequelize.define('speice', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        spiecesName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        spiecesType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        planetType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preferedPreferance: {
            type: DataTypes.STRING,
            allowNull: true
        },

        majorTrait: {
            type: DataTypes.STRING,
            allowNull: true
        },

        isMachine: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        specialTrait: {
            type: DataTypes.STRING,
            allowNull: true
        },
        doubleJointed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        durable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        efficientProcessors: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        emotionEmulators: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        enhancedMemory: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        learningAlgorithms: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        logicEngines: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        massProduced: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        powerDrills: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        recycled: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Bulky: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        superconductive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        CustomMade: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        HighMaintenance: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Luxurious: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        RepurposedHardware: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Uncanny: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        domesticProtocols: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        harvesters: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        loyaltyCircuits: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        
        propagandaMachines: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Adaptive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        ExtremelyAdaptive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        
        Agrarian: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Charismatic: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Communal: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        
        Conformists: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Conservationist: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Enduring: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Venerable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Industrious: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Ingenious: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Intelligent: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        NaturalEngineers: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        NaturalPhysicists: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        NaturalSociologists: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Nomadic: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        QuickLearners: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        RapidBreeders: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Resilient: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Strong: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        VeryStrong: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Talented: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Thrifty: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Traditional: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Decadent: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Deviants: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Fleeting: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Nonadaptive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Quarrelsome: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Repugnant: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Sedentary: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        SlowBreeders: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        SlowLearners: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Solitary: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Wasteful: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Weak: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Robust: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Erudite: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Fertile: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        NerveStapled: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Delicious: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }


    })
    return Speices
}