import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsCard from "../../components/Cards/savedCard";

const data = [
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
];

const Saved = () => {

  return (
    <SafeAreaView className="flex-1 bg-[#11131F]">
      {/* Header */}
      <View className="flex-row justify-between items-center mx-2" style={{ height: 70 }}>
        <Text className="text-white font-bold text-[26px] pl-4 font-stretch-condensed">Saved News</Text>

      </View>

      <View className="mx-4 my-1">
        <View className="flex-row items-center bg-[#1F2233] rounded-full px-4 py-1 ml-2">
   
          <TextInput
            placeholder="Search saved articles"
            placeholderTextColor="#888"
            className="text-white flex-1 p-3"
          />
          <MaterialCommunityIcons name="clipboard-text-search-outline" size={24} color="#888" />
        </View>
      </View>


      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <NewsCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Saved