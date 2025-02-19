# SpaceX App

A **React Native** application built with **Expo** that follows a **feature-based architecture** with a **simplified version of Clean Architecture** to separate the UI layer from the data layer while keeping it simple. It uses **Expo Router** for navigation and **TypeScript** for type safety.

## Project Structure

```
📦 SpaceX
├── .expo/                # Expo related files
├── .vscode/              # VSCode settings and extensions
├── app/                  # Handles navigation and layout using Expo Router
├── context/              # Global React context providers (Auth, Theme, etc.)
├── data/                 # Data handling (API, database, preferences, etc.)
│   ├── api/              # API endpoint constants
│   ├── data-hooks/       # Custom hooks for data retrieval
│   ├── models/           # TypeScript models for data types
│   ├── repository/       # Manages data retrieval from API, DB, etc.
├── node_modules/         # Dependencies
├── presentation/         # UI layer
│   ├── assets/           # Common assets
│   ├── features/         # Screens, feature-specific components, hooks, constants
│   ├── shared/           # Reusable UI components, styles, and hooks
│   │   ├── components/   # Common UI components
│   │   ├── styles/       # Global styling
│   │   ├── ui-hooks/     # Hooks related to UI behavior
│   ├── theme/            # Theme configuration
├── scripts/              # Utility scripts
├── .gitignore            # Git ignored files
├── app.json              # Expo configuration
├── expo-env.d.ts         # Environment type definitions
├── package.json          # Project dependencies
├── package-lock.json     # Lock file for dependencies
├── README.md             # Project documentation
├── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites
- Install **Node.js** (LTS recommended)
- Install **Expo CLI**:
  ```sh
  npm install -g expo-cli
  ```

### Installation
1. Clone the repository:
   ```sh
   git clone hhttps://github.com/EdwinLovo/SpaceX.git
   ```
2. Navigate to the project directory:
   ```sh
   cd spacex
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
- Start the development server:
  ```sh
  npx expo start
  ```
- Scan the QR code using **Expo Go** (Android/iOS) or run it in a simulator/emulator.
  

## Features
- **Feature-based architecture** with a **simplified version of Clean Architecture**
- **Expo Router** for navigation
- **Offline-first architecture** using local storage and caching
- **React Context** for global state management
- **Reusable UI components** for consistency
- **Modular data fetching** with custom hooks and repositories


