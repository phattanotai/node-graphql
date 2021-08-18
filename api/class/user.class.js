const _class = new (function () {
  this.getDatalogin = function (context, args) {
    return new Promise(async (resolve, reject) => {
      context.log.debug('getDatalogin');
      let user = await context.Model.Users.findOne({
        where: {
          user_username: args.username,
          user_password: args.password,
        },
        attributes: {
          exclude: ['user_username', 'user_password'],
        },
      });
      if (user) {
        const userType = await context.Model.UserType.findOne({
          where: {
            user_type_id: user.user_type_id,
          },
        });
        user.userType = [userType];
        resolve(user);
      } else {
        resolve(null);
      }
    });
  };

  this.getUsersData = function (context, args) {
    return new Promise(async (resolve, reject) => {
      context.log.debug('getUsersData');
      let users = await context.Model.Users.findAll();
      if (users) {
        let userType = await context.Model.UserType.findOne();
        userType = [userType];
        for (const user of users) {
          const type = userType.filter(function (u) {
            return u.user_type_id === user.user_type_id;
          });

          user.userType = type;
        }
        resolve(users);
      } else {
        resolve(null);
      }
    });
  };

  this.getUserData = function (context, args) {
    return new Promise(async (resolve, reject) => {
      context.log.debug('getUserData');
      let user = await context.Model.Users.findOne({
        where: {
          user_username: args.username,
          user_password: args.password,
        },
        attributes: {
          exclude: ['user_username', 'user_password'],
        },
      });
      if (user) {
        const userType = await context.Model.UserType.findOne({
          where: {
            user_type_id: user.dataValues.user_type_id,
          },
        });
        user.dataValues.userType = [userType.dataValues];
        resolve(user.dataValues);
      } else {
        resolve(null);
      }
    });
  };
})();

module.exports = _class;
