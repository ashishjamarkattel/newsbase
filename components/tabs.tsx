import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";


const PRIMARY_COLOR = "#282b3dff"
const SECONDARY_COLOR = "#FFFFFF"



const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);



export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (

    <LinearGradient
      colors={['transparent', "#5b5b5bff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={style.tabbarContainer}
    >
      <View style={style.tabbar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <AnimatedTouchableOpacity
              key={route.key}
              layout={LinearTransition.springify().mass(0.5)}
              // href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[style.tabItem, { backgroundColor: isFocused ? SECONDARY_COLOR : 'transparent' }]}
            >
              {getIconByRouteName(route.name, isFocused ? PRIMARY_COLOR : SECONDARY_COLOR)}
              {isFocused && (<Animated.Text
                entering={FadeIn.duration(200)}
                exiting={FadeOut.duration(200)} style={style.text}>
                {label as string}
              </Animated.Text>)}
 
            </AnimatedTouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );

  function getIconByRouteName(routeName: string, color: string) {
    switch (routeName) {
      case 'home':
        return <AntDesign name="home" size={24} color={color} />
      case 'explore':
        return <MaterialCommunityIcons name="book-search-outline" size={24} color={color} />
      case 'saved':
        return <MaterialCommunityIcons name="bookmark-multiple-outline" size={24} color={color} />

    }
  }
}


const style = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 12,
    borderRadius: 30,
    backgroundColor: 'transparent',

  },

  tabItem: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    padding: 5,
    paddingHorizontal: 12,
    borderRadius: 30,

  },

  text: {
    color: 'BLACK',
    marginLeft: 5,
    fontWeight: 500
  },

  tabbarContainer: {
    position: 'absolute',
    width: '60%',
    alignSelf: 'center',
    bottom: 35,
    borderRadius: 30,
    borderWidth: 0.4,
    borderColor: '#4a4747ff',

  },


})