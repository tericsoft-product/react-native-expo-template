# Production-Ready Expo Template

A mobile-first React Native template built with Expo that runs on Android, iOS, and Web. Features modern architecture, TypeScript, and production-ready tooling.

## 🚀 Features

- ✅ **Expo Router** - File-based routing with type safety
- ✅ **TypeScript** - Full type safety across the codebase
- ✅ **Zustand** - Lightweight state management (replaces Redux)
- ✅ **React Query** - Server state management with caching
- ✅ **Day.js** - Modern date handling (replaces Moment.js)
- ✅ **MMKV** - Ultra-fast storage (30x faster than AsyncStorage)
- ✅ **Axios** - HTTP client with interceptors
- ✅ **Formik + Yup** - Form handling and validation
- ✅ **Expo Modules** - Image Picker, Device Info, Fonts, etc.
- ✅ **EAS Build** - Cloud builds for iOS and Android
- ✅ **Multi-Environment** - Dev, QA, and Production configs
- ✅ **Offline Support** - NetInfo + AsyncStorage
- ✅ **Lottie & Reanimated** - Animations

## 📁 Project Structure

```
expo-production-template/
├── app/                    # Expo Router (file-based routing)
│   ├── (auth)/            # Auth screens (login, register)
│   ├── (tabs)/            # Main app tabs (home, profile, settings)
│   ├── _layout.tsx        # Root layout with providers
│   └── +not-found.tsx     # 404 screen
├── components/            # Reusable UI components
├── services/              # API, storage, communications
│   ├── api_service.ts
│   ├── local_storage_service.ts
│   ├── common_service.ts
│   ├── communications_service.ts
│   └── queryClient.ts
├── store/                 # Zustand stores
│   ├── authStore.ts
│   └── appStore.ts
├── utils/                 # Utilities and configurations
│   ├── ENV.ts
│   ├── Colors.ts
│   └── FontConfig.ts
├── assets/                # Images, fonts, lottie files
├── app.config.ts          # Expo configuration
├── eas.json              # EAS Build profiles
├── Makefile              # Development commands
└── README.md
```

## 🛠️ Installation

### Prerequisites

- Node.js >= 20
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- EAS CLI: `npm install -g eas-cli`

### Setup

```bash
# Install dependencies
npm install
# or
make install

# Start development server
npx expo start
# or
make start
```

## 📱 Development

### Run on Platforms

```bash
# Web
npx expo start --web
# or
make web

# iOS (requires Mac)
npx expo run:ios
# or
make ios

# Android
npx expo run:android
# or
make android
```

### Testing with Expo Go

1. Install Expo Go on your phone
2. Run `npx expo start`
3. Scan the QR code with:
   - **iOS**: Camera app
   - **Android**: Expo Go app

## 🏗️ Building

### Development Builds

```bash
# Android
make build-dev-android

# iOS
make build-dev-ios

# Both platforms
make build-dev-all
```

### QA Builds

```bash
# Android
make build-qa-android

# iOS
make build-qa-ios

# Both platforms
make build-qa-all
```

### Production Builds

```bash
# Android
make build-prod-android

# iOS
make build-prod-ios

# Both platforms
make build-prod-all
```

## 🌍 Environment Configuration

### Build Profiles

Environment variables are configured in `eas.json`:

- **development**: Dev API, internal distribution
- **qa**: QA API, internal distribution
- **production**: Prod API, store submission

### Environment Variables

Edit `eas.json` to configure environment variables:

```json
{
  "build": {
    "production": {
      "env": {
        "API_URL": "https://api.yourapp.com",
        "MODE": "production",
        "BUILD_TYPE": "prod"
      }
    }
  }
}
```

Access in code:

```typescript
import ENV from '@/utils/ENV';
console.log(ENV.apiUrl); // https://api.yourapp.com
```

## 📦 Key Packages

| Package | Purpose | Why? |
|---------|---------|------|
| `zustand` | State management | 80% less code than Redux |
| `@tanstack/react-query` | Server state | Auto-caching, refetching |
| `day.js` | Date handling | 98% smaller than Moment.js |
| `react-native-mmkv` | Storage | 30x faster than AsyncStorage |
| `axios` | HTTP client | Best interceptor support |
| `formik` + `yup` | Forms | Industry standard |
| `expo-image-picker` | Media selection | Better than RN image picker |

## 🔧 Development Commands

```bash
# Development
make start          # Start Expo dev server
make web           # Run on web browser
make android       # Run on Android
make ios           # Run on iOS

# Building
make build-dev-*   # Development builds
make build-qa-*    # QA builds
make build-prod-*  # Production builds

# Utilities
make clean         # Clean and reinstall
make deep-clean    # Deep clean including native folders
make type-check    # TypeScript type checking
make lint          # ESLint
make format        # Prettier formatting

# EAS
make install-eas   # Install EAS CLI globally
make eas-login     # Login to EAS
make builds        # View build list
```

## 🎨 Adding Features

### Add a New Screen

Create a file in the `app/` directory:

```typescript
// app/example.tsx
import { View, Text } from 'react-native';

export default function ExampleScreen() {
  return (
    <View>
      <Text>Example Screen</Text>
    </View>
  );
}
```

Navigate to it:
```typescript
import { router } from 'expo-router';
router.push('/example');
```

### Add a Zustand Store

```typescript
// store/userStore.ts
import { create } from 'zustand';

interface UserState {
  name: string;
  setName: (name: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: '',
  setName: (name) => set({ name }),
}));
```

Use it:
```typescript
import { useUserStore } from '@/store/userStore';

function Component() {
  const { name, setName } = useUserStore();
  return <Text>{name}</Text>;
}
```

### Use React Query

```typescript
import { useQuery } from '@tanstack/react-query';
import { ApiService } from '@/services';

function Component() {
  const { data, isLoading } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => ApiService.get(`/users/${userId}`),
  });
}
```

## 📚 Documentation

- [Expo Router Docs](https://docs.expo.dev/router/introduction/)
- [Zustand Docs](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [React Query Docs](https://tanstack.com/query/latest)
- [EAS Build Docs](https://docs.expo.dev/build/introduction/)

## 🤝 Contributing

1. Add your custom components to `/components`
2. Configure API endpoints in `/utils/ENV.ts`
3. Add screens to the `/app` directory
4. Customize colors and styles in `/utils`

## 📝 License

MIT

---

**Built with ❤️ using Expo and modern React Native best practices**
