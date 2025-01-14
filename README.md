# ECL v2 - Europa Component Library

[![Build Status](https://drone.fpfis.eu/api/badges/ec-europa/europa-component-library/status.svg)](https://drone.fpfis.eu/ec-europa/europa-component-library)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/adff9a95-45f4-411e-a148-fef1211ac9ed/deploy-status)](https://app.netlify.com/sites/europa-component-library/deploys)

The Europa Component Library (ECL) is a library of components applicable to all European Commission websites (hosted under ec.europa.eu domain). The library contains all available components which you can use to build your website.

The Digital Transformation team (DTT) - a cross European Commission team led by DGs COMM, DIGIT, and DTT - is the owner of this library.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code for implementation

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Quick start

The ECL is bundled in various [presets](docs/06-presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/ec-preset-website` or `yarn add @ecl/ec-preset-website`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{preset}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.7.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha384-deafm1hslSavkYYA5FoWAGd5sXh47k0B1VQNJOUS/WzJ+xCiBD4cNmbZRdrhhJVn sha512-EF8gmTRyjZLZwAQizvmK8N7uII71zEdg2GPwBjmuVr3d4X43DnE1pQrVaGXCBJrK+e+8avSeJPnUhQ+N7Wshww=="
    crossorigin="anonymous"
    rel="stylesheet"
    media="screen"
  />
  <link
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.7.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha384-8tyQSQUuq+q6YBi7P1/Jx9YNU2esO+BIFIwofrZWdiuwoPmrUGG5BYWBKplLMMzA sha512-VIG2WMS4zT57BfLzp67M8bPnVqBwNX/DbhOLSSDRCpdfWkS1pi/JGmqWEo3uLh7qhxqkeFK3G/TihKmjF/uAng=="
    crossorigin="anonymous"
    rel="stylesheet"
    media="print"
  />
  ```

  ```html
  <script
    type="text/javascript"
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.7.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha384-d5+U7QftT2DojjbCbjMiAaZDpBFdMz+qKLInNkXLImJkB79od5L8zurPyRh8glol sha512-CN4Ry8RPUKuvKaw4lk+NPIQhMOHSalT2Upz7jGeCo+tukwq+oNfX8HDvpOLRmNQsmsSibJgfo58ETmnDoe1XYQ=="
    crossorigin="anonymous"
    defer
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.9.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.9.0) - [website](https://v1--europa-component-library.netlify.com/)
- v0.24.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.0) - [website](https://v0--europa-component-library.netlify.com/)
