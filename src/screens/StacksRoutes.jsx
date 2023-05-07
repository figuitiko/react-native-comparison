import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from './Search'

const Stack = createNativeStackNavigator()
const StacksRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Search' component={Search} />
    </Stack.Navigator>
  )
}

export default StacksRoutes
