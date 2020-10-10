module.exports = function(sequelize, DataTypes) {
    var Goals = sequelize.define("Goals", {
      sleep_time: {
        type: DataTypes.INTEGER
      },
      mindful_minutes: {
        type: DataTypes.INTEGER
      },
      exercise_time: {
        type: DataTypes.INTEGER
      },
    });
  
    Goals.associate = function(models) {
      // We're saying that a Goal should belong to a User
      // A Goal can't be created without a User due to the foreign key constraint
      Goals.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Goals;
  };
  