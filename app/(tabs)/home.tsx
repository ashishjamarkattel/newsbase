import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sources = ['Kantipur', 'Setopati', 'Himalayan', 'Kathmandu Post', 'Online Khabar', 'Republica'];
  const categoryStyles = {
  trending: { fontSize: 20, marginRight: 2 },
  default: { fontSize: 16, marginRight: 5 },
};

  const cards = [
    {
      id: '1',
      image: require('../../assets/images/stupa-Nepal-iGuzzini-04.jpg'),
      title: 'Demand for Indian generic drugs skyrockets in...',
      subtitle: 'Updated just now.',
      author: 'Wade Warren',
      description: 'The demand for Indian generic drugs has shot up in China amid the massive COVID surge in the country, with Chinese experts cautioning that fake versions of these drugs are flooding the market.'
    },
    {
      id: '2',
      image: require('../../assets/images/partial-react-logo.png'),
      title: 'React Native is awesome!',
      subtitle: '5 min ago',
      author: 'Jane Doe',
      description: 'React Native lets you build mobile apps using only JavaScript and React.'
    },
    {
      id: '3',
      image: require('../../assets/images/splash-icon.png'),
      title: 'Breaking News: Expo Update',
      subtitle: '10 min ago',
      author: 'John Smith',
      description: 'Expo just released a new update with exciting features for developers.'
    }
  ];

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

        <View style={{ flex: 1, alignItems: 'center', paddingTop: 0 }}>
          <Swiper
          containerStyle={{
            flex: 0,        // prevent vertical expansion
            marginTop: -hp(6),
          }}
            cards={cards}
            renderCard={(card) => (
              <View key={card.id} style={{
                borderRadius: 24,
                overflow: 'hidden',
                // backgroundColor: '#fff',
                height: hp(70),
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                // marginTop:-55
              }}
              className='mx-5'
              >
                <Image
                  source={card.image}
                  style={{ width: '100%', height: '100%', position: 'absolute', resizeMode: 'cover' }}
                />
                <LinearGradient
                  colors={['transparent', 'rgba(17,19,31,0.95)']}
                  style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '55%' }}
                />
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 24 }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 24, marginBottom: 8 }}>{card.title}</Text>
                  <Text style={{ color: '#fff', opacity: 0.7, fontSize: 14, marginBottom: 8 }}>{card.subtitle}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <View style={{ width: 32, height: 50, borderRadius: 16, backgroundColor: '#fff', marginRight: 8, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ color: '#11131F', fontWeight: 'bold' }}>{card.author[0]}</Text>
                    </View>
                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>Published by {card.author}</Text>
                  </View>
                  <Text style={{ color: '#fff', fontSize: 15 }}>{card.description}</Text>
                </View>
              </View>
            )}
            backgroundColor={'transparent'}
            cardHorizontalMargin={0}
            stackSize={5}
            cardIndex={0}
            showSecondCard={true}
            stackSeparation={15}
            // infinite={true}
            // disableTopSwipe={false}
            // disableBottomSwipe={false}
            // verticalSwipe={false}
            
          />
        </View>
          



    </View>
  );
};

export default Home;
