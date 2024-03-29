/* src/App.js */
import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Survey from './components/Survey';
import Score from './components/Score';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = ({ signOut, user }) => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    // <div style={styles.container}>
    //   <Heading level={1}>Hello {user.username}</Heading>
    //   <Button onClick={signOut} style={styles.button}>Sign out</Button>
    //   <h2>Amplify Todos</h2>
    //   <input
    //     onChange={event => setInput('name', event.target.value)}
    //     style={styles.input}
    //     value={formState.name}
    //     placeholder="Name"
    //   />
    //   <input
    //     onChange={event => setInput('description', event.target.value)}
    //     style={styles.input}
    //     value={formState.description}
    //     placeholder="Description"
    //   />
    //   <button style={styles.button} onClick={addTodo}>Create Todo</button>
    //   {
    //     todos.map((todo, index) => (
    //       <div key={todo.id ? todo.id : index} style={styles.todo}>
    //         <p style={styles.todoName}>{todo.name}</p>
    //         <p style={styles.todoDescription}>{todo.description}</p>
    //       </div>
    //     ))
    //   }
    // </div>
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route exact path='/survey' element={<Survey />} />
          <Route exact path='/score' element={<Score />} />
        </Routes>
      </Router>
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App);
