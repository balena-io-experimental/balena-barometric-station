#!/bin/env node

{
    'use strict';
    const lcd = require(__dirname + '/libs/lcd.js');
    const menu = require(__dirname + '/libs/menu.js');

    let currentVolume = 0;

    lcd.init();
    lcd.on('button', (btn) => {
        console.log('A button has been pressed: ', btn);

        switch (btn) {
            case "up":

                break;
            case "down":

                break;
            case "select":

                break;
            case "right":

                break;
            case "left":

                break;
        }
    });
}
