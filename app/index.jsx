import { useUser } from '@clerk/clerk-expo';
import { Redirect } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const index = () => {
    const { user } = useUser();
    return (
        <View>
            {!user ? <Redirect href={'/login'} /> : <Redirect href={'/(tabs)/home'} />}
        </View>
    );
};

export default index;

