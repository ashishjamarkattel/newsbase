import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sources = ['Kantipur', 'Setopati', 'Himalayan', 'Kathmandu Post', 'Online Khabar', 'Republica'];
  const categoryStyles = {
  trending: { fontSize: 20, marginRight: 2 },
  default: { fontSize: 16, marginRight: 5 },
};

  return (

    
    <View className='flex-1 bg-[#11131F]'>
      <StatusBar style='dark' />
      
      <View style={{ height: 70 }} className='flex-row justify-between items-center mt-12 mx-2'>
        {/* Logo */}
        <Image
          source={require("../../assets/images/logo2.png")}
          style={{ width: wp(30), height: hp(10)}} 
          resizeMode="contain"
        />
         <TouchableOpacity onPress={() => setDropdownOpen(!dropdownOpen)}>
        <Image
          source={require("../../assets/images/dropdown.png")}
          style={{ width: wp(10), height: hp(10)}} 
          resizeMode="contain"
          className='mr-3'
        />
        </TouchableOpacity>
      </View>

      {dropdownOpen && (
        <View className='absolute right-4 top-[110] bg-white rounded-md shadow-lg px-10 py-3'>
            <Text className='text-black font-medium'>Logout</Text>
        </View>
      )}

      <View  style={{ height: 43}}  className='pt-3 justify-between items-center px-4'>
      <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={{height:hp(5)}}
          className=''
        >
          {sources.map((source, index) => (
              <Text key={index} className='text-lg font-medium px-2 pt-0 text-white font-serif' style={{
          color: index === 0 ? '#FFFFFF' : '#5b5b5bff',
        }}>    
        {source}
        </Text>
            
          ))}
        </ScrollView>
        </View>

        <View>
          

        </View>

          



    </View>
  );
};

export default Home;
