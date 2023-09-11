import { View, Text } from 'react-native'
import SearchByBrand from '../components/brands/SearchByBrand'

const BrandSingle = ({ route }) => {
  const { brand } = route.params
  return (
    <View>
      <Text>{brand}</Text>
      <SearchByBrand />
    </View>
  )
}

export default BrandSingle
