import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

const router = useRouter();
  const handlePress = (item) => {
      router.push({
        pathname: '/news/[id]',
        params: {
          id: item.id,
          title: item.title,
          subtitle: item.subtitle,
          description: item.description,
          image: Image.resolveAssetSource(item.image).uri,
          author: item.author,
        },
      });
    };

    
const NewsCard = ({ item }) => {
  return (
    <TouchableOpacity 
      style={styles.cardContainer} 
      activeOpacity={0.9}
      onPress={()=>handlePress(item)}
    >
      <View style={styles.cardWrapper}>
        <ImageBackground
          source={item.image}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
        >
          {/* Warm overlay */}
          <View style={styles.warmOverlay}>

            <View style={styles.contentSection}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {item.description}
              </Text>
              
              <View style={styles.bottomMeta}>
                <View style={styles.authorSection}>
                  <Text style={styles.author}>By {item.author}</Text>
                  <Text style={styles.timeText}>{item.subtitle}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
    height: 250,
  },
  cardWrapper: {
    flex: 1,
    borderRadius: 40,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  warmOverlay: {
    flex: 1,
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-between',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  musicNote: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookmarkButton: {
    padding: 8,
  },
  contentSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
    lineHeight: 32,
    letterSpacing: -0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: '300',
    color: '#fff',
    marginBottom: 20,
    lineHeight: 32,
    letterSpacing: -0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  bottomMeta: {
    alignSelf: 'stretch',
  },
  authorSection: {
    alignItems: 'flex-start',
  },
  author: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 2,
  },
  timeText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '400',
  },
});

export default NewsCard;