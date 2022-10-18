import React from "react";
import { useState,  useEffect } from "react";
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { toast } from "react-toastify";
import "../../../css/jobseeker/SignupLogin1.css";
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CircularLoding, GetUserByemail, LoginAction, signupAction } from "../../../redux/action/AuthAction";
import { GOOGLECLIENTID, LINKEDINCLIENTID, ReferalEncryptionKey } from "../../../config/Config";
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
import CryptoJS from 'crypto-js';

export default function SignupLogin() {
  const [addclass, setaddclass] = useState("");
  const signupRef = React.useRef();
  const loginupRef = React.useRef();
  const [checked, setChecked] = React.useState(false);
  const [isregister, setregister] = React.useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [open, setopen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }

  const _Login = () => {
    const createuser = {
      email: loginupRef.current.l_email.value,
      password: loginupRef.current.l_password.value,
    }
    dispatch(LoginAction(createuser, navigate, Loading));
  }


  React.useEffect(() => {
    if (isLogin) {
      const createuser = {
        email: signupRef.current.l_email.value,
        password: signupRef.current.l_password.value,
      }
      dispatch(LoginAction(createuser, navigate));
    }
  }, [isLogin])

  React.useEffect(() => {
    if (isregister) {
      let type = new URLSearchParams(location.search).get("referal");

      if (type) {
        type = type.split(" ").join('+')
        var bytes = CryptoJS.AES.decrypt(type.toString(), ReferalEncryptionKey);
        var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        var userid = decryptedData.split("@");
        const createuser = {
          email: signupRef.current.s_email.value,
          password: signupRef.current.s_password.value,
          referancecode: userid[0],
          referreduser: userid[1],
        }
        dispatch(signupAction(createuser, navigate, Loading))
      }

      else {
        const createuser = {
          email: signupRef.current.s_email.value,
          password: signupRef.current.s_password.value,
          referancecode: 0,
          referreduser: 0,
        }
        dispatch(signupAction(createuser, navigate, Loading))

      }

    }
  }, [isregister])


  const _SighUp = () => {
    _signup_validation();
  }

  const _login_validation = () => {
    setisLogin(false)
    if (loginupRef.current.l_email.value === "") {
      toast.error('Email is required');
      return false;
    }
    if (loginupRef.current.l_password.value === "") {
      toast.error('Password is required');
      return false;
    }
    setisLogin(true);
  };

  const _signup_validation = () => {
    setregister(false);
    if (signupRef.current.s_email.value === "") {
      toast.error('email is required');
      return false;
    }
    if (signupRef.current.s_password.value === "") {
      toast.error('Password is required');
      return false;
    }
    if (signupRef.current.s_password.value !== signupRef.current.s_cfpassword.value) {
      toast.error('Password and confirm password should match');
      return false;
    }
    if (!checked) {
      toast.error('Please check teams and condition');
      return false;
    }
    setregister(true);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: GOOGLECLIENTID,
        scope: 'email',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const { linkedInLogin } = useLinkedIn({
    clientId: LINKEDINCLIENTID,
    redirectUri: 'http://localhost:3000/linkedin',
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });


  const _Googleloginfun = (response) => {
    dispatch(GetUserByemail({ EMAIL: response.profileObj.email }, (userdata) => {
      if (userdata.status === 1) {
        const createuser = {
          email: response.profileObj.email,
          password: response.Ca,
        }
        dispatch(LoginAction(createuser, navigate, Loading));
      }
      if (userdata.status === 0) {
        const createuser = {          
          email: response.profileObj.email,
          password: response.Ca,
          referancecode: 0,
          referreduser: 0,
        }
        dispatch(signupAction(createuser, navigate, Loading))
      }
    }))
  }

  React.useEffect(() => {
    let referal = new URLSearchParams(location.search).get("referal");
    if (referal) {
      toast.info("please signup to use referal code ");
      setopen(true);
      signupRef.current.referancecode.value = referal
    }
  }, []);

  return (
    <>
      <div className="signuplogin_content">
        <div className="container">
          <div className="blueBg">
            <div className="box signin">
              <h1>Have a FindMyNext Account?</h1>
              <h4>Login to avail the best offers for your future jobs!</h4>
              <button className="signinBtn" onClick={() => setaddclass("")}>
                Login
              </button>
            </div>
            <div className="box signup">
              <h1>Create an account FindMyNext</h1>
              <h4>Sign in to create your Career Path!</h4>
              <button
                className="signupBtn"
                onClick={() => setaddclass("active")}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className={`formBx ${addclass}`}>
            <div className="form signinForm">
              <div className="form_container">

                <form ref={loginupRef} onSubmit={_Login}>
                  <h1 style={{ margin: "0rem 0rem 1rem 0rem" }}>Login</h1>
                  <div className="loginbtn_lf">
                    <GoogleLogin
                      clientId={GOOGLECLIENTID}
                      render={renderProps => (
                        <button className="btn-grp-lf" type="button" onClick={renderProps.onClick} 
                        disabled={renderProps.disabled}>
                          <img
                            src="jobseeker/google.png"
                            alt=""
                          />
                          Signin with Google
                        </button>)}
                      buttonText="Login"
                      onSuccess={_Googleloginfun}
                      onFailure={_Googleloginfun}
                    />,


                    <button className="btn-grp-lf" onClick={linkedInLogin}>
                      <img
                        src=
                          "jobseeker/linkedin.png"
                        
                        alt=""
                      />
                      Signin with Linkedin
                    </button>
                  </div>
                  {/* <form ref={loginupRef} onSubmit={_Login}> */}

                  <div className="log">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="text"
                      name="l_email"
                      placeholder="Enter Your Email"
                    />
                    <label htmlFor="Password">Password</label>
                    <input
                      type="password"
                      name="l_password"
                      placeholder="Enter Your Passsword"
                    />
                    <div className="password_link">
                      <Link to="/forgotpassword" className="password">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>


                  <button type="button" className="login-btn" style={{ "cursor": "pointer" }} onClick={_Login}>
                    Login
                  </button>
                </form>
              </div>
            </div>

            <div className="form signupForm">
              <div className="form_container">
                <form ref={signupRef} onSubmit={_SighUp}>
                  <h1>Signup</h1>
                  <div className="Form-Row">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      placeholder="Enter Email..."
                      name="s_email"
                    />
                  </div>
                  <div className="Form-Row">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      placeholder="Enter Password..."
                      name="s_password"
                    />
                  </div>
                  <div className="Form-Row">
                    <label htmlFor="repeat password">Re Enter Password</label>
                    <input
                      type="password"
                      placeholder="Re Enter Password"
                      name="s_cfpassword"
                    />
                  </div>

                  <div className="Form-Row">
                    <label htmlFor="repeat password">Referance Code</label>
                    <input
                      type="text"
                      placeholder="please enter referance code"
                      name="referancecode"
                    />
                  </div>

                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="s_remember" onChange={() => setChecked(!checked)} />
                    </label>

                    <p>I have read and agree with the Terms and Conditions</p>
                  </div>
                  <button type="button" className="signupbtn" style={{ "cursor": "pointer" }} onClick={_SighUp}>
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
