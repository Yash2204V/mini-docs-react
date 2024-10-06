import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-900 text-zinc-300 text-xl'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App