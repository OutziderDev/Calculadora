import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-7xl font-mono font-extrabold  flex items-center justify-center'>Calculadora</h1>
      <main className='grid place-content-center'>
        <section>
          <input type="text" />
        </section>
        <section className='grid grid-cols-4 gap-2 '>
          <button className='bg-slate-200 rounded hover:bg-slate-400 active:translate-y-0.5'>1</button>
          <button className='bg-slate-200 rounded hover:bg-slate-400 active:translate-y-0.5'>2</button>
          <button className='bg-slate-200 rounded hover:bg-slate-400 active:translate-y-0.5'>3</button>
          <button className='bg-slate-200 rounded hover:bg-slate-400'>-</button>
          <button className='bg-slate-200 rounded hover:bg-slate-400'>4</button>
          <button className='bg-slate-200 rounded hover:bg-slate-400'>5</button>
          <button className='bg-slate-200 rounded hover:bg-slate-400'>6</button>
          <button className='bg-slate-200 rounded hover:bg-slate-400'>*</button>
          <button className='bg-slate-200 rounded hover:bg-slate-400'>7</button>
          <button className='bg-slate-200 rounded hover:bg-slate-400'>8</button>
          <button className='bg-slate-200 rounded hover:bg-slate-400'>9</button>
          <button className='bg-slate-200 rounded hover:bg-slate-400'>+</button>
        </section>
      </main>
    </>
  )
}

export default App
