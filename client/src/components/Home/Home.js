import React from 'react'
import Header from '../Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import Posts from '../Posts/Posts'
import Footer from '../Footer/Footer'
import Hightlights from '../Highlights/HighLight'
import JoinUs from '../JoinUs/JoinUs'
function Home() {
    return (
        <>
            <Header />
            <Hightlights />
            <JoinUs />
            <Posts />
            <AboutMe />
            <Footer />
        </>
    )
}

export default Home
