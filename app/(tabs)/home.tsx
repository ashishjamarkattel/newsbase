import TInderCard from '@/components/Cards/TInderCard';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useRef, useState } from 'react';
import {
  Animated,
  Image,
  PanResponder,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sources = ['Kantipur', 'Setopati', 'Himalayan', 'Kathmandu Post', 'Online Khabar', 'Republica'];
  const categoryStyles = {
  trending: { fontSize: 20, marginRight: 2 },
  default: { fontSize: 16, marginRight: 5 },
};


  const [cards, setData] = useState([
    {
      id: '1',
      image: require('../../assets/images/stupa-Nepal-iGuzzini-04.jpg'),
      title: 'Demand for Indian generic drugs skyrockets in...',
      subtitle: 'Updated just now.',
      author: 'Wade Warren',
      description: 'The demand for Indian generic drugs has shrot up in China amid the massive COVID surge in the country, with Chinese experts cautioning that fake versions of these drugs are flooding the market.'
    },
    {
      id: '2',
      image: require('../../assets/images/icon.png'),
      title: 'React Native is awesome!',
      subtitle: '5 min ago',
      author: 'Jane Doe',
      description: 'React Native lets you build mobile apps using only JavaScript and React.'
    },
    {
      id: '3',
      image: require("../../assets/images/pexels-photo-3825539.jpeg"),
      title: 'Breaking News: Expo Update',
      subtitle: '10 min ago',
      author: 'John Smith',
      description: 'Expo just released a new update with exciting features for developers.'
    }
  ]);




  const originalCards = useRef([
  {
    id: '1',
    image: require('../../assets/images/stupa-Nepal-iGuzzini-04.jpg'),
    title: 'Demand for Indian generic drugs skyrockets in...',
    subtitle: 'Updated just now.',
    author: 'Wade Warren',
    description: 'The demand for Indian generic drugs has shrot up in China amid the massive COVID surge in the country, with Chinese experts cautioning that fake versions of these drugs are flooding the market.'
  },
  {
    id: '2',
    image: require('../../assets/images/icon.png'),
    title: 'React Native is awesome!',
    subtitle: '5 min ago',
    author: 'Jane Doe',
    description: 'React Native lets you build mobile apps using only JavaScript and React.'
  },
  {
    id: '3',
    image: require("../../assets/images/pexels-photo-3825539.jpeg"),
    title: 'Breaking News: Expo Update',
    subtitle: '10 min ago',
    author: 'John Smith',
    description: 'Expo just released a new update with exciting features for developers.'
  }
]).current;





  const swipe= useRef(new Animated.ValueXY()).current

  const panResponder = PanResponder.create({
  onMoveShouldSetPanResponder: () => true,
  onPanResponderMove: Animated.event(
    [null, { dx: swipe.x, dy: swipe.y }],
    { useNativeDriver: false }
  ),
  onPanResponderRelease: (_, { dx, dy }) => {
    const direction = Math.sign(dx);
    const isActionActive = Math.abs(dx) > 200;

    if (isActionActive) {
      Animated.timing(swipe, {
        toValue: { x: 500 * direction, y: dy },
        useNativeDriver: true,
        duration: 200,
      }).start(() => {
        removeCard();
      });
    } else {
      Animated.spring(swipe, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
        friction: 4,
      }).start();
    }
  }
});


  const removeCard = useCallback(()=>{
      setData(prev=>prev.slice(1))

       requestAnimationFrame(() => {
      swipe.setValue({x:0, y:0})

       });
  }, [swipe])



  return (
// bg-[#11131F]
    <SafeAreaView className='flex-1 bg-[#11131F]'>
    <View className='flex-1 bg-[#11131F]'>
      <StatusBar style='dark' />
      <View style={{ height: 70, padding:0}} className='flex-row justify-between items-center mx-2'>
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

        {dropdownOpen && (
        <View className='absolute right-4 top-[50] bg-white rounded-md shadow-lg px-10 py-3'>
            <Text className='text-black font-medium'>Logout</Text>
        </View>
      )}
      </View>


      <View  style={{ height: 43}}  className='justify-between items-center px-4'>
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


        <View style={{flex:1}}>
          {cards.map((item, index)=> {

            const isFirst = index === 0
            const dragHandler = isFirst ? panResponder.panHandlers : {};
            
            return <TInderCard 
            key={item.id ?? index} 
            item={item} 
            swipe={swipe}
            isFirst={isFirst}
            {...dragHandler}
            />
          }).reverse()}

        </View>

        {cards.length === 0 && (
        <TouchableOpacity
          onPress={() => setData(originalCards)}
          style={{ position: 'absolute', bottom: 100, alignSelf: 'center', backgroundColor: "black"}}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Restart</Text>
        </TouchableOpacity>
      )}



        



</View>
</SafeAreaView>
  );
};

export default Home;
