
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Root from '../drawer/Root'

const Stack = createNativeStackNavigator()
const StackNavigatorComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName='Root'
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 30 }
      }}
    >
      <Stack.Screen
        name='Root'
        component={Root}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigatorComponent
