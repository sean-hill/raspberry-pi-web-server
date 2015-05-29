# Raspberry Pi Express Web Server
This is how I built a home web server with a Raspberry Pi and Express Server.

## Purchases

1. [Raspberry Pi B+](http://amzn.com/B00LPESRUK)
2. [Power Supply](http://amzn.com/B00GWDLJGS)
3. [Micro SD Card](http://amzn.com/B00DYQYLQQ) (At least 8 GB)
4. [Case](http://amzn.com/B00MQLB1N6) (Optional)

## Hardware

1. Raspberry Pi B+
2. Power Supply for Raspberry Pi
3. Modem and Router
4. Ethernet Cord

## Setup

1. Install the operating system by following [these steps](https://www.raspberrypi.org/help/noobs-setup/)
2. Once the operating system is installed, from the command line update the software to the latest.
3. `$ sudo apt-get update; sudo apt-get upgrade`
4. If wanted, change the default `pi` user password to something more secure.
5. `$ sudo raspi-config`
6. Navigate to `2 Change User Password` and follow the steps.

## Install latest NodeJS
1. `$ wget http://node-arm.herokuapp.com/node_latest_armhf.deb`
2. `$ sudo dpkg -i node_latest_armhf.deb`
3. `$ node -v`

## Install Git and clone this repo
1. `$ sudo apt-get install git






