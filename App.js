import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DashboardScreen, ForgotScreen, LoginScreen, OnboardingScreen, RegisterScreen } from "./screens";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AsyncStorage } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#7c8cfc",
        tabBarInactiveTintColor: "black",
        tabBarStyle: { height: 65 },
        tabBarIconStyle: { marginTop: 10 },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 10 },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-newspaper-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="analytics-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-bed-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

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
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
