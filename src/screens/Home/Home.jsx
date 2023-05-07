import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cars from './Cars'
import Brands from './Brands'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Cars') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline'
          } else if (route.name === 'Brands') {
            iconName = focused ? 'ios-list' : 'ios-list-outline'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: { backgroundColor: 'rgb(251 146 60)' }
      })}
    >
      <Tab.Screen name='Cars' component={Cars} />
      <Tab.Screen name='Brands' component={Brands} />
    </Tab.Navigator>
  )
}

export default Home
