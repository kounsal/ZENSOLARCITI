// import { Component } from "react";
import "./page.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, provider } from "./../firebasetest";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserEmail,
  selectUserName,
  selectUser,
} from "../features/userSlice";
// class SignIN extends Component{
//     render(){
function SignIN() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // below are for googleauth and redux
  const user = useSelector(selectUser);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail); // by this we get the state
  // const handleSignOut = () => {
  //   auth.signOut().then(() => {
  //     dispatch(setUserLogOutState()).catch((error) => {
  //       alert(error.message);
  //     }); // user session terminated and sent state by dispatch which will empty out the active user state
  //   });
  // };
  // const handleSignIn = () => {
  //   // auth.signInWithEmailAndPassword(); // i will use this later
  //   auth.signInWithPopup(provider).then((result) => {
  //     dispatch(
  //       setActiveUser({
  //         userName: result.user.displayName, // payload
  //         userEmail: result.user.email,
  //       })
  //     );
  //   });
  // };
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSignIn = () => {
    signInWithPopup(auth, provider) // by updated syntax and sill create with email and pass if needed
      .then((result) => {
        dispatch(
          setActiveUser({
            user: result.user.user,
            userName: result.user.displayName,
            userEmail: result.user.email,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  // for signin with email and password
  const signIn = (e) => {
    e.preventDefault(); // this will save the page from reloading

    // some fancy firebase login connection

    // auth
    //   .signInWithEmailAndPassword(email, password)

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        dispatch(
          setActiveUser({
            user: result.user.user,
            userName: result.user.displayName,
            userEmail: result.user.email,
          })
        );

        navigate("/");
      })
      // .then((auth) => {
      //   navigate("/");
      // })

      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    // auth
    //   .createUserWithEmailAndPassword(email, password)

    createUserWithEmailAndPassword(auth, email, password) // changed syntax
      .then((auth) => {
        // this means  it successfully created a new user with email and password
        // console.log(auth);
        toast.success("User Created", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // if (auth) {
        //   navigate("/");
        // }
        setEmail("");
        setPassword("");
      })
      .catch((error) => alert(error.message)); // it will give the error on screen if any error ocuured
  };

  return (
    <div className="signbox">
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  {/* Sign In Form */}
                  {/* <form>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="rememberPasswordCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                      <div className="text-center">
                        <a className="small" href="#" />
                        Forgot password?
                      </div>
                    </div>
                  </form> */}
                  {/* now we will setted up redux  */}
                  {/* for google */}
                  {userName ? (
                    <button onClick={handleSignOut}>SignOut</button>
                  ) : (
                    <button onClick={handleSignIn}>SignIn</button>
                  )}
                  {/* for email and password  */}
                  {userName ? (
                    <button onClick={handleSignOut}>SignOut</button>
                  ) : (
                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>

                      <div className="d-grid">
                        <button
                          type="submit"
                          onClick={signIn}
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        >
                          Sign in
                        </button>
                        <p>
                          By signing-in you agree to Zensolarciti's condition of
                          Use & Sale. Please see our Privacy Notice , our
                          Cookies Notice and our Interest-Based Ads Notice
                        </p>
                        <button
                          type="submit"
                          onClick={register}
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// }
// export {SignIN};
export default SignIN;
