import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Editor from './Editor'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        <h1>Markdown Editor</h1>
      </header>
      <main>
        <Editor />
      </main>
    </div>
  )
}

export default App
