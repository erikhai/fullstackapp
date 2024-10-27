import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavigationBar />
        <p className="read-the-docs">
          Home page, login and signup page, help page
          Home page needs a navbar that is catered for all devices
          Home page needs some dynamic dollar signup (three.js)
          some dynamic moving text with this
          followed by text underneath about what this app is about with a sign up button

        </p>
      </div>
      
    </>
  )
}

export default App
