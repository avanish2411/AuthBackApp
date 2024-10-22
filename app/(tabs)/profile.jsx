import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useUser } from "@clerk/clerk-react";

const profile = () => {
  const { user } = useUser();
  return (
    <View>
      <Text>{user.lastName}</Text>
      <Text>{user.emailAddresses[0].emailAddress}</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})