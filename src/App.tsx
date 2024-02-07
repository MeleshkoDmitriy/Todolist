import { useState } from 'react'
import './App.css'
import { Panel } from './components/Panel/Panel'
import { Layout } from './pages/Layout/Layout'


function App() {

  const [isPanelOpen, setPanelOpen] = useState(false)

  return (
      <div className='app'>
        <Layout isPanelOpen={isPanelOpen} setPanelOpen={setPanelOpen}/>
        <Panel isPanelOpen={isPanelOpen} setPanelOpen={setPanelOpen}/>
      </div>
  )
}

export default App
