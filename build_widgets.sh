#!/bin/bash
set -e

# Store original directory
ORIGIN_DIR=$(pwd)

# Execute commands sequentially with && operator
echo "🔍 Starting build process in: $(pwd)" && \
echo "🧹 Cleaning dist directories..." && \
rm -rf ../dist && \
rm -rf ./dist && \

echo "📍 Building in root: $(pwd)" && \
npm run build && \

echo "📍 Moving to booking calendar..." && \
cd ../camperfuchs-booking-calendar && \
echo "📍 Currently in: $(pwd)" && \
npm run build && \

echo "📍 Moving to image slider..." && \
cd ../camperfuchs-image-slider && \
echo "📍 Currently in: $(pwd)" && \
npm run build && \

echo "📍 Moving to vehicle details..." && \
cd ../camperfuchs-vehicle-details && \
echo "📍 Currently in: $(pwd)" && \
npm run build && \

echo "📍 Moving to campersales widget..." && \
cd ../campersales-widget && \
echo "📍 Currently in: $(pwd)" && \
npm run build && \

cd "$ORIGIN_DIR" && \

ls -la && \

echo " Copying dist files..." && \
cp -r dist ../dist && \

echo "✅ Build complete in: $(pwd)"

# Return to original directory
cd "$ORIGIN_DIR"