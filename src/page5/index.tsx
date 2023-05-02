import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import TextGradient from '../TextGradient'

const Page5 = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../assets/images/page5.png')} style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flex: 2 }}>
            <LinearGradient
              colors={['#0E470E', '#20680D', '#2E820D', '#13500E', 'transparent']}
              start={{ x: 1.0, y: 0.0 }}
              end={{ x: 1.0, y: 0.52 }}
              style={{ flex: 1 }}
            >
              <SafeAreaView style={{ paddingLeft: 20, paddingRight: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'row', flex: 2, alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center' }}>
                      <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => navigation.navigate('Page4')}>
                        <Entypo name='chevron-thin-left' size={24} color='white' />
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center' }}>
                      <AntDesign name='left' size={14} color='white' />
                    </View>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                    <Text style={[styles.textTop]}>Trang 5/6</Text>
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
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={{ width: 116.6, height: 28.4, resizeMode: 'contain', alignSelf: 'center', marginBottom: 10 }}
                ></Image>
                <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                  <TextGradient text='CHĂM SÓC CƠ-XƯƠNG-KHỚP' style={{ fontSize: 22, fontFamily: 'svnBold' }} />
                  <TextGradient text='NHẬN LỘC SỨC KHỎE TỪ ANLENE' style={{ fontSize: 20, fontFamily: 'svnBold' }} />
                </View>
                <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 20 }}>
                  <Text style={{ fontFamily: 'svnBold', color: 'white', fontSize: 12 }}>
                    ANLENE LÌ XÌ NGAY 100.000đ KHI ĐẶT MUA HÔM NAY!
                  </Text>
                  <Text style={{ fontFamily: 'svnGotham', color: 'white', fontSize: 12 }}>
                    Hạn sử dụng: 25/07/2021 - 31/07/2021
                  </Text>
                </View>
              </SafeAreaView>
            </LinearGradient>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <LinearGradient
              colors={['transparent', '#0E470E', '#20680D', '#2E820D', '#13500E']}
              start={{ x: 0.0, y: 0.2 }}
              end={{ x: 0.0, y: 1.0 }}
              style={{ flex: 1 }}
            >
              <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end', alignSelf: 'center' }}>
                <View
                  style={{ borderColor: 'white', borderWidth: 1, borderRadius: 7, width: '80%', alignSelf: 'center' }}
                >
                  <View style={{ flexDirection: 'column' }}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        paddingLeft: '10%',
                        paddingRight: '10%',
                        paddingTop: '5%',
                        paddingBottom: '5%',
                        alignItems: 'center'
                      }}
                    >
                      <Text style={{ color: '#73A442', fontFamily: 'svnBold', fontSize: 15 }}>MÃ GIẢM GIÁ</Text>
                      <Text style={{ color: '#478449', fontFamily: 'svnBold', fontSize: 16 }}>ANLENANMUMW88YQI</Text>
                    </View>

                    <View>
                      <View style={{ flexDirection: 'row', padding: 15 }}>
                        <View style={{ flex: 1 }}>
                          <Text style={{ color: '#ECD24A', fontFamily: 'svnBold', fontSize: 13 }}>ÁP DỤNG TẠI</Text>
                        </View>

                        <View style={{ flex: 1 }}>
                          <Image source={require('../../assets/images/logo-lazada.png')} />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ alignItems: 'center', margin: 5 }}>
                  <TouchableOpacity
                    style={[styles.buttonContainer, styles.shadow]}
                    onPress={() => navigation.navigate('Page6')}
                  >
                    <Text style={styles.buttonText}>MUA NGAY</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.buttonContainer,
                      { backgroundColor: 'white', borderColor: '#73A442', borderWidth: 2 }
                    ]}
                    onPress={() => navigation.navigate('Page6')}
                  >
                    <Text style={[styles.buttonText, { color: '#73A442', fontSize: 20 }]}>Tìm hiểu ngay</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.TextBottom}>
                  *Voucher chỉ áp dụng cho đơn hàng mua các sản phẩm Anlene Gold 3X, {'\n'}Anlene Gold 5X tại gian hàng
                  Fonterra Official Retail Store trên Lazada
                </Text>
                <Text style={styles.TextBottom}>* Voucher chỉ áp dụng cho đơn hàng có giá trị từ 200.000đ</Text>
              </SafeAreaView>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  textTop: {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'svnGotham',
    fontSize: 14
  },
  TextBottom: {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'svnLightItalic',
    fontSize: 10.5
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
  textGradient: {
    fontFamily: 'svnBold',
    textAlign: 'center'
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
export default Page5
