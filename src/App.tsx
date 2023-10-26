import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

function App() {
    return (
        <>
            <Navbar />
            {/* {<Home />} */}
            <Login/>
            <Footer />
        </>
    )
}

export default App
