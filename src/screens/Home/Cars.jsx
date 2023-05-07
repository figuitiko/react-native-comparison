import { View, Text, Button } from 'react-native'

const Cars = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Cars</Text>
      <Button title='Go to search' onPress={() => navigation.navigate('search')} />
    </View>
  )
}

export default Cars
