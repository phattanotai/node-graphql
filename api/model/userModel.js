module.exports = function (sequelize, Sequelize) {
    const Users = sequelize.define(
        'tb_users', {
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

        const UserType = sequelize.define(
            'tb_user_type', {
                user_type_id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    field: 'user_type_id',
                    autoIncrement: true
                },
                user_type_name: {
                    type: Sequelize.STRING,
                    field: 'user_type_name'
                },
                user_type_detail: {
                    type: Sequelize.STRING,
                    field: 'user_type_detail'
                },
                user_type_rate: {
                    type: Sequelize.INTEGER,
                    field: 'user_type_rate'
                },
                user_type_percent: {
                    type: Sequelize.INTEGER,
                    field: 'user_type_percent'
                },
                user_type_active_status: {
                    type: Sequelize.STRING,
                    field: 'user_type_active_status'
                }
            }, {
                timestamps: false,
                freezeTabelName: false,
                tableName: 'tb_user_type'
            });

    return {
        Users,
        UserType
    }

};