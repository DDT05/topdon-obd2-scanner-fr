@echo off
REM Docker build script for TOPDON CarPal OBD2 Scanner Landing Page (Windows)
REM This script builds the Docker image and runs the container

echo 🚀 Building TOPDON CarPal OBD2 Scanner Landing Page Docker Image...

REM Check if Docker is running
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not running. Please start Docker Desktop and try again.
    pause
    exit /b 1
)

REM Build the Docker image
echo 📦 Building Docker image...
docker build -t topdon-obd2-landing:latest .

if %errorlevel% equ 0 (
    echo ✅ Docker image built successfully!

    REM Check if container is already running
    docker ps | findstr topdon-obd2-landing >nul
    if %errorlevel% equ 0 (
        echo 🔄 Stopping existing container...
        docker stop topdon-obd2-landing
        docker rm topdon-obd2-landing
    )

    REM Run the container
    echo 🏃 Starting Docker container...
    docker run -d --name topdon-obd2-landing -p 3000:3000 --env-file .env.local topdon-obd2-landing:latest

    if %errorlevel% equ 0 (
        echo ✅ Container is running successfully!
        echo 🌐 Application is available at: http://localhost:3000
        echo 🔍 Check container status: docker ps
        echo 📋 View logs: docker logs topdon-obd2-landing
        echo 🛑 Stop container: docker stop topdon-obd2-landing
    ) else (
        echo ❌ Failed to start container
        pause
        exit /b 1
    )
) else (
    echo ❌ Failed to build Docker image
    pause
    exit /b 1
)

pause