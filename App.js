import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from "./screens";
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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
