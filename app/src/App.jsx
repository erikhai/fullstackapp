import './App.css';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from './pages/Registration.jsx';

function App() {
  return (
    <Router>
      <>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
