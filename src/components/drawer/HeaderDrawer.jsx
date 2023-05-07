import { View, Image, StyleSheet } from 'react-native'

const HeaderDrawer = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/car-header-drawer.webp')}
        style={styles.image}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%', height: 200, resizeMode: 'cover', objectFit: 'cover'
  }
})

export default HeaderDrawer
