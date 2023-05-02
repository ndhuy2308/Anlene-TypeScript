import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './src/page1'
import Page2Test from './src/page2'
import Page3Form from './src/page3'
import Page4 from './src/page4'
import Page5 from './src/page5'
import Page6 from './src/page6'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import store from './store/store'
import { Provider } from 'react-redux'
const Stack = createNativeStackNavigator()
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    svnBold: require('./assets/fonts/svn_gotham_bold.ttf'),
    svnLight: require('./assets/fonts/svn_gotham_light.ttf'),
    svnLightItalic: require('./assets/fonts/svn_gotham_light_italic.otf'),
    svnGotham: require('./assets/fonts/svn_gotham.otf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='HomePage' component={HomePage} />
          <Stack.Screen name='Page2' component={Page2Test} />
          <Stack.Screen name='Page3' component={Page3Form} />
          <Stack.Screen name='Page4' component={Page4} />
          <Stack.Screen name='Page5' component={Page5} />
          <Stack.Screen name='Page6' component={Page6} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
