import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useAuthStore = create((set, get) => ({
  user: null,
  setUser: (user) => {
    set({ user })
    AsyncStorage.setItem('user', JSON.stringify(user))
  },
  logout: async () => {
    set({ user: null })
    await AsyncStorage.removeItem('user')
  },
  loadUserFromStorage: async () => {
    const storedUser = await AsyncStorage.getItem('user')
    if (storedUser) {
      set({ user: JSON.parse(storedUser) })
    }
  }
}))

export default useAuthStore
