import CategoryBottomSheet from '@/components/bottomsheet';
import TInderCard from '@/components/Cards/TInderCard';
import BottomSheet from '@gorhom/bottom-sheet';
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
  description: `In an era dominated by constant connectivity, the way we consume news has evolved dramatically. Gone are the days when people waited for the morning paper or tuned in to the 6 PM broadcast to catch up on current events. Today’s readers demand speed, clarity, and personalization. As attention spans dwindle and information overload becomes the norm, a new wave of news delivery is reshaping the landscape — and it’s all about relevance, brevity, and design.

Mobile-first platforms have taken the lead in this transformation. From curated news apps to AI-driven summary tools, users are increasingly leaning towards bite-sized news formats that allow them to stay informed without feeling overwhelmed. Whether it's a daily 5-minute audio brief, flashcard-style summaries, or interactive story cards, the emphasis is on delivering content that’s fast, digestible, and visually engaging.

Personalization is another critical aspect driving this shift. Algorithms now track reading behavior, location, interests, and even time of day to serve content tailored to the individual. A sports enthusiast might wake up to match highlights, while someone interested in health receives updates on medical breakthroughs. This hyper-targeted delivery ensures that users remain engaged and feel that their time is respected.

Design, often underestimated in traditional news outlets, is now front and center. Modern news apps prioritize clean layouts, bold typography, and intuitive navigation. Visual cues like icons, tags, and category filters make it easier for readers to scan through topics and find exactly what they’re looking for. Background images, animated transitions, and swipeable cards — once reserved for entertainment apps — are now common in the news space, making the experience more dynamic and user-friendly.

Moreover, interactive elements are being introduced to increase retention and engagement. Gamification — such as earning streaks, unlocking badges, or leveling up for daily reading — adds a layer of motivation that traditional formats lack. Some platforms even incorporate quizzes or polls at the end of an article, encouraging users to reflect on what they’ve read and engage with the content more deeply.

Despite these advancements, challenges remain. The rise of misinformation, clickbait headlines, and algorithmic echo chambers has led to increased skepticism and distrust. Ethical journalism must evolve alongside technology, ensuring that content remains accurate, balanced, and responsible. Platforms must also offer users the tools to verify sources, access full stories when needed, and avoid being trapped in filter bubbles.

In the near future, expect even more innovation. With the rise of voice assistants, wearables, and augmented reality, news consumption will likely become more ambient and immersive. Imagine getting real-time news as an overlay while walking down the street or receiving AI-curated news while brushing your teeth via a smart mirror.

Ultimately, the goal remains the same: keep people informed. But how that information is packaged, delivered, and consumed is undergoing a massive evolution — one that values attention, context, and connection over noise and clutter.`
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


  const allCategories = [
    "All", 'Environment', 'Economy', 'Education', 'Business',
    'Politics', 'Science', 'Health', 'Sports', 'Technology',
    'Entertainment'
  ];

  const sheetRef = useRef<BottomSheet>(null);
  
  const handleSelectCategory = (category: any) => {
    console.log('Selected category:', category);
    // Do something with category
  };


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
    const isActionActive = Math.abs(dx) > 150;

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

    // ##header
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
         <TouchableOpacity onPress={() => sheetRef.current?.expand()}>
          <Image
            source={require("../../assets/images/dropdown.png")}
            style={{ width: wp(10), height: hp(10), marginRight: 12 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
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

  <CategoryBottomSheet ref={sheetRef} onSelect={handleSelectCategory} />

</View>
</SafeAreaView>
  );
};

export default Home;
