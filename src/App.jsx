import { useState } from 'react'
import Button from './Components/Button'
import Navbar from './Components/Navbar'

const ContenedorPrincipal = () =>{
  return( 
    <>
    <Button valor={1} />
    <Button valor="2" />
    <Button valor={1} />
    <Button valor={1} />
    <Button valor={1} />
    <Button valor={1} />
    </>
  )
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1 className='text-7xl font-mono font-extrabold  flex items-center justify-center mt-20'>Calculadora</h1>
      <main className='grid place-content-center'>
        <section>
          <input type="text" />
        </section>
        <section className='grid grid-cols-4 gap-2 '>
          <ContenedorPrincipal/>
        </section>
      </main>
    </>
  )
}

export default App
