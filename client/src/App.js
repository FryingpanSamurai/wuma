import PageLayout from "./pages/PageLayout";
import SplashPage from "./pages/SplashPage";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <PageLayout>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
    </PageLayout>
  );
}

export default App;
