import React, { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {

  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`app ${darkMode ? 'dark' : 'bright'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App