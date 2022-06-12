import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard, ForgotScreen, LoginScreen, OnboardingScreen, RegisterScreen } from "./screens";
import { AsyncStorage } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAppFirstLaunch, setIsAppFirstLaunch] = React.useState(null);

  React.useEffect(async () => {
    const app = await AsyncStorage.getItem("isAppFirstLaunch");
    if (app === null) {
      setIsAppFirstLaunch(true);
      AsyncStorage.setItem("isAppFirstLaunch", "false");
    } else {
      setIsAppFirstLaunch(false);
    }
  }, []);
  return (
    isAppFirstLaunch != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAppFirstLaunch && <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
