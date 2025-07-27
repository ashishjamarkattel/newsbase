import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';


const { height, width } = Dimensions.get("window")

const TInderCard = ({
  item,
  swipe,
  isFirst,
  ...rest
}) => {
  return (
    <Animated.View style={[{
      width: width - 20,
      height: height - 100,
      alignSelf: "center",
      position: "absolute",
      borderRadius: 20
    }, isFirst && { transform: [...swipe.getTranslateTransform()] }
      ,]}
      {...rest}>

      <Image style={{
        width: "100%",
        height: "75%",
        borderRadius: 20
      }} source={item.image} />

      <LinearGradient
        colors={['transparent', "#5b5b5bff"]}
        style={{
          width: "100%",
          height: "75%",
          borderRadius: 20,
          position: "absolute"
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} className='p-6'>
          <TouchableOpacity
            className='bg-[#fff2c5] rounded-full '
            style={{
              backgroundColor: '#a79b6fff',
            }}>
            <Text style={{ color: 'black', fontSize: 17 }} className='px-4 py-2 font-sans'
            >Follow</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          position: "absolute", left: 0, right: 0, bottom: 0, padding: 24
        }}>


          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 24, marginBottom: 8 }}>{item.title}</Text>
          <Text style={{ color: '#fff', opacity: 0.7, fontSize: 14, marginBottom: 8 }}>{item.subtitle}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <View style={{ width: 32, height: 50, borderRadius: 16, backgroundColor: '#fff', marginRight: 8, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#11131F', fontWeight: 'bold' }}>{item.author[0]}</Text>
            </View>
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>Published by {item.author}</Text>
          </View>
          <Text style={{ color: '#fff', fontSize: 15 }}>{item.description}</Text>
        </View>
        {/* <Text
          style={{
            position: "absolute",
            bottom:10,
            left:20,
            fontSize:40,
            color: "white"
          }}
          >{item.title}</Text> */}
      </LinearGradient>
    </Animated.View>
  )
}

export default TInderCard