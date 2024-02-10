import React from 'react';
import ReactDOM from 'react-dom';
import Userlist from './components/Userlist';
import UserDetailsPage from './components/UserDetailsPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Userlist /></div>,
  },
  {
    path: "/user/:userId",
    element: <UserDetailsPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<div><Userlist /></div>} />
//         <Route path="/user/:userId" element={<UserDetailsPage />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

export default App;
