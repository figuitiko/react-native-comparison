import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigatorComponent from './src/components/stack/StackNavigatorComponent'

export default function App () {
  return (
    <NavigationContainer>
      <StackNavigatorComponent />
    </NavigationContainer>
  )
}
