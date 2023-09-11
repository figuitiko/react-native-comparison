export const brandImages = [
  {
    name: 'mercado_libre',
    image: require('../../assets/brands/mercado_libre.png')
  },
  {
    name: 'kavak',
    image: require('../../assets/brands/kavak.png')
  },
  {
    name: 'auto_cosmo',
    image: require('../../assets/brands/auto_cosmo.png')
  }
]

export const getImage = (name) => {
  return brandImages.find(item => item.name === name.toLowerCase()).image || null
}
