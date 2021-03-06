import Navbar from './components/Navbar';
import React from 'react';
import './styles.scss';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'core/components/Routes/PrivateRoute';
import Products from './components/Products';

const Admin = () => (
    <div className="admin-container">
      <Navbar />  
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/products">
            <Products />
          </PrivateRoute>
          <PrivateRoute path="/admin/categories">
            <h1>CATEGORIAS</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/users" allowedRoutes={['ROLE_ADMIN']}>
            <h1>USUARIOS</h1>
          </PrivateRoute>
        </Switch>
      </div>
    </div>
);

export default Admin;