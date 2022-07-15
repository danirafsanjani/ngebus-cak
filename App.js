import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import {
  DashboardScreen,
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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
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
  );
};

export default App;
