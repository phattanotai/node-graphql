module.exports = function (sequelize, Sequelize) {
    const Lotto = sequelize.define(
        'tb_lotto', {
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
            tableName: 'tb_lotto'
        });

        const LottoType = sequelize.define(
            'tb_lotto_type', {
                lotto_type_id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    field: 'lotto_type_id',
                    autoIncrement: true
                },
                lotto_type_name: {
                    type: Sequelize.STRING,
                    field: 'lotto_type_name'
                },
                lotto_type_award: {
                    type: Sequelize.INTEGER,
                    field: 'lotto_total_award'
                },
                lotto_type_route: {
                    type: Sequelize.STRING,
                    field: 'lotto_type_route'
                },
               
            }, {
                timestamps: false,
                freezeTabelName: false,
                tableName: 'tb_lotto_type'
            });

    return {
        Lotto,
        LottoType
    }
};