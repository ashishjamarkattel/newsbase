import React from 'react'
import { Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

const boarding = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName='h-full'>
        <Image></Image>
      </ScrollView>
    </SafeAreaView>
  )
}

export default boarding 