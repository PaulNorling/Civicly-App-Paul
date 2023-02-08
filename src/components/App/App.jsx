import React, { useEffect, useState } from 'react';
import { LoadScript } from "@react-google-maps/api";

import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import LandingPage from '../User/LandingPage/LandingPage';
import HomePage from '../User/HomePage/HomePage';
import UserLoginPage from '../User/UserLoginPage/UserLoginPage';
import UserRegisterPage from '../User/UserRegisterPage/UserRegisterPage';
import AdminDashboardPage from '../Admin/AdminDashboardPage/AdminDashboardPage';
import AdminLoginPage from '../Admin/AdminLoginPage/AdminLoginPage';
import CreateReportPage from '../User/CreateReportPage/CreateReportPage';
import MapViewPage from '../User/MapViewPage/MapViewPage';
import TopCitizensPage from '../User/TopCitizensPage/TopCitizensPage';
import UserProfilePage from '../User/UserProfilePage/UserProfilePage';
import UserReportsPage from '../User/UserProfilePage/UserReportsPage';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1C67F6',
        dark: '#2945d7',
        light: '#8cd1ff',
      },
      secondary: {
        main: '#FFBC00',
        bright: '#FF5C3A',
        neutral: '#FFA26B',
      },
      custom: {
        main: '#1cd5f6',
        purple: '#9800f3',
        bright: '#f61c68',
      }
    },
  });

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            <Route
              exact
              path="/home"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /home page
                <HomePage />
                :
                // Otherwise, show the login page
                <LandingPage />
              }
            </Route>

            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /home page
                <Redirect to="/home" />
                :
                // Otherwise, show the login page
                <UserLoginPage />
              }
            </Route>

            <Route
              exact
              path="/register"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /home page
                <Redirect to="/home" />
                :
                // Otherwise, show the login page
                <UserRegisterPage />
              }
            </Route>

            <Redirect exact from="/admin" to="/admin/dashboard" />

            <Route
              exact path="/admin/dashboard"
            >
              <AdminDashboardPage theme={theme} />
            </Route>

            <Route
              exact path="/admin/login"
            >
              <AdminLoginPage />
            </Route>

            <ProtectedRoute
              exact path="/addreport"
            >
              <CreateReportPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact path="/reportmap"
            >
              <MapViewPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact path="/topcitizens"
            >
              <TopCitizensPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact path="/profile"
            >
              <UserProfilePage />
            </ProtectedRoute>

            <ProtectedRoute
              exact path="/myreports"
            >
              <UserReportsPage />
            </ProtectedRoute>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
    </LoadScript>
  );
}

export default App;
