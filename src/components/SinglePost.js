import React from "react";
import { useState, useEffect } from 'react';


export default function SinglePost() {

  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      let response = await fetch('/api/getPosts');
      let posts = await response.json();
      setData(posts)
      }

    fetchData();
  }, []);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
    {data.length>0 
    ? <>
        <h1 className="text-4xl font-bold mb-4">Chat GPT: Revolutionizing Customer Service with AI</h1>
        <p className="text-gray-500 text-sm mb-2">Published: Jan 1, 2023</p>
        <img className="mb-4 rounded-lg" src="https://media.istockphoto.com/id/1127069581/photo/medical-technology-concept.jpg?s=612x612&w=0&k=20&c=qp_smilHlWhGzZ-NcftDLugFs_EVCLfX2Z7WCAD1v6A=" alt="Post Image" />
          <p className="text-lg leading-7 mb-4">
          Chat GPT, a cutting-edge AI language model, is revolutionizing customer service in many industries. With its advanced natural language processing capabilities, Chat GPT can simulate human-like conversations with customers, providing prompt and personalized assistance around the clock.
          </p>
          <p className="text-lg leading-7 mb-4">
          One interesting use case of Chat GPT is in the banking industry, where it can help customers with account inquiries, transaction history, and loan applications. Chat GPT can also analyze customer data and provide personalized financial advice based on their spending habits and financial goals.
          </p>
          <p className="text-lg leading-7 mb-4">
          In the healthcare industry, Chat GPT can provide patients with symptom analysis and medical advice. It can also schedule appointments and send reminders to patients, freeing up healthcare professionals to focus on more critical tasks.
          </p>
          <p className="text-lg leading-7 mb-4">
          Another industry where Chat GPT is making a difference is e-commerce. By integrating Chat GPT into their websites, e-commerce businesses can provide instant support to customers, guiding them through the shopping process and resolving any issues they may encounter.
          </p>
          <p className="text-lg leading-7 mb-4">
          Overall, Chat GPT is a game-changer in customer service, providing businesses with a cost-effective solution to enhance their customer experience. As technology continues to advance, we can expect to see more innovative use cases for Chat GPT and other AI language models in various industries.
          </p>
        <h1>{data[0].postTitle}</h1>
        <p>{data[0].author}</p>
        <div className="flex justify-between mb-4">
          <a href="#" className="text-gray-500 hover:text-gray-800">Previous Post</a>
          <a href="#" className="text-gray-500 hover:text-gray-800">Next Post</a>
        </div>
       </>
      : <h1>Data is being fetched</h1>
  }
  </div>
    
  );
}
