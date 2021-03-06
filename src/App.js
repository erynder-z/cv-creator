import React from 'react'
import './styles/App.css'
import './styles/Header.css'
import './styles/Main.css'
import './styles/Footer.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

const App = () => {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

export default App
