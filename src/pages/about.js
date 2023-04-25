import React from "react";
import Navbar from "../components/Navbar";


export default function About() {
  return (
    <>
      <Navbar />
        <div className="image-bg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg leading-7 mb-4">
            Welcome to our tech news and trends blog! Here, we bring you the latest updates on the ever-evolving world of technology, from the latest gadgets to emerging trends and everything in between. Our team of writers and tech enthusiasts are passionate about all things tech, and we strive to provide insightful, informative, and entertaining content that will keep you up-to-date and engaged. Whether you're a tech-savvy professional or just a curious reader, our blog has something for everyone. So join us on this exciting journey as we explore the fascinating world of technology and uncover the latest news and trends that are shaping our future.
            </p>
        </div>

    </>
  );
}

