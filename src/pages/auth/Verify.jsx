import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { btnLoading, verifyOtp } = UserData();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await verifyOtp(Number(otp), navigate);
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Verify Account</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="otp">OTP</label>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button className="common-btn" type="submit" disabled={btnLoading}>
            {btnLoading ? "Please Wait..." : "Verify"}
          </button>
        </form>
        <p className="spam-warning">
          ⚠️ If you don't see the OTP, check your <strong>Spam</strong> or{" "}
          <strong>Junk</strong> folder.
        </p>
        <p>
          Go back to <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Verify;
