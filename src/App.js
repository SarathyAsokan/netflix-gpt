import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Browse } from "./components/Browse";
import { RootLayout } from "./components/RootLayout";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "/browse", element: <Browse /> },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
