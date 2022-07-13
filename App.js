import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DashboardScreen,
  ForgotScreen,
  LoginScreen,
  OnboardingScreen,
  RegisterScreen,
  WisataScreen,
  WisataDetailScreen,
  WisataDetailScreen1,
  UKMScreen,
  UKMDetailScreen,
  UKMDetailScreen1,
  SbyBusScreen,
  SbyBusDetailScreen1,
  SbyBusDetailScreen2,
  SbyBusDetailScreen3,
  SbyBusDetailScreen4,
  SbyBusDetailScreen5,
} from "./screens";
import { NativeBaseProvider } from "native-base";
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
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAppFirstLaunch && <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />}
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
            <Stack.Screen name="WisataScreen" component={WisataScreen} />
            <Stack.Screen name="WisataDetail" component={WisataDetailScreen} />
            <Stack.Screen name="WisataDetail1" component={WisataDetailScreen1} />
            <Stack.Screen name="UKMScreen" component={UKMScreen} />
            <Stack.Screen name="UKMDetail" component={UKMDetailScreen} />
            <Stack.Screen name="UKMDetail1" component={UKMDetailScreen1} />
            <Stack.Screen name="SbyBusScreen" component={SbyBusScreen} />
            <Stack.Screen name="SbyBusDetail1" component={SbyBusDetailScreen1} />
            <Stack.Screen name="SbyBusDetail2" component={SbyBusDetailScreen2} />
            <Stack.Screen name="SbyBusDetail3" component={SbyBusDetailScreen3} />
            <Stack.Screen name="SbyBusDetail4" component={SbyBusDetailScreen4} />
            <Stack.Screen name="SbyBusDetail5" component={SbyBusDetailScreen5} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    )
  );
};

export default App;
