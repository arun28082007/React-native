// app/_layout.js
import "expo-dev-client";
import { Stack } from "expo-router";
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f4511e", // match your header color
  },
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerShown: false,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="details" />
        <Stack.Screen name="arun" />
        <Stack.Screen name="ani" />
      </Stack>
    </PaperProvider>
  );
}