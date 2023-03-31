import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Permission from "./pages/Permission";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Permission />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
