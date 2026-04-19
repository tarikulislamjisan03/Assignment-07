import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Homepage from '../Homepage.jsx';
import Timeline from './Timeline.jsx';
import Stats from './Stats.jsx';
import Errorpage from './Errorpage.jsx';
import Homecontent from '../Homecontent.jsx';
import FriendsProvider from '../FriendsProvider.jsx';
import FriendsDetails from './FriendsDetails.jsx';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage> </Homepage>,
 children:[
  {index:true,element:<Homecontent> </Homecontent>},
  {path:'/Timeline',element:<Timeline> </Timeline>},
  {path:'/Stats',element:<Stats> </Stats>},
  {path:'/FriendsDetails/:id',element:<FriendsDetails> </FriendsDetails>},
 ],
 errorElement:<Errorpage> </Errorpage>
  },


]);


createRoot(document.getElementById('root')).render(
<FriendsProvider> 
    <StrictMode>
    <RouterProvider router={router} />,
    <ToastContainer> </ToastContainer>
  </StrictMode>,
</FriendsProvider>
)
