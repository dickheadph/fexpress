import React, { useState } from "react";
import "./framer.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";
import axios from "axios";
import Spiner from "../Spinner";
function Register() {
  const dispatch = useDispatch();
  const hasAcc = useSelector((state) => state.ui.hasAccount);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const userSignup = async (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    //console.log(name, email, password)

    setIsLoading(true);
    let url;
    if (hasAcc) {
      //has acc. Goto sign in
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAunW2gq_lfuF2czKmX0O_rLgmVS3C1L-o";
    } else {
      //has No acc. Goto sign up
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAunW2gq_lfuF2czKmX0O_rLgmVS3C1L-o";
    }
    await axios
      .post(url, {
        email,
        password,
        returnSecureToken: true,
      })
      .then((res) => {
        console.log(res.data);
        //Store response in a state
      })
      .catch((err) => {
        //console.log(err.response.data.error.message);
        setResponse(err.response.data.error.message);
      });
    alert(response);
    setIsLoading(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  const statusHandler = () => {
    dispatch(uiActions.register());
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div className='w-full mx-auto'>
        <div className='flex h-screen justify-center items-start mx-5'>
          <div className='w-full sm:w-10/12 md:w-7/12 lg:w-5/12 xl:w-5/12'>
            <div className='bg-white p-4 rounded-md mt-20'>
              <form onSubmit={userSignup}>
                <div className='mb-4 m-2 items-center justify-center'>
                  <h1 className='my-4 font-semibold text-2xl ml-3'>
                    {!hasAcc ? "Sign Up" : "Log In"}
                  </h1>
                  {!hasAcc && (
                    <input
                      id='name'
                      type='name'
                      htmlFor='name'
                      className='w-full bg-slate-100 py-2 px-3 mx-2 rounded outline-none border-none  hover:ring ring-bg-gray-200'
                      placeholder='Name'
                      value={name}
                      onChange={nameHandler}
                    />
                  )}
                </div>
                <div className='mb-4 m-2 items-center justify-center'>
                  <input
                    id='email'
                    type='email'
                    htmlFor='email'
                    className='w-full bg-slate-100 py-2 px-3 mx-2 rounded outline-none border-none  hover:ring ring-bg-gray-200'
                    placeholder='E-mail'
                    value={email}
                    onChange={emailHandler}
                  />
                </div>
                <div className='mb-4 m-2 items-center justify-center'>
                  <input
                    id='password'
                    type='password'
                    htmlFor='password'
                    className='w-full bg-slate-100 py-2 px-3 mx-2 rounded outline-none border-none  hover:ring ring-bg-gray-200'
                    placeholder='Password'
                    value={password}
                    onChange={passwordHandler}
                  />
                </div>

                <div className='text-center font-medium p-4'>
                  <button
                    aria-label='button'
                    type='submit'
                    className='text-white bg-black py-2 px-4 rounded'
                  >
                    {!hasAcc ? " Register " : " Log In"}
                  </button>
                </div>
              </form>
            </div>

            <p className='text-center text-sm my-2' onClick={statusHandler}>
              {!hasAcc
                ? "Already have an account? Log in here."
                : " No acc yet? Sign up here"}
            </p>
            {isLoading && <Spiner />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
