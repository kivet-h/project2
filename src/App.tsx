import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import routes from './route.config'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          {routes.map((route: any) => (
            <Route key={route.path} path={route.path} element={route.element}>
              {route.children &&
                route.children.map((child: any) => (
                  <Route
                    key={`${route.path}/${child.path}`}
                    path={child.path}
                    element={child.element}
                  />
                ))}
            </Route>
          ))}
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
