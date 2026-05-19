import "@/styles/global.css";
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="mainPage/index"
          options={{
            title: 'Main',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="trainPage/index"
          options={{
            title: 'Train',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="trainHubPage/index"
          options={{
            title: 'Train Hub',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="statisticPage/index"
          options={{
            title: 'Statistics',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="settingsPage/index"
          options={{
            title: 'Settings',
            headerShown: true,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
