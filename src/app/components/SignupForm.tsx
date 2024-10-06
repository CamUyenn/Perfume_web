import React from "react";
import './SignupForm.css';

function SignupForm() {
    return (
        <form autoComplete="off" className="form">
        <h1 className="h1">Login Form</h1>
        <input
          type="text"
          className="input"
          placeholder="Họ và tên"
          name="fullname">
        </input>
        <input
          type="email"
          className="input"
          placeholder="Email"
          name="email">
        </input>
        <input
          type="phone"
          className="input"
          placeholder="Số điện thoại"
          name="phone">
        </input>
        <button className="button">Đăng ký</button>
      </form>
    );
}

export default SignupForm;