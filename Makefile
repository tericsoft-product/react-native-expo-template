.PHONY: install start web android ios build-* submit-* clean type-check lint format

# Installation
install:
	npm install

# Development
start:
	npx expo start --clear

web:
	npx expo start --web

android:
	npx expo run:android

ios:
	npx expo run:ios

# EAS Build - Development
build-dev-android:
	eas build --platform android --profile development

build-dev-ios:
	eas build --platform ios --profile development

build-dev-all:
	eas build --platform all --profile development

# EAS Build - QA
build-qa-android:
	eas build --platform android --profile qa

build-qa-ios:
	eas build --platform ios --profile qa

build-qa-all:
	eas build --platform all --profile qa

# EAS Build - Production
build-prod-android:
	eas build --platform android --profile production

build-prod-ios:
	eas build --platform ios --profile production

build-prod-all:
	eas build --platform all --profile production

# Submit to stores
submit-ios:
	eas submit --platform ios

submit-android:
	eas submit --platform android

submit-all:
	eas submit --platform all

# Utilities
clean:
	rm -rf node_modules yarn.lock package-lock.json
	npm install

deep-clean:
	rm -rf node_modules yarn.lock package-lock.json .expo ios android
	npm install

type-check:
	npx tsc --noEmit

lint:
	npx eslint .

format:
	npx prettier --write "**/*.{ts,tsx,js,jsx,json,md}"

# Install EAS CLI globally
install-eas:
	npm install -g eas-cli

# EAS Login
eas-login:
	eas login

# EAS Logout
eas-logout:
	eas logout

# View builds
builds:
	eas build:list
