# Quick Start Guide

## 🚀 Get Started

```bash
cd expo-production-template

# Install dependencies (if not already done)
npm install

# Start development server
npm start
# or
make start

# Run on web
make web

# Run on iOS
make ios

# Run on Android
make android
```

## 📱 Test on Your Phone

1. Install **Expo Go** app on your phone
2. Run `npm start`
3. Scan the QR code:
   - **iOS**: Use Camera app
   - **Android**: Use Expo Go app

## 🏗️ Building for Production

### Set Up EAS (One Time)

```bash
npm install -g eas-cli
eas login
```

### Build Commands

```bash
# QA builds (internal testing)
make build-qa-android
make build-qa-ios

# Production builds
make build-prod-android
make build-prod-ios
make build-prod-all  # Both platforms
```

## 🎯 Key Features

✅ Runs on iOS, Android, and Web  
✅ TypeScript with strict mode  
✅ Zustand for state (simpler than Redux)  
✅ React Query for API state  
✅ File-based routing (Expo Router)  
✅ Multi-environment (dev/qa/prod)  
✅ EAS Build (no Fastlane needed!)  

## 📚 Learn More

- See [README.md](file:///Users/mohammedsulthan/Desktop/RN-Expo-Template/expo-production-template/README.md) for complete documentation
- Check [walkthrough.md](file:///Users/mohammedsulthan/.gemini/antigravity/brain/93cbbdcc-a2ea-482e-97fb-bbd01d0d3e7e/walkthrough.md) for migration details
