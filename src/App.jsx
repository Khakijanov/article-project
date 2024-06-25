// react-router-dom
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'
//Layout
import MainLayout from './Layouts/MainLayout'
import ArticleLayout from './Layouts/ArticleLayout'
import ContactLayout from './Layouts/ContactLayout'
// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Faq from './Pages/NastedRoute/Faq'
import Form from './Pages/NastedRoute/Form'
import ErrorPage from './Pages/ErrorPage'
import Article from './articles/Article'
import ArticlesDetailes from './articles/ArticlesDetailes'


function App() {
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>

      <Route path='contact' element={<ContactLayout/>}>
          <Route path='faq' element={<Faq/>}/>
          <Route path='form' element={<Form/>}/>
      </Route>
      <Route path='articles' element={<ArticleLayout/>}>
        <Route index element={<Article/>}/>
        <Route path=':id' element={<ArticlesDetailes/>}/>
      </Route>
      {/* page not found */}
      <Route path='*' element={<ErrorPage/>}/>

    </Route>
  )
)

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
