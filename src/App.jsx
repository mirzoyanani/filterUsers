import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FilterUsers } from './FilterUsers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
<FilterUsers/>
    </div>
  )
}

export default App;
