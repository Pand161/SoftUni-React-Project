import { Route, Routes } from "react-router-dom"

import { AuthProvider } from "./contexts/authContext"

import AllItems from "./components/features/games/all-items/AllItems"
import Footer from "./components/features/footer/Footer"
import Header from "./components/features/header/Header"
import Home from "./components/features/home/Home"
import Login from "./components/features/auth/login/Login"
import Register from "./components/features/auth/register/Register"
import Profile from "./components/features/auth/profile/Profile"
import CreateGame from "./components/features/games/create-game/CreateGame"
import Path from "./paths"
import Logout from "./components/features/auth/logout/Logout"
import Details from "./components/features/games/details/Details"
import EditGame from "./components/features/games/edit-game/EditGame"
import AuthGuard from "./components/features/guards/AuthGuard"
import GuestGuard from "./components/features/guards/GuestGuards"
import NotFound from "./components/features/not-found/NotFound"


function App() {

  return (
    <AuthProvider>
    <>
      <Header />

      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.AllGames} element={<AllItems />} />
        <Route path={`${Path.Details}/:id`} element={<Details />} />

        <Route element={< AuthGuard />} >
          <Route path={Path.Create} element={<CreateGame />} />
          <Route path={`${Path.Edit}/:id`} element={<EditGame />} />
          <Route path={Path.Profile} element={<Profile />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Route>
        
        <Route element={< GuestGuard />} >
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      </>
      </AuthProvider>
  )
}

export default App
