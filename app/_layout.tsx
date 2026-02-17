import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { allRoutes } from '@/constants/Routes';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';
import '../global.css';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  const backgroundColor = useThemeColor({  }, 'background')
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{backgroundColor: backgroundColor, flex: 1}}>
      
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor
            },
            headerStyle: {
              backgroundColor
            }
          }}
        >
          <Stack.Screen
            name='index'
            options={{
              title: ''
            }}
          />

          {
            allRoutes.map(route => (
              <Stack.Screen
                key={ route.name }
                name={ route.name }
                options={{
                  title: route.title,
                  headerShown: !route.title.includes('Slides')
                  
                }}
              />
            ))
          }
        </Stack>
        <StatusBar style="auto" />
      </ThemeChangerProvider>
        
      
    </GestureHandlerRootView>
  );
}
