import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
})

const SingInComponent = () => {
  const [bgInColor, setBgInColor] = useState('')
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })
  const onSubmit = data => {
    console.log(errors)
    console.log(data)
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
            placeholder='email'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
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
            placeholder='password'
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
