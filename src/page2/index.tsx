import { Modal, Animated, Text, View, TouchableOpacity, Pressable, Alert, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native'
import { useEffect, useState, useCallback } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import Images from '../../assets/images'
import styles from './style'
import ProgessBar from './ProgessBar'
import { TestResultState, resetResults, updateTestResultField } from '../../store/testResultSlice'
import { useDispatch, useSelector } from 'react-redux'
import { LoadDataState, testDataType } from '../../store/testPageDataSlice'

function Page2Test({ navigation }: { navigation: any }) {
  const testPageData = useSelector((state: LoadDataState) => state.testPageData)
  const data = JSON.stringify(testPageData)
  const parsedData = JSON.parse(data)

  const testResult = useSelector((state: { testResult: TestResultState }) => state.testResult)
  const [step, setStep] = useState<number>(1) // current step

  const dispatch = useDispatch()
  useEffect(() => {
    if (step === 1) {
      dispatch(resetResults())
    }
    if (step != 5) {
      setAnimatedOpacity(new Animated.Value(0))
    }
  }, [step])
  const [modalVisible, setModalVisible] = useState(false) // cho modal
  const [activeIndex, setActiveIndex] = useState<number>() //cho 2 button được và không được
  const [disabled, setDisabled] = useState(false) //ngăn chặn nhấn 2 lần
  //fade in animation image
  const [animatedOpacity, setAnimatedOpacity] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true
    }).start()
  }, [step, animatedOpacity])

  // 0 chưa chọn 1 - đang chọn, 2 - được, 3 - không được, 4 - hình ảnh
  const changeStepValue = (x: number) => {
    if (step <= 4) {
      setStep(step + 1)
      if (step === 1) {
        dispatch(updateTestResultField({ fieldName: 'Co', payload: x }))
        dispatch(updateTestResultField({ fieldName: 'Xuong', payload: 1 }))
      }
      if (step === 2) {
        dispatch(updateTestResultField({ fieldName: 'Xuong', payload: x }))
        dispatch(updateTestResultField({ fieldName: 'Khop', payload: 1 }))
      }
      if (step === 3) {
        dispatch(updateTestResultField({ fieldName: 'Khop', payload: x }))
        dispatch(updateTestResultField({ fieldName: 'DeKhang', payload: 1 }))
      }
      if (step === 4) {
        dispatch(updateTestResultField({ fieldName: 'DeKhang', payload: x }))
      }
    }
  }

  const handleConfirmPress = async () => {
    if (step === 5) {
      await setModalVisible(false)
    }
    setModalVisible(true)
    dispatch(resetResults)
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalView}>
          <Text style={{ color: '#478449', fontFamily: 'svnBold', fontSize: 22, paddingTop: 10 }}>CẢM ƠN</Text>
          <Text style={{ color: '#1D1C1C', textAlign: 'center', fontFamily: 'svnGotham', fontSize: 15, padding: 10 }}>
            Bạn đã tham gia bài kiểm tra sức {'\n'}khoẻ Hãy tiếp tục để có thể nhận kết quả {'\n'}kiểm tra sức khoẻ của
            bạn.
          </Text>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <TouchableOpacity
              style={[styles.buttonContainer, { backgroundColor: 'white', borderColor: '#B70002', borderWidth: 3 }]}
              onPress={() => {
                dispatch(updateTestResultField({ fieldName: 'KetQua', payload: 0 }))
                dispatch(resetResults())
                navigation.navigate('HomePage')
              }}
            >
              <Text style={[{ color: '#B70002' }, styles.buttonText]}>HUỶ</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonContainer, { backgroundColor: '#B70002', borderColor: '#B70002', borderWidth: 3 }]}
              onPress={() => {
                const arr = [testResult.Co, testResult.Xuong, testResult.Khop, testResult.DeKhang] //tạo mảng và kiểm tra xem có bao nhiêu lần chọn không được
                const count: number = arr.reduce((acc, cur) => acc + (cur === 3 ? 1 : 0), 0)
                console.log(count)
                dispatch(updateTestResultField({ fieldName: 'KetQua', payload: count }))
                navigation.navigate('Page3')
              }}
            >
              <Text style={[{ color: 'white' }, styles.buttonText]}>TIẾP TỤC</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <LinearGradient
        colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', flex: 2, alignSelf: 'center' }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center' }}>
                <TouchableOpacity
                  style={{ paddingRight: 20 }}
                  onPress={() => {
                    navigation.navigate('HomePage')
                  }}
                >
                  <Entypo name='chevron-thin-left' size={24} color='white' />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center' }}>
                <AntDesign name='left' size={14} color='white' />
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
              <Text style={[styles.textTop]}>Trang 2/6</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'flex-start', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <AntDesign name='right' size={14} color='white' />
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => navigation.navigate('HomePage')}>
                  <Entypo name='home' size={24} color='white' />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={{ fontSize: 19, fontFamily: 'svnBold', color: 'white', textAlign: 'center' }}>
            KIỂM TRA CƠ - XƯƠNG - KHỚP
          </Text>
          <View
            style={{
              flex: 1,
              backgroundColor: '#73A442',
              borderRadius: 12,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <ProgessBar
              step={step}
              step1={testResult.Co}
              step2={testResult.Xuong}
              step3={testResult.Khop}
              step4={testResult.DeKhang}
            />
          </View>
          <Text style={{ color: '#E1D770', fontSize: 20, fontFamily: 'svnBold', alignSelf: 'center', padding: 5 }}>
            KIỂM TRA {step === 1 ? 'CƠ' : step === 2 ? 'XƯƠNG' : step === 3 ? 'KHỚP' : 'ĐỀ KHÁNG'}
          </Text>
          <View style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 16, flex: 5 }}>
            <Animated.Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 16,
                borderColor: activeIndex === 1 ? '#73A442' : activeIndex === 2 ? '#C6463A' : undefined,
                borderWidth: 3,
                opacity: animatedOpacity
              }}
              source={{
                uri: 'https://github.com/ndhuy2308/Anlene-TypeScript/raw/main/assets/images/test-' + step + '.png'
              }}
            />
            <Image
              style={{
                position: 'absolute',
                top: -10,
                right: -12,
                width: 42,
                height: 42,
                backgroundColor: activeIndex ? 'white' : 'transparent',
                borderRadius: 50
              }}
              source={activeIndex === 1 ? Images.imageBorderV : activeIndex === 2 ? Images.imageBorderX : null}
            />
          </View>
          <Text
            style={[styles.textTop, { textAlign: 'center', paddingTop: 10, paddingLeft: '10%', paddingRight: '10%' }]}
          ></Text>

          <View style={{ flex: 2 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 15 }}>
              <Pressable
                onPress={() => {
                  setDisabled(true)
                  setActiveIndex(1)
                  setTimeout(() => {
                    changeStepValue(2)
                    if (step != 4) {
                      setActiveIndex(0)
                    }
                    setDisabled(false)
                  }, 500)
                }}
                style={{ paddingLeft: 20 }}
                disabled={step <= 4 ? disabled : true}
              >
                <LinearGradient
                  start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={[
                    activeIndex === 1 ? '#FFC200' : 'transparent',
                    activeIndex === 1 ? '#FFFCAB' : 'transparent',
                    activeIndex === 1 ? '#ECD24A' : 'transparent',
                    activeIndex === 1 ? '#ECD24A' : 'transparent',
                    activeIndex === 1 ? '#FFC200' : 'transparent'
                  ]}
                  style={{ borderRadius: 5 }}
                >
                  <View style={styles.circleGradient}>
                    <Image source={step < 4 ? Images.Duoc : Images.HiemKhi} />
                  </View>
                </LinearGradient>
              </Pressable>

              <Pressable
                onPress={() => {
                  setDisabled(true)
                  setActiveIndex(2)
                  setTimeout(() => {
                    changeStepValue(3)
                    if (step != 4) {
                      setActiveIndex(0)
                    }
                    setDisabled(false)
                  }, 500)
                }}
                style={{ paddingLeft: 20 }}
                disabled={step <= 4 ? disabled : true}
              >
                <LinearGradient
                  start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={[
                    activeIndex === 2 ? '#FFC200' : 'transparent',
                    activeIndex === 2 ? '#FFFCAB' : 'transparent',
                    activeIndex === 2 ? '#ECD24A' : 'transparent',
                    activeIndex === 2 ? '#ECD24A' : 'transparent',
                    activeIndex === 2 ? '#FFC200' : 'transparent'
                  ]}
                  style={{ borderRadius: 5 }}
                >
                  <View style={styles.circleGradient}>
                    <Image source={step < 4 ? Images.KhongDuoc : Images.NhieuLan} />
                  </View>
                </LinearGradient>
              </Pressable>
            </View>
          </View>

          <View style={{ flex: 2 }}>
            <TouchableOpacity
              disabled={step === 5 ? false : true}
              style={[
                styles.shadow,
                {
                  alignSelf: 'center',
                  width: '50%',
                  backgroundColor: step === 5 ? '#B70002' : '#B8B8B8',
                  paddingLeft: 30,
                  paddingRight: 30,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 30
                }
              ]}
              onPress={() => {
                handleConfirmPress()
              }}
            >
              <Text style={{ textAlign: 'center', fontSize: 16, fontFamily: 'svnGotham', color: 'white' }}>
                XÁC NHẬN
              </Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', fontFamily: 'svnLightItalic', color: 'white', fontSize: 14 }}>
              *Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái. {'\n'}Đảm bảo vị trí tập an toàn để không té
              ngã. {modalVisible ? 'true' : 'false'} {step}
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  )
}

export default Page2Test
