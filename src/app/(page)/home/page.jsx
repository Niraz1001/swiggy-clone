import Categories from '@/components/categroies/page'
import Cuisines from '@/components/Cuisines/page'
import Footer from '@/components/footer.jsx/page'
import Navbar from '@/components/navbar/page'
import Places from '@/components/places/page'
import Resturants from '@/components/resturants/page'
import Topresturants from '@/components/topresturant/page'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Categories/>
        <Topresturants/>
        <Resturants/>
        <Places/>
        <Cuisines/>
        <Footer/>
    </div>
  )
}

export default Home