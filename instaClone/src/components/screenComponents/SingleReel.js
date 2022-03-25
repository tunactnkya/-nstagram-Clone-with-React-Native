import { Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const SingleReel = ({ item, index, currentIndex }) => {

  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height


  return (
    <View style={{ width: windowWidth, height: windowHeight }} >
      <TouchableOpacity>
      
      </TouchableOpacity>

    </View>
  )
}

export default SingleReel;

