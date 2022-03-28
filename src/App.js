import React, { Component } from 'react'
import './styles/App.css'
import './styles/Header.css'
import './styles/Main.css'
import './styles/Footer.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        )
    }
}

export default App
