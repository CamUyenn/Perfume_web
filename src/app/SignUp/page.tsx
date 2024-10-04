import Image from "next/image";
import './SignUp.css';
import Button from 'react-bootstrap/Button';
import img from '../images/Worldofperfumes.png'
import React from 'react'

export default function Page() {
  return (
    <div className="container">
      <div className="header">
        <Image className="logo"
          src={img}
          alt="World of perfumes"
          width={150}
          height={150}
        />
      </div>
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
      
    </div>
  )
}

