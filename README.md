# resin-barometric-station
A smart barometric station!

![barometric station](https://raw.githubusercontent.com/resin-io-playground/resin-barometric-station/master/pics/2016-10-06.jpg)

### What it does
This [resin.io](http://resin.io) application monitors temperature (C) and pressure (hPa), and displays those information on the DoT HAT. The backlight changes accordingly to the measured temperature on a scale from blue to red.
The 3rd line of the display is reserved to the [Resin Supervisor](http://docs.resin.io/understanding/understanding-devices/#resin-io-supervisor) state.

### Parts
* [Display-O-Tron HAT](https://shop.pimoroni.com/products/display-o-tron-hat)
* [Adafruit BMP280 I2C or SPI Barometric Pressure & Altitude Sensor](https://shop.pimoroni.com/products/adafruit-bmp280-i2c-or-spi-barometric-pressure-altitude-sensor)
* [Raspberry Pi](https://www.raspberrypi.org/) 0/2/2+/3

### Hardware setup

Connect these pins between the DoT HAT and the BMP280 breakout board:

| DoT HAT pin | BMP280 pin |
|:-----------:|:----------:|
| 5V          | VIN        |
| GND         | GND        |
| SDA         | SDI        |
| SCL         | SCK        |

### Software setup

Clone this repository onto your local machine.
[Sign up](https://dashboard.resin.io/signup) to resin.io or [log in](https://dashboard.resin.io/login) to your dashboard. Create a new application, and add the remote repository to your local clone with `git remote ...` (you can see the correct setting in your application dashboard). Git push this code to resin.io.

Download the HostOS image from the application dashboard, flash it on an SD card (e.g. using [etcher](git remote add resin imrehg@git.resin.io:imrehg/elce.git)), and boot the device. The device will then connect to resin.io, download the application, and start it.

### Variables

The variables are set in the resin.io dashboard, in the "Environmental Variables" menu of either the application (fleet-wide setting), or for the particular device (device-only setting).

Current optional settings:

* `BAROMETRIC_SENSOR`: default is `bmp280`, also supports `bmp085`. The value is the filename (without `.js` of one of the barometric sensor drivers in the `app/libs` directory. Note: the different drivers might also need different physical wiring.

## Contributing

Feel free to contribute improvements to this project, such as more sensor drivers, improved functionality, or bug reports! Just open an issue or send a pull request!

## License

Copyright 2016 Resinio Ltd.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
