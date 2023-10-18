import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import TwoBoxesType1 from "./components/TwoBoxesType1";
import TwoBoxesType2 from "./components/TwoBoxesType2";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<TwoBoxesType1 />} />
      <Route path="/type2" element={<TwoBoxesType2 />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
