import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import TodoDisplay from '../components/TodoDisplay';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Input />
      <TodoDisplay isActive={true}/>
      <TodoDisplay isActive={false}/>
      <Footer />
    </div>
  )
}

export default Home