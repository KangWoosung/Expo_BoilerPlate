import '../global.css';

import { Stack } from 'expo-router';
import { I18nManager, View } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { getLocale } from '~/utils/localization/localize';
import { PortalHost } from '@rn-primitives/portal';
import { LoadingProvider } from '~/context/LoadingContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useColorScheme } from 'nativewind';
const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
