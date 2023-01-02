// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import Student from './screens/Student'
import Employee from './screens/Employee'
import Teacher from './screens/Teacher'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="Employee" component={Employee} />
        <Stack.Screen name="Teacher" component={Teacher} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3973ac',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    paddingBottom : '0px',
    paddingTop:'20px'
  },
});
