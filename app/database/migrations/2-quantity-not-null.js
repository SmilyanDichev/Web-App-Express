'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "quantity" on table "ordersProducts"
 *
 **/

var info = {
    "revision": 2,
    "name": "quantity-not-null",
    "created": "2018-03-31T07:43:29.033Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "ordersProducts",
        "quantity",
        {
            "type": Sequelize.INTEGER,
            "allowNull": false
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
