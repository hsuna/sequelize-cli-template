'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

  User.associate = function(models) {
    models.User.hasMany(models.Task);
  };

  return User;
};