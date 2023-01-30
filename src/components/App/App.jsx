import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../User/NavMenu/NavMenu';
import Footer from '../User/Footer/Footer';
import Header from '../User/Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import LandingPage from '../User/LandingPage/LandingPage';
import LoginPage from '../User/LoginPage/LoginPage';
import UserRegisterPage from '../User/UserRegisterPage/UserRegisterPage';
import AdminDashboardPage from '../Admin/AdminDashboardPage/AdminDashboardPage';
import AdminLoginPage from '../Admin/AdminLoginPage/AdminLoginPage';
import ReportDetailView from '../Admin/ReportDetailView/ReportDetailView';
import CreateReportPage from '../User/CreateReportPage/CreateReportPage';
import MapViewPage from '../User/MapViewPage/MapViewPage';
import RegisterPage from '../User/RegisterPage/RegisterPage';
import TopCitizensPage from '../User/TopCitizensPage/TopCitizensPage';
import UserLoginPage from '../User/LoginPage/LoginPage';
import UserProfilePage from '../User/UserProfilePage/UserProfilePage';
import UserReportsPage from '../User/UserReportsPage/UserReportsPage';





import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page.
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
          </Route> */}

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          {/* <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
          </ProtectedRoute> */}

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
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/register"
          >
            <UserRegisterPage />
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <ProtectedRoute
            exact path="/admindashboard"
          >
            <AdminDashboardPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/adminloginpage"
          >
            <AdminLoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/reportdetail/:id"
          >
            <ReportDetailView />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/addreport"
          >
            <CreateReportPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/landingpage"
          >
            <LandingPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/loginpage"
          >
            <LoginPage />
          </ProtectedRoute>

          <Route
            exact path="/reportmap"
          >
            <MapViewPage />
          </Route>

          <ProtectedRoute
            exact path="/registerpage"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/topcitizens"
          >
            <TopCitizensPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/userloginpage"
          >
            <UserLoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/profile"
          >
            <UserProfilePage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/userregisterpage"
          >
            <UserRegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/userreportspage"
          >
            <UserReportsPage />
          </ProtectedRoute>


          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
