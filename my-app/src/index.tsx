import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ErrorPage from './core/error-page';
import ErrorBoundry from './core/ErrorBoundry';
import Contact from './components/Contact';
import { Provider } from 'react-redux';
import { persister, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
const router = createBrowserRouter([
  { path: '/', element: <App></App>, errorElement: <ErrorPage></ErrorPage>, loader: dataLoader },
  { path: '/home/:homec', element: <h1>Hello children</h1> },
  {
    path: '/contact', element: <Contact></Contact>, errorElement: <ErrorPage></ErrorPage>, loader: dataLoader, children: [
      { path: ':contactno', element: <h2>Contact children</h2> },
      { path: ':contactno/:name', element: <h2>Contact children with name</h2> }
    ]
  }
])

function dataLoader() {
  console.log("executed loader");
  return 'Data is loaded';
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <ErrorBoundry fallback={<h1>Something is wrong...</h1>}>
          <RouterProvider router={router} />
        </ErrorBoundry>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
