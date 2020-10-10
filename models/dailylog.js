module.exports = function(sequelize, DataTypes) {
    var DailyLog = sequelize.define("DailyLog", {
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
  
    DailyLog.associate = function(models) {
      // We're saying that a dailyLog should belong to a User
      // A dailyLog can't be created without a User due to the foreign key constraint
      DailyLog.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return DailyLog;
  };