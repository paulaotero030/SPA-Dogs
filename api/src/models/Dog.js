const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'dog',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      years_of_life: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
// const { DataTypes } = require('sequelize');
// const sequelize = require('../db');

// const dog = sequelize.define('Dog', {
//   imagen: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   nombre: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   altura: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   peso: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   anos_de_vida: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// });

// module.exports = dog;
