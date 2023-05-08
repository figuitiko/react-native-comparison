import Toast from 'react-native-toast-message'

export const toastConfig = {
  success: ({ text1, text2 }) => {
    Toast.show({
      type: 'success',
      text1,
      text2
    })
  },
  error: ({ text1, text2 }) => {
    Toast.show({
      type: 'error',
      text1,
      text2
    })
  },
  info: ({ text }) => {
    Toast.show({
      text1: text,
      type: 'info'
    })
  }
}
