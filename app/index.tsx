import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter()
  return (
     <View className='flex-1 flex justify-end'>
      <StatusBar style="light"/>
      <Image style={{resizeMode: 'cover'}}className='h-full w-full absolute' source={require("../assets/images/stupa-Nepal-iGuzzini-04 (1) (1) (1).jpg")}/>
      <LinearGradient
      colors={['#343645ff', 'transparent']}
      style={{width: wp(100), height: hp(90), position:"absolute"}}
      start={{x: 0.5, y:1}}
      end={{x:0.5, y:0}}
      
      >

       <View className='flex-1 justify-end items-center pb-10'>
    <Text 
    style={{fontSize: hp(3.2)}} className='text-white font-bold tracking-wide'>STAY CONNECTED</Text>
    <Text style={{fontSize: hp(4)}} className="text-white font-bold pb-7">Everywhere, <Text style={{color: "#FFF2C5"}}>AnyTime</Text></Text>
    <Text className='text-white tracking-wide'>welcome to newzify your ultimate</Text>
    <Text className='text-white tracking-wide'>distination for  breaking news, exclusive </Text>
    <Text className='text-white tracking-wide'>stories and tailored content</Text>
    </View>

    <View className='pb-9'>
  <LinearGradient
    colors={['#000417', '#565f89ff']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{
      height: hp(7),
      width: wp(80),
      borderRadius: 999,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    }}
  >
    <TouchableOpacity 
      onPress={()=> router.push("/(tabs)/home")}
      activeOpacity={0.8}
      className='items-center justify-center'
      style={{ width: '100%', height: '100%' }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Image 
          source={require('../assets/images/google.png')} 
          style={{ width: 20, height: 20, marginRight: 10 }} 
          resizeMode='contain'
        />
        <Text style={{ fontSize: hp(2), color: 'white', fontWeight: 'bold' }}>
          Continue with Google
        </Text>
      </View>
    </TouchableOpacity>
  </LinearGradient>
</View>
      </LinearGradient>
      </View>



      
  );
}
