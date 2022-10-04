import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';
import TodoItem from './components/TodoItem';
import React from 'react'


const todos = [
  {text:'Ir al gym', completed: false},
  {text:'Comprar un cheesecake', completed: false},
  {text:'Lavar el auto', completed: false},
]

const App = () => {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  )
}

export default App