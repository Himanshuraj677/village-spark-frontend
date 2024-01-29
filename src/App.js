import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./component/page/Nav";
import Home from "./component/page/Home";
import Login from "./component/page/Login";
import Signup from "./component/page/Signup";
import app from "./Firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState, createContext } from "react";
import Job from "./component/page/job";
import Chat from "./component/page/chat";
import JobForm from "./component/page/post";
import Donation from "./component/page/donation";
import Farming from "./component/page/Farming";
import Business from "./component/page/Business";
import "./style/Nav.css";
import PageNotFound from "./component/page/PageNotFound";
import LoadingPage from "./component/page/LoadingPage";
import SearchProducts from "./component/page/SearchProducts";

const checkAuth = createContext();
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
  });

  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        setIsAuthenticated(true);
        // console.log("Logged in");
        setUserDetail((prevData) => ({
          ...prevData,
          name: user.displayName,
          email: user.email,
        }));
      } else {
        setIsAuthenticated(false);
        // console.log("You have been logged out");
      }
    });
  }, [auth]);

  // useEffect(() => {
  //   if (userDetail && userDetail.name) {
  //     console.log(
  //       `User displayName: ${userDetail.name}\nuser emailid:${userDetail.email}`
  //     );
  //   }
  // }, [userDetail.name, userDetail]);

  if (loading) {
    // console.log(isAuthenticated);
    return <LoadingPage />;
  } else {
    return (
      <>
        <checkAuth.Provider value={isAuthenticated}>
          <Nav />
          {isAuthenticated ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" />} />;
              <Route path="/chat" element={<Chat />} />
              <Route path="/post" element={<JobForm />} />
              <Route path="/job" element={<Job />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/farming" element={<Farming />} />
              <Route path="/business" element={<Business />} />
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/register" element={<Navigate to="/" />} />
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/searchProducts" element={<SearchProducts />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </checkAuth.Provider>
      </>
    );
  }
};

export default App;
export { checkAuth };
