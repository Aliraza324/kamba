import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './routes'
import { Loader } from './components/Loader'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return <RouterProvider router={router} />
}

export default App
