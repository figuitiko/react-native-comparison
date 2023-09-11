import TabsNavigatorComponent from '../../routers/tabs/TabsNavigatorComponent'

const routes = ['brands', 'cars']
const Home = () => {
  return (
    <TabsNavigatorComponent routes={routes} />
  )
}

export default Home
