import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const explore = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(['All']);


  const allCategories = [
    "All",
    'Environment',
    'Economy',
    'Education',
    'Business',
    'Politics',
    'Science',
    'Health',
    'Sports',
    "Technology",
    'Entertainment',
    'Business',
    'Politics',
    'Science',
    'Health',
    'Sports',
    "Technology",
    'Entertainment'
  ];


  const allNews = useRef([
    {
      id: '1',
      image: require('../../assets/images/stupa-Nepal-iGuzzini-04.jpg'),
      title: 'Demand for Indian generic drugs skyrockets in...',
      subtitle: 'Updated just now.',
      author: 'Wade Warren',
      category: 'Environment',
      source: "kantipur",
      description: 'The demand for Indian generic drugs has shrot up in China amid the massive COVID surge in the country, with Chinese experts cautioning that fake versions of these drugs are flooding the market.'
    },
    {
      id: '2',
      image: require('../../assets/images/icon.png'),
      title: 'React Native is awesome!',
      subtitle: '5 min ago',
      author: 'Jane Doe',
      category: 'Economy',
      source: "kantipur",
      description: 'React Native lets you build mobile apps using only JavaScript and React.'
    },
    {
      id: '3',
      image: require("../../assets/images/pexels-photo-3825539.jpeg"),
      title: 'Breaking News: Expo Update',
      subtitle: '10 min ago',
      author: 'John Smith',
      category: 'Science',
      source: "kantipur",
      description: 'Expo just released a new update with exciting features for developers.'
    }
  ]).current;


  const toggleCategory = (cat: string) => {
    setSelected(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };


  const filteredNews = selected[0] === 'All'
    ? allNews
    : allNews.filter(item => item.category === selected[0]);


  return (
    <SafeAreaView className='flex-1 bg-[#11131F]'>
       <ScrollView
        className='bg-[#11131F]'
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar style='dark' />
        <View style={{ height: 70, padding: 0 }} className='flex-row justify-between items-center mx-2'>
          <Text className='text-white font-bold text-[26px] px-4'>Explore</Text>

          <TouchableOpacity onPress={() => setDropdownOpen(!dropdownOpen)}>
            <Image
              source={require("../../assets/images/dropdown.png")}
              style={{ width: wp(10), height: hp(10) }}
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


       {/* ## category */}
      <View className="px-4 py-2" style={styles.container}>
        <Text className="text-white text-xl font-bold mb-3">Categories</Text>

        <View className="flex-row flex-wrap gap-2">
          {(expanded ? allCategories : allCategories.slice(0, 7)).map((cat, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => toggleCategory(cat)}
              className={`rounded-xl px-3 py-3 ${
                selected.includes(cat) ? 'bg-yellow-400' : 'bg-black'
              }`}
            >
              <Text className="text-white font-mono text-lg">{cat}</Text>
            </TouchableOpacity>
          ))}

          {!expanded && (
            <TouchableOpacity
              onPress={() => setExpanded(true)}
              className="bg-red-500 rounded-full w-10 h-10 items-center justify-center"
            >
              <AntDesign name="arrowdown" size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>


      {/* ##news */}

      <View className="px-4 mt-6 bg-[#11131F]">
        <Text className="text-white text-xl font-bold mb-3">Latest News</Text>
        <FlatList
          horizontal
          data={filteredNews}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.newslist} className="rounded-2xl p-3 mr-4 w-64 pt-4">
              <Text className="text-white font-bold text-base mb-2" numberOfLines={2}>
                {item.title}
              </Text>
              <Image
                source={item.image}
                style={{ width: '100%', height: 130, borderRadius: 10 }}
              />
              <Text className="text-white mt-2 text-sm text-base text-bold">{item.subtitle} | {item.source}</Text>
              <Text className="text-white text-xs mt-1 text-base" numberOfLines={2}>
                {item.description}
              </Text>
            </View>
          )}
        />
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default explore


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 20,
    margin: 20,
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    color: '#fff',
  },

  newslist: {
    backgroundColor: '#1e1e1e',
  }
})