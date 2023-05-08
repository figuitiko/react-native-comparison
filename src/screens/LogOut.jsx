import { View, Text } from 'react-native'
import useAuthStore from '../store/useAuthStore'
import { useEffect } from 'react'

const LogOut = ({ navigation }) => {
  const logout = useAuthStore(state => state.logout)
  const user = useAuthStore(state => state.user)
  useEffect(() => {
    if (user) {
      logout()
    }
  }, [user, logout])
  return (
    <View>
      <Text>LogOut</Text>
    </View>
  )
}

export default LogOut
