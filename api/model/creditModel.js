module.exports = function (sequelize, Sequelize) {
    const AddCredit = sequelize.define(
        'tb_add_credit', {
            add_credit_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                field: 'add_credit_id',
                autoIncrement: true
            },
            add_credit_bank_id: {
                type: Sequelize.STRING,
                field: 'add_credit_bank_id'
            },
            add_credit_receipt: {
                type: Sequelize.STRING,
                field: 'add_credit_receipt'
            },
            add_credit_ststus_id: {
                type: Sequelize.INTEGER,
                field: 'add_credit_ststus_id'
            },
            add_credit_trx: {
                type: Sequelize.STRING,
                field: 'add_credit_trx'
            },
            add_credit_amount: {
                type: Sequelize.INTEGER,
                field: 'add_credit_amount'
            },
            add_credit_date: {
                type: Sequelize.STRING,
                field: 'add_credit_date'
            },
            add_credit_user_id: {
                type: Sequelize.INTEGER,
                field: 'add_credit_user_id'
            }
        }, {
            timestamps: false,
            freezeTabelName: false,
            tableName: 'tb_add_credit'
        });


    const WithdrawCredit = sequelize.define(
        'tb_withdraw_credit', {
            withdraw_credit_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                field: 'withdraw_credit_id',
                autoIncrement: true
            },
            withdraw_credit_bank_id: {
                type: Sequelize.STRING,
                field: 'withdraw_credit_bank_id'
            },
            withdraw_credit_amount: {
                type: Sequelize.INTEGER,
                field: 'withdraw_credit_amount'
            },
            withdraw_credit_trx: {
                type: Sequelize.STRING,
                field: 'withdraw_credit_trx'
            },
            withdraw_credit_bank_number: {
                type: Sequelize.STRING,
                field: 'withdraw_credit_bank_number'
            },
            withdraw_credit_date: {
                type: Sequelize.STRING,
                field: 'withdraw_credit_date'
            },
            withdraw_credit_ststus_id: {
                type: Sequelize.INTEGER,
                field: 'withdraw_credit_ststus_id'
            },
            withdraw_credit_user_id: {
                type: Sequelize.INTEGER,
                field: 'withdraw_credit_user_id'
            }
        }, {
            timestamps: false,
            freezeTabelName: false,
            tableName: 'tb_withdraw_credit'
        });

    const CreditActivity = sequelize.define(
        'tb_credit_activity', {
            credit_activity_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                field: 'tb_credit_activity',
                autoIncrement: true
            },
            credit_activity_name: {
                type: Sequelize.STRING,
                field: 'credit_activity_name'
            },
        }, {
            timestamps: false,
            freezeTabelName: false,
            tableName: 'tb_credit_activity'
        });

    return {
        WithdrawCredit,
        AddCredit,
        CreditActivity
    };

};