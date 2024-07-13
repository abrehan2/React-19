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
import UseContext from "./components/use-context/use-context";
import ActionExample1 from "./components/action-example-1/action-example-1";
import ActionExample2 from "./components/action-example-2/action-example-2";
import UseFormStatus from "./components/use-form-status/use-form-status";
import UseFormState from "./components/use-form-state/use-form-state";
import UseOptimistic from "./components/use-optimistic/use-optimistic";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="use-example-1" element={<UseExample1 />}/>
        <Route path="use-example-2" element={<UseExample2 />}/>
        <Route path="use-example-3" element={<UseExample3 />}/>
        <Route path="use-example-context" element={<UseContext />}/>
        <Route path="action-example-1" element={<ActionExample1 />}/>
        <Route path="action-example-2" element={<ActionExample2 />}/>
        <Route path="useformstatus-example" element={<UseFormStatus />}/>
        <Route path="useformstate-example" element={<UseFormState />}/>
        <Route path="useoptimistic-example" element={<UseOptimistic />}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
