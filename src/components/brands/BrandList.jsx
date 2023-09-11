import { ScrollView } from 'react-native'
import BrandItem from './BrandItem'
import { brandImages } from '../../util/getImages'

const BrandList = ({ search }) => {
  const imagesFiltered = brandImages.filter(brand => brand.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        imagesFiltered.map((brand, index) => (
          <BrandItem key={brand.name} name={brand.name} />
        ))
      }
    </ScrollView>
  )
}

export default BrandList
