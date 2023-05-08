import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerComponent from '../../components/drawer/DrawerComponent'
import SignIn from '../../screens/SignIn'
import SignUp from '../../screens/SignUp'
import Home from '../../screens/Home/Home'
import useScreenOptions from '../../hooks/useScreenOptions'
import Search from '../../screens/Search'
import LogOut from '../../screens/LogOut'
import useAuthStore from '../../store/useAuthStore'

const Drawer = createDrawerNavigator()

const Root = () => {
  const screenOptionsValues = useScreenOptions()
  const user = useAuthStore(state => state.user)
  return (
    <Drawer.Navigator
      initialRouteName={user ? 'home' : 'login'}
      headerShown={false}
      drawerContent={(props) => <DrawerComponent {...props} />}
      screenOptions={screenOptionsValues}
    >
      {
        user
          ? <Drawer.Screen name='home' component={Home} />
          : <Drawer.Screen name='login' component={SignIn} />
      }
      {
        user ? <Drawer.Screen name='search' component={Search} /> : <Drawer.Screen name='register' component={SignUp} />
      }
      {
        user && <Drawer.Screen name='logout' component={LogOut} />
      }
    </Drawer.Navigator>
  )
}

export default Root
