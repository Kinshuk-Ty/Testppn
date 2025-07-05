
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const ButtonCard = ({ title, path }) => (
  <Link to={path}>
    <div className="bg-white shadow-lg p-6 rounded-2xl text-center hover:bg-pink-100 transition cursor-pointer">
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  </Link>
);

const Home = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold mb-6">Welcome to Paw Patrol</h1>
    <p className="text-lg mb-8">Bringing pet joy to your doorstep</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
      <ButtonCard title="Products" path="/products" />
      <ButtonCard title="Orders" path="/orders" />
      <ButtonCard title="About Us" path="/about" />
      <ButtonCard title="Partners" path="/partners" />
      <ButtonCard title="Login" path="/login" />
    </div>
  </div>
);

const Products = () => <div className="p-8 text-center">Products Page</div>;
const Orders = () => <div className="p-8 text-center">Orders Page</div>;
const AboutUs = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p>We’re a small team of passionate teenagers building India’s first pet product delivery app.</p>
    <p className="mt-2"><strong>Kinshuk Tyagi</strong> (Founder), <strong>Mohd Ayan</strong> (Co-founder), and <strong>Pratik Raj</strong> (Team & Ideas)</p>
  </div>
);
const Partners = () => <div className="p-8 text-center">Partners Page</div>;
const Login = () => (
  <div className="p-8 text-center max-w-sm mx-auto">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <input type="text" placeholder="Username" className="border p-2 w-full mb-2 rounded" />
    <input type="password" placeholder="Password" className="border p-2 w-full mb-4 rounded" />
    <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-full">Sign In</button>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
