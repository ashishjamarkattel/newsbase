import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Explore = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(['All']);

  const allCategories = [
    'All',
    'Environment',
    'Economy',
    'Education',
    'Business',
    'Politics',
    'Science',
    'Health',
    'Sports',
    'Technology',
  ];

  const allNews = useRef([
    {
      id: '1',
      image: require('../../assets/images/stupa-Nepal-iGuzzini-04.jpg'),
      title: 'Demand for Indian generic drugs skyrockets in...',
      subtitle: 'Updated just now.',
      author: 'Wade Warren',
      category: 'Environment',
      source: 'Kantipur',
      description:
        'The demand for Indian generic drugs has shot up in China amid the massive COVID surge in the country, with Chinese experts cautioning that fake versions of these drugs are flooding the market.',
    },
    {
      id: '2',
      image: require('../../assets/images/icon.png'),
      title: 'React Native is awesome!',
      subtitle: '5 min ago',
      author: 'Jane Doe',
      category: 'Economy',
      source: 'Kantipur',
      description:
        'React Native lets you build mobile apps using only JavaScript and React.',
    },
    {
      id: '3',
      image: require('../../assets/images/pexels-photo-3825539.jpeg'),
      title: 'Breaking News: Expo Update',
      subtitle: '10 min ago',
      author: 'John Smith',
      category: 'Science',
      source: 'Kantipur',
      description:
        'Expo just released a new update with exciting features for developers.',
    },
  ]).current;

  const toggleCategory = (cat) => {
    if (cat === 'All') {
      setSelected(['All']);
    } else {
      setSelected((prev) =>
        prev.includes(cat)
          ? prev.filter((c) => c !== cat)
          : [...prev.filter((c) => c !== 'All'), cat]
      );
    }
  };

  const filteredNews =
    selected.includes('All')
      ? allNews
      : allNews.filter((item) => selected.includes(item.category));

  const { height: screenHeight } = Dimensions.get('window');

  return (
    <SafeAreaView className="flex-1 bg-[#11131F]">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-row justify-between items-center mx-2" style={{ height: 70 }}>
        <Text className="text-white font-bold text-[26px] px-4">Explore</Text>

        <TouchableOpacity onPress={() => setDropdownOpen(!dropdownOpen)}>
          <Image
            source={require('../../assets/images/dropdown.png')}
            style={{ width: wp(10), height: hp(10) }}
            resizeMode="contain"
            className="mr-3"
          />
        </TouchableOpacity>

        {dropdownOpen && (
          <View className="absolute right-4 top-[50] bg-white rounded-md shadow-lg px-10 py-3">
            <Text className="text-black font-medium">Logout</Text>
          </View>
        )}
      </View>

      {/* Category Scroll */}
      <View style={{ height: 39 }} className="justify-between items-center px-3">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: hp(5) }}
        >
          {allCategories.map((category, index) => {
            const isSelected = selected.includes(category);
            return (
              <View
                key={index}
                style={{
                  backgroundColor: isSelected ? '#2e3350ff' : '#adb9c07c',
                  borderRadius: 30,
                  marginRight: 8,
                  borderWidth:1
                }}
              >
                <TouchableOpacity
                  onPress={() => toggleCategory(category)}
                  className="justify-center items-center"
                  style={{ paddingHorizontal: 16, paddingVertical: 6 }}
                >
                  <Text
                    className="text-lg font-medium font-serif"
                    style={{
                      color: isSelected ? '#ffffff' : '#000000ff',
                      textAlign: 'center',
                    }}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {/* News Cards */}
      <View className="flex-1 px-4 py-4">
        <FlatList
          data={filteredNews}
          keyExtractor={(item) => item.id}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={screenHeight * 0.79}
          snapToAlignment="start"
          contentContainerStyle={{ gap: 20 }}
          renderItem={({ item }) => (
            <View style={{ height: screenHeight * 0.79 }}>
              <View
                style={{
                  flex: 1,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: '#2e2e2e',
                  backgroundColor: '#1a1a1a',
                  overflow: 'hidden',
                }}
              >
                {/* Image */}
                <Image
                  source={item.image}
                  style={{ width: '100%', height: screenHeight * 0.4 }}
                  resizeMode="cover"
                />

                {/* Content */}
                <View style={{ padding: 16 }}>
                  <Text
                    className="text-white font-bold text-xl mb-2"
                    numberOfLines={2}
                  >
                    {item.title}
                  </Text>
                  <Text className="text-white text-sm mb-1">
                    {item.subtitle} | {item.source}
                  </Text>
                  <Text className="text-white text-base" numberOfLines={4}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Explore;

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
  },
});
