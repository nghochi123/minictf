import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "react-jsx-html-comments";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Please login to do anything else</p>
      <Link to="/login">Login</Link>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);
  const actUser = "james";
  const actPass = "sup3rh4x0r";
  const onSubmit = (e) => {
    e.preventDefault();
    if (user === actUser && password === actPass) {
      navigate("/admin");
    } else {
      setWrong(true);
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <h2>Login</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <label for="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{wrong ? "Your password is incorrect, please try again." : ""}</p>
      <react-comment>
        James, since you have forgotten your password AGAIN, I have updated your
        password to: sup3rh4x0r. Please reset it once you enter, and remember to
        delete this comment.
      </react-comment>
    </div>
  );
}

function Admin() {
  return (
    <div>
      <h1>Admin page</h1>
      <p>
        Welcome to the super secret admin page. If you are here, you must be
        James. Please access /manual to see your next task.
      </p>
    </div>
  );
}
