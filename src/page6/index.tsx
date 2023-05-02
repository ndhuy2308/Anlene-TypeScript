import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

function Page6({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styles.container}>
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
                <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => navigation.navigate('Page5')}>
                  <Entypo name='chevron-thin-left' size={24} color='white' />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center' }}>
                <AntDesign name='left' size={14} color='white' />
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
              <Text style={[styles.textTop]}>Trang 6/6</Text>
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
          <Text style={{ fontFamily: 'svnBold', color: '#ECD24A', fontSize: 26, textAlign: 'center' }}>
            THÔNG TIN SẢN PHẨM
          </Text>
          <Text style={{ fontFamily: 'svnBold', color: '#ECD24A', fontSize: 22, textAlign: 'center' }}>
            SỮA ANLENE 3 KHỎE
          </Text>
          <Image
            source={require('../../assets/images/group-page6.png')}
            style={{ alignSelf: 'center', marginBottom: 10 }}
          ></Image>
          <Text style={{ flexShrink: 1, textAlign: 'center', fontFamily: 'svnGotham', fontSize: 14, color: 'white' }}>
            Uống 2 ly Anlene mỗi ngày để bổ sung dinh{'\n'}dưỡng, tăng cường đề kháng đồng thời duy trì {'\n'}thói quen
            tập thể dục mỗi ngày để giúp hệ {'\n'}Cơ-Xương-Khớp chắc khoẻ, thoải mái tận {'\n'}hưởng cuộc sống năng
            động, chẳng ngại
            {'\n'}“rào cản” tuổi tác.
          </Text>
          <Image
            source={require('../../assets/images/xuong-chac.png')}
            style={{ alignSelf: 'center', marginBottom: 15 }}
          ></Image>
          <Image
            source={require('../../assets/images/co-khoe.png')}
            style={{ alignSelf: 'center', marginBottom: 15 }}
          ></Image>
          <Image
            source={require('../../assets/images/khop-linh-hoat.png')}
            style={{ alignSelf: 'center', marginBottom: 20 }}
          ></Image>
        </SafeAreaView>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  textTop: {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'svnGotham',
    fontSize: 14
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
  }
})

export default Page6
