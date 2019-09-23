module.exports= (sequelize, DataTypes) => {
    const SpeicePlus = sequelize.define('speicePlus', {
        speciesId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        speciePlural:{
            type: DataTypes.STRING,
            allowNull: true
        },

        specieAdj:{
            type: DataTypes.STRING,
            allowNull: true
        },

        homeworld:{
            type: DataTypes.STRING,
            allowNull: true
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true
        },


    })
    return SpeicePlus;
}
