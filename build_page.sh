#!/bin/bash
rm -rf assets && \
rm -rf booking-calendar && \
rm -rf image-slider && \
rm -rf vehicle-details && \
rm -rf vehicle-sale && \
rm index.html && \
cp -r ../dist/* . && \
rm -rf dist