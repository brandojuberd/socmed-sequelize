'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type : DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args: true
        }

      }
    },
    username: {
      type : DataTypes.STRING,
      unique: {
        msg: "Username must be unique"
      },
      allowNull: false,
      validate:{
        is: {
          args: /^(?=.{8})/,
          msg: 'Username must contain at least 8 characters.'
        },

      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull: false,
      validate:{
        // is: {
        //   args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-!@#$%^&*()_+=]).{8,}$/,
        //   msg: 'Password must contain at least 8 characters including at least a uppercase, a lowercase and a number.'
        // },

      }
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        isOldEnough(value){
          let birthDate = new Date(value)
          let now = new Date()

          if (birthDate.setFullYear(birthDate.getFullYear() + 17) > now) {
            throw new Error("Not old enough")
          } 
        } 
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};