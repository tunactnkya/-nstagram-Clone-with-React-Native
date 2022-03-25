import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { FriendsProfileData } from '../screenComponents/Database'

const Activity = () => {
  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'white'
    }} >
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        borderBottomColor: '#DEDEDE',
        padding: 10
      }} >Activity</Text>
      <ScrollView style={{ margin: 10 }} >
        <Text style={{ fontWeight: 'bold' }} >This Week</Text>
        <View style={{ flexDirection: 'row', paddingVertical: 10 }} >
          {
            FriendsProfileData.slice(0, 3).map((data, index) => {
              return (
                <TouchableOpacity key={index} >
                  <Text>{data.name}, </Text>
                </TouchableOpacity>
              )
            })
          }
          <Text>Started Following You</Text>
        </View>
        <Text style={{ fontWeight: 'bold' }} >Earlier</Text>
        {
          FriendsProfileData.slice(3, 6).map((data, index) => {
            const [follow, setFollow] = useState(data.follow)
            return (
              <View key={index} style={{ width: '100%' }} >
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 20,
                  width: '100%'
                }} >
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      maxWidth: '64%'
                    }} >
                    <Image source={data.profileImage} style={{ width: 45, height: 45, borderRadius: 100, marginRight: 10 }} />
                    <Text style={{ fontSize: 15 }} >
                      <Text style={{ fontWeight: 'bold' }} >
                        {data.name}
                      </Text>
                      , who you might know,is on instagram
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setFollow(!follow)} style={{ width: follow ? 72 :68 }} >
                    <View style={{
                      width: '100%',
                      height: 30,
                      borderRadius: 5,
                      backgroundColor:  follow ? null : '#3493D9',
                      borderWidth: follow ? 1 :  0,
                      borderColor:follow ? '#DEDEDE':null,
                      justifyContent: 'center',
                      alignItems: 'center'

                    }} >
                      <Text style={{color:follow ? 'black' : 'white'}} >
                        {follow ? "Following" : "Follow"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>
            )
          })
        }
        <Text style={{fontWeight:'bold',paddingVertical:10}} >Suggestion for you</Text>
        {
          FriendsProfileData.slice(6.12).map((data,index) => {
            const [follow,setFollow] = useState(data.follow)
            const [close,setClose] = useState(false)
            return(
              <View key={index} >
                <View>
                  <TouchableOpacity>
                    <Image  source={data.profileImage} style={{width:45,height:45,borderRadius:100}} />
                  </TouchableOpacity>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Activity

