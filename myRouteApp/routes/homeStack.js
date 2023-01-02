import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native-stack'
import Student from '../screens/Student'
import Employee from '../screens/Employee'
import Teacher from '../screens/Teacher'


const Stack = createNativeStackNavigator()

const AppNavigator=()=>{
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="Student" component={Student} options={{ title: 'Overview' }}/>
            <Stack.Screen name="Employee" component={Employee}></Stack.Screen>
            <Stack.Screen name="Teacher" component={Teacher}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}

export default StudentStack