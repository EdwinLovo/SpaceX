# SpaceX App

A **React Native** application built with **Expo** that follows a **feature-based architecture** with a **simplified version of Clean Architecture** to separate the UI layer from the data layer while keeping it simple. It uses **Expo Router** for navigation and **TypeScript** for type safety.

## Project Structure

```
📦 SpaceX
├── 📁 app/                              # Handles navigation and layout using Expo Router
├── 📁 data/                             # Data layer
│   ├── 📁 constants/                    # App-wide constant values
│   ├── 📁 models/                       # TypeScript interfaces and types
│   ├── 📁 repository/                   # Data sources (API, DB, etc.)
│   └── 📁 state/                        # Zustand store for state management
├── 📁 node_modules/                     
├── 📁 presentation/                    # UI layer
│   ├── 📁 assets/                       # Static assets like images and fonts
│   ├── 📁 context/                      # Global React context providers (Auth, Theme, etc.)
│   ├── 📁 features/                     # Feature-based folders for screens and logic
│   │   ├── 📁 ai/                       # AI-related screens
│   │   ├── 📁 auth/                     # Authentication flow
│   │   │   ├── 📁 signin/              
│   │   │   │   ├── 📁 hooks/            # Custom hooks for the Sign In screen
│   │   │   │   └── 📄 signin.tsx        # Sign In screen
│   │   │   └── 📁 signup/               # Sign Up screen
│   │   ├── 📁 launches/                 # Launch-related features
│   │   │   ├── 📁 all-launches/        
│   │   │   │   ├── 📁 hooks/            # Hooks for All Launches screen
│   │   │   │   ├── 📄 all-launches-screen.tsx
│   │   │   │   └── 📄 launch-flight-card.tsx
│   │   │   ├── 📁 launch-details/       # Launch Details screen
│   │   │   └── 📁 next-launch/          # Next Launch screen
│   │   └── 📁 profile/                  # User profile screen
│   └── 📁 shared/                       # Reusable UI utilities
│       ├── 📁 components/               # Common components
│       ├── 📁 hooks/                    # Shared UI hooks
│       └── 📁 styles/                   # Global styles
├── 📄 .gitignore
├── 📄 app.json
├── 📄 expo-env.d.ts
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 README.md
└── 📄 tsconfig.json
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


