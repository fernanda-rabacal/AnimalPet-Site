import React from "react";
import {Routes, Route, Navigate} from "react-router-dom"

const Login = React.lazy(async () => import('../pages/Login').then((m) => ({ default: m.Login })));
const Home = React.lazy(async () => import('../pages/Home').then((m) => ({ default: m.Home })));
const Error = React.lazy(async () => import('../pages/Error').then((m) => ({ default: m.Error })));
const About = React.lazy(async () => import('../pages/About').then((m) => ({ default: m.About })));
const Register = React.lazy(async () => import('../pages/Register').then((m) => ({default: m.Register})))

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path='*' element={<Error/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  )
}