import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'
import DeleteBook from './pages/DeleteBook'
import Home from './pages/Home'
function App() {

  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/create' element={<CreateBook />} />
          <Route path='/books/details/:id' element={<ShowBook />} />
          <Route path='/books/edit/:id' element={<EditBook />} />
          <Route path='/books/delete/:id' element={<DeleteBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
