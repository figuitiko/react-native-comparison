import HeaderDrawer from './HeaderDrawer'
import DrawerNavBar from './DrawerNavBar'
import { View } from 'react-native'

const DrawerContent = () => {
  return (
    <View className='flex-1 bg-orange-400'>
      <HeaderDrawer />
      <DrawerNavBar />
    </View>
  )
}

export default DrawerContent
