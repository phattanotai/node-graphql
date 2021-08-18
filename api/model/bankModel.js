module.exports = function (sequelize, Sequelize) {
    const Bank = sequelize.define(
        'tb_bank', {
            bank_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                field: 'bank_id',
                autoIncrement: true
            },
            bank_name: {
                type: Sequelize.STRING,
                field: 'bank_name'
            },
            bank_nickname: {
                type: Sequelize.STRING,
                field: 'bank_nickname'
            }
        }, {
            timestamps: false,
            freezeTabelName: false,
            tableName: 'tb_bank'
        });

    const BankAccount = sequelize.define(
        'tb_bank_account', {
            bank_account_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                field: 'bank_account_id',
                autoIncrement: true
            },
            bank_account_name: {
                type: Sequelize.STRING,
                field: 'bank_account_name'
            },
            bank_account_number: {
                type: Sequelize.STRING,
                field: 'bank_account_number'
            },
            bank_id: {
                type: Sequelize.INTEGER,
                field: 'bank_id'
            },
            bank_account_create: {
                type: Sequelize.STRING,
                field: 'bank_account_create'
            },
            bank_account_status: {
                type: Sequelize.STRING,
                field: 'bank_account_status'
            }
        }, {
            timestamps: false,
            freezeTabelName: false,
            tableName: 'tb_bank_account'
        });

    return {
        Bank,
        BankAccount
    };
};