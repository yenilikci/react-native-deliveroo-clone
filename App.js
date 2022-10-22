import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import RestaurantScreen from "./screens/RestaurantScreen/RestaurantScreen";
import { Provider } from 'react-redux';
import { store } from './store/store';
import BasketScreen from './screens/BasketScreen/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen/DeliveryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} />
          <Stack.Screen
            name='Basket'
            component={BasketScreen}
            options={{
              presentation: "modal", headerShown: false
            }}
          />
          <Stack.Screen
            name='PreparingOrderScreen'
            component={PreparingOrderScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Delivery'
            component={DeliveryScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

