import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutPage from './screens/WorkoutPage';
import CoursesPage from './screens/CoursesPage';
import MealPage from './screens/MealPage';
import ProfilePage from './screens/ProfilePage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="WorkoutPage" component={WorkoutPage} options={{ headerShown: false }} />
        <Tab.Screen name="CoursesPage" component={CoursesPage} options={{ headerShown: false }}/>
        <Tab.Screen name="MealPage" component={MealPage} options={{ headerShown: false }}/>
        <Tab.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
