import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Image, ScrollView,TouchableOpacity } from 'react-native'
import {Text, Card, Button, Icon} from "@rneui/themed";
import { ListItem, Avatar } from '@rneui/themed'
import axios from 'axios/lib/axios';


const UserList = ({navigation}) => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://dummyapi.io/data/v1/user?limit=10',{
        // axios.get('https://jsonplaceholder.typicode.com/users',{
        headers:{
            "app-id" : "6371035553c9c386b6f89a76"
        }
        })
        .then(res=>{
            console.log(res.data['data'][0])
            setUsers(res.data.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <ScrollView>
      <View style={styles.container}>
         <Card containerStyle={{backgroundColor:"#fff"}}>
            <Card.Title>Our Clients</Card.Title>
            <Card.Divider/>
            {users.length > 0 ? users.map((u,i)=>{
                return(
                    <TouchableOpacity key={i}
                        onPress={()=>{
                            navigation.navigate('UserDetails',{
                                user:u
                            })
                        }}
                    >
                         <ListItem key={u.id} bottomDivider style={{backgroundColor:"#666"}}>
                            <Avatar source={{uri: u.picture}} />
                            <ListItem.Content>
                            <ListItem.Title>{u.title}</ListItem.Title>
                            <ListItem.Subtitle>{u.firstName} {u.lastName}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    </TouchableOpacity>
                )
            }):(
                <View>
                    <Text>Users loading..</Text>
                </View>
            )}
         </Card>
      </View>
    </ScrollView>
  )
}

export default UserList

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ccc"
    },
    fonts:{
        marginBottom:8
    },
    user:{
        flex:1,
        width:"100%",
        flexDirection:"row",
        marginBottom: 6,
    },
    image:{
        width: 30,
        height:30,
        marginRight:10
    },
    name:{
        fontSize:16,
        marginTop:5
    }
})