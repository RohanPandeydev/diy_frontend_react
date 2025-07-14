import "./App.css";
import "./Responsive.css";
import { Route, Routes } from "react-router-dom";
import RoutesPath from './helper/Routes/Routes'
import PageNotFound from "./pages/PageNotFound";
import { Suspense } from "react";
const App = () => {

  return (
        <Suspense fallback={<div>Loading...</div>}>
    
      <Routes>
        {
          RoutesPath()
        }

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
