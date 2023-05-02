import React from 'react'
import { Text, View, TextStyle } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'

interface TextGradientProps {
  text: string
  style?: TextStyle
}

export default function TextGradient(props: TextGradientProps) {
  const { text, style } = props

  return (
    <View>
      <MaskedView maskElement={<Text style={[style, { backgroundColor: 'transparent' }]}>{text}</Text>}>
        <LinearGradient
          colors={['#BA872C', '#E8E276', '#E1D770', '#885021']}
          start={{ x: -0.2, y: 0 }}
          end={{ x: 1.3, y: 1 }}
        >
          <Text style={[style, { opacity: 0 }]}>{text}</Text>
        </LinearGradient>
      </MaskedView>
    </View>
  )
}
