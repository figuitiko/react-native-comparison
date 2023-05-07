import { Link } from '@react-navigation/native'
import { View } from 'react-native'
import DrawerItemNav from './DrawerItemNav'

const DrawerNavBar = () => {
  return (
    <View className='gap-y-4 mt-12 items-start p-4'>
      <Link to='/login'>
        <DrawerItemNav textContent='Iniciar sesión' iconVal='login' colorVal='green' />
      </Link>
      <Link to='/register'>
        <DrawerItemNav textContent='Registrarse' iconVal='person-add' colorVal='purple' />
      </Link>
      <Link to='/home'>
        <DrawerItemNav textContent='Inicio' iconVal='home' colorVal='blue' />
      </Link>
    </View>
  )
}

export default DrawerNavBar
