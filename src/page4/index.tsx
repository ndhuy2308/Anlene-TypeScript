import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useState, useContext } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import Images from '../../assets/images'
import { TestResultState } from '../../store/testResultSlice'
import { useSelector } from 'react-redux'

function Page4({ navigation }: { navigation: any }) {
  const [xemThem, setXemThem] = useState(0)
  const testResult = useSelector((state: { testResult: TestResultState }) => state.testResult)
  const KetQua = testResult.KetQua
  return (
    <LinearGradient
      colors={[
        KetQua >= 3 ? '#969696' : KetQua >= 1 ? '#FD9500' : 'green',
        KetQua >= 3 ? '#969696' : KetQua >= 1 ? '#FEBF00' : 'green',
        KetQua >= 3 ? '#969696' : KetQua >= 1 ? '#FB8402' : 'green'
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', flex: 2, alignSelf: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center' }}>
                  <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-thin-left' size={24} color='white' />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center' }}>
                  <AntDesign name='left' size={14} color='white' />
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={[styles.textTop]}>Trang 4/6</Text>
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
            <View style={styles.container}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{ width: 116.6, height: 28.4, resizeMode: 'contain', alignSelf: 'center', marginBottom: 10 }}
              ></Image>
              <Text
                style={{
                  fontFamily: 'svnBold',
                  color: KetQua >= 3 ? '#DF1E13' : KetQua >= 1 ? '#187B33' : '#ECD24A',
                  fontSize: 17,
                  textAlign: 'center'
                }}
              >
                HOÀN THÀNH BÀI KIỂM TRA
              </Text>
              <Text
                style={{
                  fontFamily: 'svnBold',
                  color: KetQua >= 3 ? '#DF1E13' : KetQua >= 1 ? '#187B33' : '#ECD24A',
                  fontSize: 26,
                  textAlign: 'center'
                }}
              >
                {KetQua >= 3 ? 'LƯU Ý MỘT CHÚT' : KetQua >= 1 ? 'LƯU Ý MỘT CHÚT' : 'XIN CHÚC MỪNG'}
              </Text>
              <Text
                style={{ flexShrink: 1, textAlign: 'center', fontFamily: 'svnGotham', fontSize: 13, color: 'white' }}
              >
                Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng{'\n'} cần quan tâm đến hệ vận động nhiều hơn nhé,{'\n'}
                bởi sau tuổi 40, sức khoẻ Cơ-Xương-Khớp{'\n'}
                suy giảm:
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Image source={require('../../assets/images/co.png')}></Image>
                  <View style={[styles.textGroup1, { width: '80%' }]}>
                    <Text style={styles.textGroup1_1}>KHỐI CƠ</Text>
                    <Text style={styles.textGroup1_2}>MẤT ĐI</Text>
                  </View>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Image source={require('../../assets/images/xuong.png')}></Image>
                  <View style={[styles.textGroup1, { width: '100%' }]}>
                    <Text style={styles.textGroup1_1}>MẬT ĐỘ XƯƠNG</Text>
                    <Text style={styles.textGroup1_2}>SUY GIẢM</Text>
                  </View>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Image source={require('../../assets/images/khop.png')}></Image>
                  <View style={[styles.textGroup1, { width: '80%' }]}>
                    <Text style={styles.textGroup1_1}>KHỚP</Text>
                    <Text style={styles.textGroup1_2}>THOÁI HOÁ</Text>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'svnGotham',
                  textAlign: 'center',
                  alignSelf: 'center',
                  padding: 5
                }}
              >
                {KetQua >= 3
                  ? 'Bạn có thể sẽ phải đối mặt với những cơn đau nhức mỏi thường xuyên, gây khó khăn trong vận động và sinh hoạt hằng ngày.'
                  : KetQua >= 1
                  ? 'Rào cản vận động này có thể mang đến những cơn đau nhức mỏi không mong muốn.'
                  : 'Tác động này có thể tạo ra những cơn đau nhức mỏi ảnh hưởng đến vận động hằng ngày.'}
              </Text>
              <View style={{ alignItems: 'center' }}>
                <Image source={KetQua >= 3 ? Images.Golden4 : KetQua >= 1 ? Images.Green4 : Images.Golden4}></Image>
                <Text style={styles.textS}>*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71</Text>
                <Text style={styles.textS}>
                  **Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis{'\n'}Foundation (2009). Hormones and
                  Healthy Bones
                </Text>
                <Text
                  style={[
                    styles.shadow,
                    {
                      color: KetQua >= 3 ? '#FFC200' : KetQua >= 1 ? '#187B33' : '#FFC200',
                      fontFamily: 'svnBold',
                      fontSize: 14,
                      textAlign: 'center'
                    }
                  ]}
                >
                  LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
                </Text>
                <Text style={{ fontFamily: 'svnGotham', fontSize: 13, color: 'white', textAlign: 'center' }}>
                  Đừng chậm trễ, cùng Anlene giúp bạn chăm sóc sức khoẻ{'\n'} Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp
                  dẫn {'\n'}đang chờ bạn!
                </Text>
                <Pressable onPress={() => setXemThem(1)}>
                  <Text
                    style={{
                      fontFamily: xemThem === 0 ? 'svnGotham' : 'svnLightItalic',
                      textAlign: 'center',
                      color:
                        xemThem === 1
                          ? 'white'
                          : (xemThem === 0 && KetQua >= 3) || KetQua < 1
                          ? '#ECD24A'
                          : xemThem === 0 && KetQua >= 1 && KetQua < 3
                          ? '#187B33'
                          : '#187B33'
                    }}
                  >
                    {xemThem === 0
                      ? 'Xem thêm'
                      : '*Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.'}
                  </Text>
                </Pressable>

                <View style={{ margin: 20 }}>
                  <LinearGradient
                    colors={['#FFC200', '#FFFCAB', '#ECD24A', '#ECD24A', '#FFC200']}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    style={styles.grediant}
                  >
                    <TouchableOpacity
                      style={[styles.buttonContainer, styles.shadow]}
                      onPress={() => navigation.navigate('Page5')}
                    >
                      <Text style={styles.buttonText}>{KetQua >= 3 ? 'NHẬN NGAY' : 'MUA NGAY'}</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textTop: {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'svnGotham',
    fontSize: 14
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    fontFamily: 'svnGotham'
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'svnBold',
    color: 'white'
  },
  textInputError: {
    fontFamily: 'svnBold',
    fontSize: 12,
    color: '#ECD24A'
  },
  textGroupContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textGroupContent: {},
  textGroup1: {
    height: 50,
    marginTop: 5,
    justifyContent: 'center',
    backgroundColor: '#187B33',
    borderColor: 'white',
    borderWidth: 1.5,
    borderRadius: 8,
    alignItems: 'center'
  },
  textGroup1_1: {
    color: 'white',
    fontFamily: 'svnBold',
    fontSize: 13
  },
  textGroup1_2: {
    color: '#ECD24A',
    fontFamily: 'svnGotham',
    fontSize: 12
  },
  inner: {
    flex: 1
  },
  textS: {
    fontSize: 11,
    fontFamily: 'svnLightItalic',
    color: 'white',
    textAlign: 'center'
  },
  grediant: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30
  },
  buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#B70002',
    margin: 3,
    borderRadius: 30
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'svnGotham',
    fontSize: 28,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 4,
    paddingBottom: 4
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 40
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,

    elevation: 11
  }
})

export default Page4
