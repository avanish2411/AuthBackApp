import React from 'react';
import { View }  from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Redirect } from 'expo-router';

const index = () => {
    const { user } = useUser();
    return (
        <View>
            {!user ? <Redirect href={'/login'} /> : <Redirect href={'/(tabs)/home'} />}
        </View>
    );
};

export default index;

