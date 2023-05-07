import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerComponent from '../drawer/DrawerComponent'
import SignIn from '../../screens/SignIn'
import SignUp from '../../screens/SignUp'
import Home from '../../screens/Home/Home'
import useScreenOptions from '../../hooks/useScreenOptions'
import Search from '../../screens/Search'

const Drawer = createDrawerNavigator()

const Root = () => {
  const screenOptionsValues = useScreenOptions()

  return (
    <Drawer.Navigator
      initialRouteName='Login'
      headerShown={false}
      drawerContent={(props) => <DrawerComponent {...props} />}
      screenOptions={screenOptionsValues}
    >
      <Drawer.Screen headerShown={false} name='login' component={SignIn} />
      <Drawer.Screen name='register' component={SignUp} />
      <Drawer.Screen name='home' component={Home} />
      <Drawer.Screen name='search' component={Search} />
      <Drawer.Screen name='*' component={Home} />
    </Drawer.Navigator>
  )
}

export default Root
