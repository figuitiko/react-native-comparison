import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerComponent from '../../components/drawer/DrawerComponent'
import SignIn from '../../screens/SignIn'
import SignUp from '../../screens/SignUp'
import Home from '../../screens/Home/Home'
import useScreenOptions from '../../hooks/useScreenOptions'
import Search from '../../screens/Search'
import LogOut from '../../screens/LogOut'
import useAuthStore from '../../store/useAuthStore'
import PublicHome from '../../screens/PublicHome'
import BrandSingle from '../../screens/BrandSingle'

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
          : <Drawer.Screen name='publicHome' component={PublicHome} options={{ title: 'Inicio' }} />
      }
      {
        !user && <Drawer.Screen name='login' component={SignIn} />
      }
      {
        !user && <Drawer.Screen name='register' component={SignUp} />
      }
      {
        user && <Drawer.Screen name='search' component={Search} screenOptions={{ title: 'Buscar' }} />
      }
      {
        user && <Drawer.Screen name='logout' component={LogOut} />
      }
      {
        user && <Drawer.Screen name='brand-item' component={BrandSingle} />
      }
    </Drawer.Navigator>
  )
}

export default Root
