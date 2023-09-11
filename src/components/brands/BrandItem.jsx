import { Image } from 'react-native'
import { getImage } from '../../util/getImages'
import { Link } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BrandItem = ({ name }) => {
  const url = getImage(name)
  return (
    <Link to={{ screen: 'brand-item', params: { brand: name } }} className='w-1/2'>
      <TouchableOpacity className='items-center'>
        <Image source={url} className='w-32 h-32' />
      </TouchableOpacity>
    </Link>
  )
}

export default BrandItem
