import { useState } from 'react'
import { TextInput, View } from 'react-native'
import BrandList from './BrandList'
import { Feather } from '@expo/vector-icons'

const SearchBrand = () => {
  const [text, setText] = useState('')
  return (
    <>
      <View className='items-center flex flex-row relative bg-[#f0eeee] border-[5] py-[10] '>
        <TextInput
          placeholder='Buscar'
          onChangeText={(val) => setText(val)}
          defaultValue={text}
          className='w-1/2 my-4 border border-gray-400 rounded-md p-2'
        />
        <Feather style={{ position: 'absolute', left: '43%' }} name='search' size={24} color='black' />
      </View>
      <BrandList search={text} />
    </>
  )
}

export default SearchBrand
