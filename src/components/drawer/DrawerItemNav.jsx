import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
const colorsItem = {
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500'

}

const DrawerItemNav = ({ textContent, iconVal, colorVal }) => {
  return (
    <View className='flex-row justify-center gap-2 items-center'>
      <View className={`p-4 ${colorsItem[colorVal]} rounded-3xl w-16 h-16 items-center justify-center`}>
        <Icon name={iconVal} size={30} color='white' />
      </View>
      <Text className='text-white font-bold text-lg'>{textContent}</Text>
    </View>
  )
}

export default DrawerItemNav
