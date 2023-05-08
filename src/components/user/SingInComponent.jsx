import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import { loginFetch } from '../../fetchers/fetchers'
import useAuthStore from '../../store/useAuthStore'
import { useNavigation } from '@react-navigation/native'
import { toastConfig } from '../../util/toast'

const schema = yup.object().shape({
  email: yup.string().email('Escribe una direccion Email').required(' el campo es requerido'),
  password: yup.string().required('El campo es Requerido').min(6, 'La contraseña debe tener al menos 6 caracteres')
})

const SingInComponent = () => {
  const navigation = useNavigation()
  const [bgInColor, setBgInColor] = useState('')
  const setUser = useAuthStore(state => state.setUser)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })
  const onSubmit = async (data) => {
    const { email, password } = data
    try {
      const rsp = await loginFetch(email, password)
      const dataRsp = rsp.data.data
      const user = {
        ...dataRsp.foundUser,
        token: dataRsp.token
      }
      setUser(user)
      navigation.navigate('home')
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) return toastConfig.error({ text1: 'Revisa tus credenciales', text2: 'Usuario o contraseña incorrectos' })
        if (error.response.status === 401) return toastConfig.error({ text1: 'Revisa tus credenciales', text2: 'Usuario o contraseña incorrectos' })
      }
      console.log('error', error)
    }
  }
  const handlePressIn = () => {
    setBgInColor('bg-orange-400')
  }
  const handlePressOut = () => {
    setBgInColor('')
  }
  return (
    <View className='p-8'>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className='border-2 border-black rounded-md p-2'
            placeholder='Correo electronico'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value.toLowerCase()}
          />
        )}
        name='email'
      />
      {errors.email && <Text role='alert' className='text-red-500'>{errors.email.message}</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 6
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className='border-2 border-black rounded-md p-2 mt-4'
            placeholder='Contraseña'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name='password'
      />
      {errors.password && <Text role='alert' className='text-red-500'>{errors.password.message}</Text>}

      <View className='flex-row justify-end mt-4'>
        <TouchableOpacity
          className={`border-2 border-black  ${bgInColor && 'border-white text-white'} rounded-md ${bgInColor} `}
          onPress={handleSubmit(onSubmit)}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text className={`p-2 text-black ${bgInColor && 'text-stone-50'}`}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SingInComponent
