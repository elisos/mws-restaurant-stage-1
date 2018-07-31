# Restaurant Reviews Web Application

## Table of Contents

* [Overview](#overview)
* [Getting Started](#gettingstarted)
* [Attributions](#attributions)
* [Contributing](#contributing)

## Overview
This is a web-based application which allows you to look up restaurants in NYC by neighbourhood and by type of cuisine and find reviews about them. It was created as a requirement for Udacity's Front End Developer Nanodegree.

## Getting Started

### Running the App

To run the app, first download the project repo to your machine. 

It needs a local server to operate. Python has a simple version. If you do not have Python on your machine, you can download it [here](https://www.python.org/). In a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000.

With your server running, visit the site: http://localhost:8000 and you will see the web app.

### Using the App

Using the drop down menus for neighbourhood and cuisine type, narrow down the options for restaurants to those you would like. Clicking on a retaurant name will take you to an individual page for that restaurant, with its address, opening hours and reviews. Clicking on a restaurant's marker on the map will also take you to its page. To navigate back to the main landing page, click on the 'Restaurant Reviews' title in the header or on the 'Home' link below the header.

## Attributions

The base code for the project was provided by Udacity. I was asked to make the app responsive to different screen sizes, accessible to those with disabilities, and progressive so that it is available off-line should an internet connection fail.

The code for the skip-link came from [here](https://webaim.org/techniques/skipnav/).

The version of source set I used came from [here](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/).

The code for the service worker came almost straight from the Udacity course material.

Much guidance was provided by my fellow Udacity students, and of course, my mentor Jordi.

## Contributing

Feel free to fork the project repo and suggest any changes you like!