#!/bin/bash

# Docker build script for TOPDON CarPal OBD2 Scanner Landing Page
# This script builds the Docker image and runs the container

echo "🚀 Building TOPDON CarPal OBD2 Scanner Landing Page Docker Image..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop and try again."
    exit 1
fi

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t topdon-obd2-landing:latest .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"

    # Check if container is already running
    if docker ps | grep -q topdon-obd2-landing; then
        echo "🔄 Stopping existing container..."
        docker stop topdon-obd2-landing
        docker rm topdon-obd2-landing
    fi

    # Run the container
    echo "🏃 Starting Docker container..."
    docker run -d \
        --name topdon-obd2-landing \
        -p 3000:3000 \
        --env-file .env.local \
        topdon-obd2-landing:latest

    if [ $? -eq 0 ]; then
        echo "✅ Container is running successfully!"
        echo "🌐 Application is available at: http://localhost:3000"
        echo "🔍 Check container status: docker ps"
        echo "📋 View logs: docker logs topdon-obd2-landing"
        echo "🛑 Stop container: docker stop topdon-obd2-landing"
    else
        echo "❌ Failed to start container"
        exit 1
    fi
else
    echo "❌ Failed to build Docker image"
    exit 1
fi