import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

import { PRIMARY_COLOR } from '../commons/constants';
import { useState } from 'react';
import { Homescreen } from '../screens/homescreen/Homescreen';

export interface User {
    id: number;
    email: string;
    password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
    // Initial list of users for login and registration
    const users: User[] = [
        { id: 1, email: '1', password: '1' },
        { id: 2, email: '2', password: '1' }
    ];

    // Hook to manage the list of users
    const [listUsers, setListUsers] = useState(users);

    // Function to add a new user
    const handleAddUser = (user: User) => {
        setListUsers([...listUsers, user]);
    };

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: PRIMARY_COLOR
                }
            }}>
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen
                name="Register"
                options={{ headerShown: false }}
                children={() => <RegisterScreen users={listUsers} handleAddUser={handleAddUser} />} />
            <Stack.Screen
                name="home"
                options={{ headerShown: false }}
                children={() => <Homescreen/>} />
        </Stack.Navigator>
    );
}
