// import { Component } from "react";
import "./page.css";
import { auth, provider } from "./../firebasetest";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserEmail,
  selectUserName,
} from "../features/userSlice";
// class SignIN extends Component{
//     render(){
function SignIN() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail); // by this we get the state
  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogOutState()).catch((error) => {
        alert(error.message);
      }); // user session terminated and sent state by dispatch which will empty out the active user state
    });
  };
  const handleSignIn = () => {
    // auth.signInWithEmailAndPassword(); // i will use this later
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName, // payload
          userEmail: result.user.email,
        })
      );
    });
  };
  return (
    <div className="signbox">
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
                  {userName ? (
                    <button onClick={handleSignOut}>SignOut</button>
                  ) : (
                    <button onClick={handleSignIn}>SignIn</button>
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
