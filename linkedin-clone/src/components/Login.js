import React, { useState } from 'react';
import '../styles/login.css';
import logo from '../assets/linkedin-logo.png';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [name, setName] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  //registeration handler
  const register = (e) => {
    if (!name) {
      return alert('Please Enter a full name.');
    }

    auth.createUserWithEmailAndPassword().then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePicUrl,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePicUrl,
            })
          );
        });
    });
  };

  const login = (e) => {};

  return (
    <div className="login">
      <img src={logo} alt="Logo" />
      <form>
        <input type="text" placeholder="Full name is required" value={name} onChange={(e) => setName(e.target.value)} />

        <input type="text" placeholder="Profile pic URL" value={profilePicUrl} onChange={(e) => setProfilePicUrl(e.target.value)} />

        <input type="eamil" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={login}>Sign in</button>
      </form>

      <p>
        Not a member?
        <span className="login__register">Register now</span>
      </p>
    </div>
  );
};

export default Login;
