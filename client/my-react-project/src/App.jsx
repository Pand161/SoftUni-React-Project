import { Route, Routes } from "react-router-dom"
import AllItems from "./components/features/games/all-items/AllItems"
import Footer from "./components/features/footer/Footer"
import Header from "./components/features/header/Header"
import Home from "./components/features/home/Home"
import Login from "./components/features/login/Login"
import Register from "./components/features/register/Register"
import Profile from "./components/features/profile/Profile"
import CreateGame from "./components/features/games/create-game/CreateGame"


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-games" element={<AllItems />} />
        <Route path="/create-game" element={<CreateGame />} />

        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
      </>
  )
}

export default App
