// IMPORTS -
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/home-page";
import UseExample1 from "./components/use-example-1/use-example-1";
import UseExample2 from "./components/use-example-2/use-example-2";
import UseExample3 from "./components/use-example-3/use-example-3";
import { MainLayout } from "./layouts/main-layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="use-example-1" element={<UseExample1 />}/>
        <Route path="use-example-2" element={<UseExample2 />}/>
        <Route path="use-example-3" element={<UseExample3 />}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
