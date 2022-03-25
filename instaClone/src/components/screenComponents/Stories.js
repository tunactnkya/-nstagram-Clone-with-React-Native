import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const Stories = () => {
    const navigation = useNavigation();


    const storyInfo = [
        {
            id: 1,
            name: 'Your Story',
            image: require('../../storage/images/userImage.png')
        },
        {
            id: 0,
            name: 'Heisenberg',
            image: require('../../storage/images/userImage1.png')
        },
        {
            id: 0,
            name: 'Dean Winchester',
            image: require('../../storage/images/userImage2.png')
        },
        {
            id: 0,
            name: 'Darth Wader',
            image: require('../../storage/images/userImage3.png')
        },
        {
            id: 0,
            name: 'Aragorn',
            image: require('../../storage/images/userImage4.png')
        },
        {
            id: 0,
            name: 'Rick Grimes',
            image: require('../../storage/images/userImage5.png')
        },

    ];
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 20 }} >
            {
                storyInfo.map((data, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.push("Status", {
                                name:data.name,
                                image:data.image
                            })} >
                            <View style={{
                                flexDirection: 'column',
                                paddingHorizontal: 8,
                                position: 'relative'
                            }} >
                                {
                                    data.id == 1 ?
                                        (
                                            <View style={{
                                                position: 'absolute',
                                                bottom: 15,
                                                right: 10,
                                                zIndex: 1,
                                            }} >
                                                <Entypo name='circle-with-plus' style={{
                                                    fontSize: 20,
                                                    color: '#405de6',
                                                    backgroundColor: 'white',
                                                    borderRadius: 100
                                                }} />
                                            </View>
                                        ) : null}
                                <View style={{
                                    width: 75,
                                    height: 75,
                                    backgroundColor: 'white',
                                    borderWidth: 1.8,
                                    borderRadius: 100,
                                    borderColor: '#c13584',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} >
                                    <Image source={data.image} style={{
                                        resizeMode: 'cover',
                                        width: '92%',
                                        height: '92%',
                                        borderRadius: 100,
                                        backgroundColor: 'white'
                                    }} />
                                </View>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 12,
                                    opacity: data.id == 0 ? 1 : 0.5
                                }} >{data.name} </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

export default Stories;

