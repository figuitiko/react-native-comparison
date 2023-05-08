import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigatorComponent from './src/routers/stack/StackNavigatorComponent'
import useAuthStore from './src/store/useAuthStore'
import Toast from 'react-native-toast-message'

export default function App () {
  const loadUserFromStorage = useAuthStore(state => state.loadUserFromStorage)
  loadUserFromStorage()
  return (
    <>
      <NavigationContainer>
        <StackNavigatorComponent />
      </NavigationContainer>
      <Toast />
    </>
  )
}
