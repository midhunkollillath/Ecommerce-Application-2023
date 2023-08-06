import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/COntactPage";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfount";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import AdminUsers from "./pages/admin/Admin-users";
import { Order } from "./pages/user/Order";
import Profile from "./pages/user/Profile";
import Product from "./pages/admin/Product";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/admin/AdminOrders";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:slug" element={<ProductDetails />}/>
      <Route path="/categories" element={<Categories />}/>
      <Route path="/categories/:slug" element={<CategoryProduct />}/>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
        <Route path="user/orders" element={<Order />} />
        <Route path="user/profile" element={<Profile />} />
      </Route>
      <Route path="/dashboard" element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard/>} />
        <Route path="admin/create-category" element={<CreateCategory/>}/>
        <Route path="admin/create-product" element={<CreateProduct/>}/>
        <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
        <Route path="admin/product" element={<Product/>}/>
        <Route path="admin/users" element={<AdminUsers/>}/>
        <Route path="admin/orders" element={<AdminOrders/>}/>
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPasssword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  </>
  );
}

export default App;