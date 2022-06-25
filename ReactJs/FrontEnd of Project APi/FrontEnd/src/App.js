import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Categories from "./components/Categories";
import Shops from "./components/Shops";
import Items from "./components/Items";
import Register from "./components/Register";
import Home from "./components/Home";
import CategoriesForm from "./components/CategoriesForm";
import ItemClasses from "./components/ItemCLasses";
import ShopsForm from "./components/ShopsForm";
import ItemsForms from "./components/ItemsForms";
import Customer from "./components/Customer";
import Shopkeeper from "./components/Shopkeeper";
import ItemClassesForm from "./components/ItemClassesForm";
import Users from "./components/Users";
import ShopItems from "./components/ShopItems";
import Requistions from "./components/Requistions";
import Cart from "./components/Cart";
import CategoriesCust from "./components/CategoriesCust";
import CustomerShop from "./components/CustomerShop";
import Orders from "./components/Orders";
import AddShopItems from "./components/AddShopItems";
import Form from "./components/Form";
import UsersForm from "./components/UsersForm";
import CartTable from "./components/CartTable";

// import { Link, Outlet } from "react-router-dom";
//import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />}></Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="form" element={<Form />} />

          <Route path="/admin" element={<Admin />}>
            <Route path="categories" element={<Categories />} />
            <Route path="categoriesform" element={<CategoriesForm />} />
            <Route
              path="categoriesform/:categoryId"
              element={<CategoriesForm />}
            />

            <Route path="items" element={<Items />} />
            <Route path="itemsform" element={<ItemsForms />} />
            <Route path="itemsform/:itemsId" element={<ItemsForms />} />
            <Route path="itemsclasses" element={<ItemClasses />} />
            <Route path="itemsclassesform" element={<ItemClassesForm />} />
            <Route
              path="itemsclassesform/:itemClassId"
              element={<ItemClassesForm />}
            />
            <Route path="users" element={<Users />} />
            <Route path="usersform" element={<UsersForm />} />
            <Route path="usersform/:userId" element={<UsersForm />} />
          </Route>

          <Route path="customer" element={<Customer />} />

          <Route path="/shopkeeper" element={<Shopkeeper />}>
            <Route path="shops" element={<Shops />} />
            <Route path="shopsform" element={<ShopsForm />} />
            <Route path="shopsform/:shopsId" element={<ShopsForm />} />
            <Route path="shopitems" element={<ShopItems />} />

            <Route path="addShopItems" element={<AddShopItems />} />
            <Route path="requisitions" element={<Requistions />} />
          </Route>

          <Route path="/customer" element={<Customer />}>
            <Route path="customerShop" element={<CustomerShop />}>
              <Route path="itemsclasses" element={<ItemClasses />} />
            </Route>
            <Route path="items" element={<Items />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cartTable" element={<CartTable />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
