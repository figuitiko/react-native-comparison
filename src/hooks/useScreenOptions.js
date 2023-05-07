import { DrawerActions, useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const handleGoBack = (navigation) => {
  const canGoBack = navigation.canGoBack()
  if (canGoBack) {
    navigation.goBack()
  } else {
    navigation.navigate('home')
  }
}

const useScreenOptions = () => {
  const navigation = useNavigation()
  return {
    headerStyle: {
      backgroundColor: 'rgb(251 146 60)'
    },
    headerTintColor: 'black',
    headerLeft: () => (
      <View>
        <TouchableOpacity onPress={() => handleGoBack(navigation)} className='pl-4'>
          <Icon name='arrow-back' size={30} color='black' />
        </TouchableOpacity>
      </View>
    ),
    headerRight: () => (
      <View>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} className='pr-4'>
          <Icon name='menu' size={30} color='black' />
        </TouchableOpacity>
      </View>
    )
  }
}

export default useScreenOptions
