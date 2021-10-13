import React from 'react'
const HomePageContainer = React.lazy(() => import('../../features/home/HomePageContainer'))


interface HomeProps{}
const Home:React.FC<HomeProps> = () => <HomePageContainer/>

export default Home