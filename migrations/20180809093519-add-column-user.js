'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Users', 'age', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Users', 'age');
  }
};
