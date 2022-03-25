import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const Post = () => {

    const postInfo = [
        {
            postTitle: 'Ragnar Lothbrok',
            postPersonImage: require('../../storage/images/userImage.png'),
            postImages: require('../../storage/images/image3.png'),
            likes: 987,
            isLiked: false
        },
        {
            postTitle: 'Heisenberg',
            postPersonImage: require('../../storage/images/userImage1.png'),
            postImages: require('../../storage/images/image1.png'),
            likes: 355,
            isLiked: false
        },
        {
            postTitle: 'Dean Winchester',
            postPersonImage: require('../../storage/images/userImage2.png'),
            postImages: require('../../storage/images/image4.png'),
            likes: 1758,
            isLiked: false
        },
        {
            postTitle: 'Rick Grimes',
            postPersonImage: require('../../storage/images/userImage5.png'),
            postImages: require('../../storage/images/image10.png'),
            likes: 1227,
            isLiked: false
        },
    ]
    return (
        <View>
            {
                postInfo.map((data, index) => {
                    const [like, setLike] = useState(data.isLiked)

                    return (
                        <View key={index} style={{
                            paddingBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.1
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15
                            }} >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }} >
                                    <Image
                                        source={data.postPersonImage}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 100
                                        }} />
                                    <View style={{ paddingLeft: 5 }} >
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }} >
                                            {data.postTitle}
                                        </Text>
                                    </View>
                                </View>
                                <Feather name='more-vertical' style={{ fontSize: 20 }} />
                            </View>
                            <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }} >
                                <Image
                                    source={data.postImages}
                                    style={{
                                        width: '100%',
                                        height: 350
                                    }} />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingHorizontal: 12,
                                    paddingVertical: 15
                                }} >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }} >
                                    <TouchableOpacity onPress={() => setLike(!like)} >
                                        <AntDesign name={like ? 'heart' : 'hearto'} style={{ paddingRight: 10, fontSize: 20, color: like ? "red" : "black" }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionic name='ios-chatbubble-outline' style={{ fontSize: 20, paddingRight: 10 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feather name='navigation' style={{ fontSize: 20, }} />
                                    </TouchableOpacity>
                                </View>
                                <Feather name='bookmark' style={{ fontSize: 20 }} />
                            </View>
                            <View style={{ paddingHorizontal: 15 }} >
                                <Text>
                                    Liked By {like ? 'you and' : ''} {''}
                                    {like ? data.likes + 1 : data.likes} others
                                </Text>
                                <Text style={{ fontWeight: '700', fontSize: 14, paddingVertical: 2 }} >
                                    Let's fight Vikings!!!
                                </Text>
                                <Text style={{ opacity: 0.4, paddingVertical: 2 }} >
                                    View All Comments
                                </Text>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <Image
                                            source={data.postPersonImage}
                                            style={{
                                                width: 25,
                                                height: 25,
                                                borderRadius: 100,
                                                backgroundColor: 'orange',
                                                marginRight: 10
                                            }} />
                                        <TextInput placeholder='Add a comment' style={{ opacity: 0.5 }} />
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center',}} >
                                        <Entypo name='emoji-happy' style={{fontSize:15,color:'lightgreen',marginRight:10}} />
                                        <Entypo name='emoji-neutral' style={{fontSize:15,color:'blue',marginRight:10}} />
                                        <Entypo name='emoji-sad' style={{fontSize:15,color:'red',marginRight:10}} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Post;

