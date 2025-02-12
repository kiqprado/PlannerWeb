import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { CreateTripPage } from './pages/CreateTrip'
import { TripDetailsPage }  from './pages/TripDetails'

const router = createBrowserRouter([
  {
    path: "/trips",
    element: <CreateTripPage/>
  },
  {
    path: "/details",
    element: <TripDetailsPage/>
  }
])

export function App() {
  return <RouterProvider router={router}/>
}