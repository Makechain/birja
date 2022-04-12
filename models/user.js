'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    confirmPassword: DataTypes.STRING,
    age: DataTypes.STRING,
    tokenExpiration: DataTypes.DATE
  }, {
    timestamps: false,
    sequelize,
    modelName: 'User',
  });
  return User;
};