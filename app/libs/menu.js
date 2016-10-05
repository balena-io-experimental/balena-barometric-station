#!/bin/env node

{
    'use strict';

    let menu = function() {
        if (!(this instanceof menu)) return new menu();
    };
    util.inherits(menu, EventEmitter);

    module.exports = menu();
}
