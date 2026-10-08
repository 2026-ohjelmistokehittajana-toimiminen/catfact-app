import { Route, Routes } from "react-router-dom"
import { AppBar, Toolbar, Button } from "@mui/material"
import { Link } from "react-router-dom"
import Home from "./pages/Home"
import Breeds from "./pages/Breeds"

const App = () => {

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/breeds">Breeds</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds" element={<Breeds />} />
      </Routes>
    </>
  )
}

export default App
