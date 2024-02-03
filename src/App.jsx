import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import QuoteFetcherLoader from './QuoteFetcherLoader'
import PVwithSearch from './PVwithSearch'
function App() {


  return (
    <>
      {/* <QuoteFetcherLoader/> */}
      <PVwithSearch/>
    </>
  )
}

export default App
