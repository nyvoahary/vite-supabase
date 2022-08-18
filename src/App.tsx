import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { supabase } from './supabase-client'
function App() {
  const [count, setCount] = useState<any>('')

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('test')
      setCount(data)
      console.log(data)

    })()
  }, [])

  return (
    <div className="App">
      {JSON.stringify(count)}
    </div>
  )
}

export default App
