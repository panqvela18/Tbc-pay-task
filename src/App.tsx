import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Root from "./Root";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index={true} element={<Home />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
