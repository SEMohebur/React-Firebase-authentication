// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
// import { auth } from "../Firebase/firebase.init";

const Register = () => {
  //   const handleRegister = (e) => {

  const { creatUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    creatUser(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  //     e.preventDefault();

  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold text-center ">Please Register!</h1>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <p>
            Already have an account? Please{" "}
            <Link to="/login" className=" text-green-800 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
