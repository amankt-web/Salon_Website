import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      { auth ?<ul class="nav-ul">
        <li><Link to="/Home">Homepage</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/update">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout</Link></li>
      </ul>
        :<ul>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          </ul>
      }
    </div>
  );
};

export default Nav;
