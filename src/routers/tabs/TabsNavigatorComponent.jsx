import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cars from '../../screens/Home/Cars'
import Brands from '../../screens/Home/Brands'
import Ionicons from 'react-native-vector-icons/Ionicons'

const routesDefined = {
  brands: { name: 'Brands', component: Brands },
  cars: { name: 'Cars', component: Cars }
}

const Tab = createBottomTabNavigator()

const TabsNavigatorComponent = ({ routes }) => {
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
      {
        routes.map((route, index) => (
          <Tab.Screen key={index} name={routesDefined[route].name} component={routesDefined[route].component} />
        ))
      }
    </Tab.Navigator>
  )
}

export default TabsNavigatorComponent
