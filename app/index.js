#!/bin/env node

{
    'use strict';
    const lcd = require(__dirname + '/libs/lcd.js');
    const menu = require(__dirname + '/libs/menu.js');
    const barometer = require(__dirname + '/libs/barometer.js');

    let currentVolume = 0;

    lcd.init();
    barometer.start();

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

    barometer.on('error',() => {
      console.log(error);
    });

    barometer.on('reading', (data) => {
      console.log('pressure: ' + data.pressure + '; temperature: ' + data.temperature);
    });
}
