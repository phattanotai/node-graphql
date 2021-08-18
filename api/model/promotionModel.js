module.exports = function (sequelize, Sequelize) {
    const Promotion = sequelize.define(
        'tb_promotions', {
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                field: 'user_id',
                autoIncrement: true
            },
            user_name: {
                type: Sequelize.STRING,
                field: 'user_name'
            },
            user_tel: {
                type: Sequelize.STRING,
                field: 'user_tel'
			},
            user_username: {
                type: Sequelize.STRING,
                field: 'user_username'
            },
			user_password: {
                type: Sequelize.STRING,
                field: 'user_password'
			},
			user_type_id: {
                type: Sequelize.INTEGER,
                field: 'user_type_id'
			},
			balance_credit: {
                type: Sequelize.INTEGER,
                field: 'balance_credit'
            }
        }, {
            timestamps: false,
            freezeTabelName: false,
            tableName: 'tb_users'
        });
    return Promotion;
};