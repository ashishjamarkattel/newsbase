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