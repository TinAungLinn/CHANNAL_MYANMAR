import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Movies from '../Pages/Movies'
import Nav from '../Components/Nav'
import Favourite from '../Pages/Favourite'
import WatchLater from '../Pages/WatchLater'

const Path = () => {
  return (
    <div className='bg-black'>
      <Nav/>
        <Routes>
            <Route path='/' element={<Movies/>}/>
            <Route path='/favourite' element={<Favourite/>}/>
            <Route path='/watchLater' element={<WatchLater/>}/>
        </Routes>
    </div>
  )
}

export default Path