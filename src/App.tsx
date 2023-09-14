import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddEstase from "./pages/AddEstase";
import EstateByCategory from "./pages/EstateByCategory";
import SingeleState from "./pages/SingeleState";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Login from "./pages/Login";
import Signup from "./pages/Signu";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="add-estase" element={<AddEstase />} />
          <Route path="category/:categoryId" element={<EstateByCategory/>} />
          <Route path="estate/:estateId" element={<SingeleState />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
    </QueryClientProvider>
  );
}

export default App;