import React from 'react'
import Toggle from './components/toggle'
import Form from './components/Form'
import ImagesContainer from './components/ImagesContainer'
import { useDispatch } from 'react-redux'
import { toggleTheme } from './features/toggle'
const App = () => {
  const dispatch = useDispatch();
  return (
    <main className='flex flex-col'>
      <Toggle />
      <Form />
      <ImagesContainer />
    </main>
  )
}

export default App