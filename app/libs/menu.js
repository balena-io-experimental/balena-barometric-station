#!/bin/env node

{
    'use strict';
    const EventEmitter = require('events').EventEmitter;
    const util = require('util');
    
    let menu = function() {
        if (!(this instanceof menu)) return new menu();
    };
    util.inherits(menu, EventEmitter);

    module.exports = menu();
}
