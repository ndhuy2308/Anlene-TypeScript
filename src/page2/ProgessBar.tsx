import { View, Image, Text, Animated } from 'react-native'
import { useEffect, useState } from 'react'
import Images from '../../assets/images'
import styles from './style'

interface ProgressBarProps {
  step: number
  step1: number
  step2: number
  step3: number
  step4: number
}

export default function ProgessBar({ ...props }: ProgressBarProps) {
  const step = props.step
  const step1 = props.step1
  const step2 = props.step2
  const step3 = props.step3
  const step4 = props.step4

  //line border
  const [barWidth] = useState(new Animated.Value(0))
  useEffect(() => {
    let toValue
    if (step === 1) {
      toValue = 0
    } else if (step === 2) {
      toValue = 0.25
    } else if (step === 3) {
      toValue = 0.7
    } else {
      toValue = 1
    }
    Animated.timing(barWidth, {
      toValue,
      duration: 600,
      useNativeDriver: false
    }).start()
  }, [step])

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 5 }}>
      <View style={{ flexDirection: 'column', alignItems: 'center', zIndex: 1, elevation: 1 }}>
        <Image
          style={styles.imageProgess}
          source={step1 === -1 ? Images.imageO : step1 === 2 ? Images.imageV : step1 === 3 ? Images.imageX : null}
        />
        <Text style={styles.textProgess}>Cơ</Text>
      </View>

      <View style={{ height: 30, width: '100%', justifyContent: 'center', position: 'absolute' }}>
        <View
          style={{
            borderTopWidth: 1.5,
            borderTopColor: 'white',
            borderStyle: 'dashed',
            width: '80%',
            marginLeft: 40,
            zIndex: 1,
            elevation: 1
          }}
        />
      </View>
      <View style={{ height: 30, width: '100%', justifyContent: 'center', position: 'absolute' }}>
        <Animated.View
          style={{
            borderTopWidth: 2,
            borderTopColor: 'white',
            width: barWidth.interpolate({ inputRange: [0, 1], outputRange: ['0%', '80%'] }),
            marginLeft: 40,
            zIndex: 1,
            elevation: 1
          }}
        />
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Image
          style={styles.imageProgess}
          source={
            step2 === 1
              ? Images.imageO
              : step2 === 2
              ? Images.imageV
              : step2 === 3
              ? Images.imageX
              : Images.imageNumber2
          }
        />
        <Text style={styles.textProgess}>Xương</Text>
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Image
          style={styles.imageProgess}
          source={
            step3 === 1
              ? Images.imageO
              : step3 === 2
              ? Images.imageV
              : step3 === 3
              ? Images.imageX
              : Images.imageNumber3
          }
        />
        <Text style={styles.textProgess}>Khớp</Text>
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Image
          style={styles.imageProgess}
          source={
            step4 === 1
              ? Images.imageO
              : step4 === 2
              ? Images.imageV
              : step4 === 3
              ? Images.imageX
              : Images.imageNumber4
          }
        />
        <Text style={styles.textProgess}>Đề kháng</Text>
      </View>
    </View>
  )
}
