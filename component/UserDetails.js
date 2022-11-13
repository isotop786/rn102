import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserDetails = ({ route, navigation }) => {
    const {user} = route.params
  return (
    <View>
      <Text>UserDetails</Text>
      <Text>{user.title}</Text>
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({})