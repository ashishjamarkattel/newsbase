import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';
import React, { forwardRef, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const allCategories = [
    "All", 'Environment', 'Economy', 'Education', 'Business',
    'Politics', 'Science', 'Health', 'Sports', 'Technology', 'Entertainment'
];

const CategoryBottomSheet = forwardRef(({ onSelect }, ref) => {
    const snapPoints = useMemo(() => ['30%', '50%'], []);

    return (
        <BottomSheet
            ref={ref}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose
            // backgroundStyle={{ backgroundColor: '#333d68ff' }}
            handleIndicatorStyle={{ backgroundColor: '#333d68ff' }}
            // style={{padding:9}}
        >
            <LinearGradient
                colors={["#333d68ff", "transparent"]}
                start={{x: 0.5, y:1}}
                end={{x:0.5, y:0}}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                    position: "absolute",    
                }}>
                <BottomSheetView style={{ padding: 10 }}>
                    <Text className="text-black text-xl font-bold mb-6 mx-2">
                        Select Category
                    </Text>

                    <View className="flex-row flex-wrap gap-2">
                    {allCategories.map((cat, idx) => (
                        <TouchableOpacity
                            key={idx}
                            onPress={() => {
                                onSelect?.(cat);
                                ref?.current?.close();
                            }}
                            className={`rounded-xl px-3 py-3 ${ onSelect?.(cat) ? 'bg-yellow-400' : 'bg-black'}`}
                        >
                            <Text className="text-white font-mono text-lg">{cat}</Text>
                        </TouchableOpacity>

                    ))}
                    </View>
                </BottomSheetView>
            </LinearGradient>
        </BottomSheet>
    );
});

export default CategoryBottomSheet;
