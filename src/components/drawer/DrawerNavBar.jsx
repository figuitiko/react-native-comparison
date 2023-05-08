import { Link } from '@react-navigation/native'
import { View } from 'react-native'
import DrawerItemNav from './DrawerItemNav'
import useAuthStore from '../../store/useAuthStore'

const DrawerNavBar = () => {
  const user = useAuthStore(state => state.user)
  return (
    <View className='gap-y-4 mt-12 items-start p-4'>
      {
        !user &&
        (
          <Link to='/login'>
            <DrawerItemNav textContent='Iniciar sesión' iconVal='login' colorVal='green' />
          </Link>
        )
      }
      {
        !user &&
        (
          <Link to='/register'>
            <DrawerItemNav textContent='Registrarse' iconVal='person-add' colorVal='purple' />
          </Link>
        )
      }
      {
        user &&
        (
          <Link to='/home'>
            <DrawerItemNav textContent='Inicio' iconVal='home' colorVal='blue' />
          </Link>
        )
      }
      {
        user &&
        (
          <Link to='/logout'>
            <DrawerItemNav textContent='Logout' iconVal='logout' colorVal='red' />
          </Link>
        )
      }
    </View>
  )
}

export default DrawerNavBar
