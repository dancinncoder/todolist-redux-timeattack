import React from 'react'
import Header from '../components/Header';
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Input />
      <TodoList />
      <TodoList />
      <Footer />
    </div>
  )
}

export default Home