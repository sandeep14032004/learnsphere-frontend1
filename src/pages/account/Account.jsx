import React from "react";
import { MdDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "./account.css";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";

const Account = ({ user }) => {
  const navigate = useNavigate();
  const { setIsAuth, setUser } = UserData();

  if (!user) {
    return <h2>Loading...</h2>;
  }

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser([]);
    navigate("/login");
    toast.success("Logged Out");
  };

  return (
    <div>
      <div className="profile">
        <h2>My Profile</h2>
        <div className="profile-info">
          <p>
            <strong>Name - {user.name}</strong>
          </p>
          <p>
            <strong>Email - {user.email}</strong>
          </p>
          <button
            className="button"
            onClick={() => navigate(`/${user._id}/dashboard`)}
          >
            <MdDashboard />
            Dashboard
          </button>
          <br />
          {user.role === "admin" && (
            <button
              className="button"
              onClick={() => navigate(`/admin/dashboard`)}
            >
              <MdDashboard />
              Admin Dashboard
            </button>
          )}
          <br />
          <button
            className="button"
            style={{
              background: "red",
              color: "white",
              padding: "10px 15px",
              borderRadius: "15px",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s ease, transform 0.2s ease",
            }}
            onClick={logoutHandler}
            onMouseEnter={(e) => (e.target.style.background = "darkred")}
            onMouseLeave={(e) => (e.target.style.background = "red")}
          >
            <CiLogout style={{ marginRight: "5px" }} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
