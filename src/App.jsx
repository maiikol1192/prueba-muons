import React  from 'react';
import { Cards } from './components/cardsItem'
import { Sidebar } from './components/sidebar'



function App() {
  return (
    <div className='flex w-fulll h-screen bg-gray-50'>
      <Sidebar/>
      <div className='w-full overflow-y-auto'>
      <Cards/>
      </div>
    </div>
  
  );
}

export default App;
