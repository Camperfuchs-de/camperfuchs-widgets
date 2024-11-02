#!/bin/bash
npm run build &&
cd ../camperfuchs-booking-calendar &&
npm run build &&
cd ../camperfuchs-image-slider &&
npm run build &&
cd ../camperfuchs-vehicle-details &&
npm run build &&
cd ../campersales-widget &&
npm run build &&
cd ../camperfuchs-widget &&
cp -r dist/ ../dist