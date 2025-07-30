import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';

export default function NewsDetail() {
  const router = useRouter();
  const { id, title, subtitle, image, description, author } = useLocalSearchParams();

  const [bookmarked, setBookmarked] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#0D0D0D' }}>
      {/* 🖼 Background Image */}
      <ImageBackground
        source={{ uri: image as string }}
        style={{ width: '100%', height: 320, justifyContent: 'flex-start' }}
        resizeMode="cover"
      >
        {/* 🔙 Back Button */}
        <Pressable onPress={() => router.back()} style={{ position: 'absolute', top: 50, left: 20, zIndex: 10 }}>
          <View style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderRadius: 24,
            padding: 10,
          }}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </View>
        </Pressable>

        {/* 🔖 Bookmark Button */}
        <Pressable
          onPress={() => setBookmarked(prev => !prev)}
          style={{ position: 'absolute', top: 50, right: 20, zIndex: 10 }}
        >
          <View style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderRadius: 24,
            padding: 10,
          }}>
            <Ionicons
              name={bookmarked ? 'bookmark' : 'bookmark-outline'}
              size={24}
              color={bookmarked ? '#ffd700' : '#fff'}
            />
          </View>
        </Pressable>
      </ImageBackground>

      {/* 📄 Content Section */}
      <ScrollView
        style={{
          flex: 1,
          marginTop: -20,
          backgroundColor: '#0D0D0D',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
        contentContainerStyle={{ padding: 24 }}
      >
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ color: '#aaa', fontSize: 14, marginTop: 4 }}>{subtitle}</Text>
        <Text style={{ color: '#fff', fontSize: 16, marginTop: 20 }}>{description}</Text>
        <Text style={{ color: '#999', fontSize: 14, marginTop: 20 }}>Published by {author}</Text>
      </ScrollView>
    </View>
  );
}
