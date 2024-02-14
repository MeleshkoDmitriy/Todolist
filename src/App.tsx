import { useState } from 'react'
import './App.css'
import { Panel } from './components/Panel/Panel'
import { Layout } from './pages/Layout/Layout'



function App () {
  const [isPanelOpen, setPanelOpen] = useState<boolean>(false)

  return (
      <div className='app'>
        <Layout isPanelOpen={isPanelOpen} />
        <Panel isPanelOpen={isPanelOpen} setPanelOpen={setPanelOpen}/>
      </div>
  )
}

export default App;
