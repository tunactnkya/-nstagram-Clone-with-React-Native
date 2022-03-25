import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Stories from '../screenComponents/Stories'
import Post from '../screenComponents/Post'
import Ionic from 'react-native-vector-icons/Ionicons'

const Home = () => {
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }} >
            <StatusBar backgroundColor='white' barStyle='dark-content' animated={true} />
            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 15,
                alignItems: 'center'
            }} >
                <FontAwesome name='plus-square-o' style={{ fontSize: 24 }} />
                <Text style={{ fontFamily: "Lobster-Regular", fontSize: 25, fontWeight: '500' }} >Instagram</Text>
                <Feather name='navigation' style={{ fontSize: 24 }} />
            </View>

            <ScrollView>
             <Stories/>
             <Post/>
             <View style={{justifyContent:'center',alignItems:'center',padding:20}} >
                 <Ionic name='ios-reload-circle-sharp' style={{fontSize:60,opacity:0.3}} />
             </View>

            </ScrollView>

        </View>
    )
}

export default Home

