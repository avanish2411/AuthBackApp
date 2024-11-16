import { View, Text, Image } from 'react-native'
import React from 'react'


const Empty = () => {
    return (
        <View style={{backgroundColor:'white',height:'100%',alignContent:'center',justifyContent:'center'}}>
            <Text style={{textAlign:'center',fontSize:34,fontWeight:'800'}}>Nothing to show</Text>
            <Image
                source={require('./../assets/images/nothing.png')}
            />
        </View>
    )
}

export default Empty