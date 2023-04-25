import Navbar from "../components/Navbar";
import React, { useState, useContext } from 'react';
import { StateContext } from '../components/StateContext';

export default function Write() {

    const [ blogTitle, setBlogTitle] = useState("");
    const [ blogDate, setBlogDate] = useState("");
    const [ blogPhoto, setBlogPhoto] = useState("");
    const [ blogSnippet, setBlogSnippet] = useState("");
    const [ blogBody, setBlogBody] = useState("");
    const [ blogTopic, setBlogTopic] = useState([]);

    async function sendData() {
        console.log("Data to be sent: " + blogTitle)
        await fetch('/api/addPost', {
            method: 'POST',
            // headers: {
            //   'Content-Type': 'application/json'
            // }
            body: {
                    blogTitle: blogTitle,
                    blogDate: blogDate, 
                    blogPhoto: blogPhoto,
                    blogSnippet: blogSnippet,
                    blogBody: blogBody,
                    blogTopic: blogTopic       
                }
          });
    }


    return (
    <>
        <Navbar />
        <form class="max-w-lg mx-auto" >
            <div class="mb-4 mt-4">
                <label class="block text-gray-700 font-bold mb-2" for="title">Post Title:</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline" id="title" name="title"  
                onChange={(e)=>{setBlogTitle(e.currentTarget.value);}} />
            </div>

            <div class="mb-4 mt-4">
                <label class="block text-gray-700 font-bold mb-2" for="date">Post Date:</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight 
                focus:outline-none focus:shadow-outline" id="date" name="date" type="date"  
                onChange={(e)=>{setBlogDate(e.currentTarget.value);}}
                />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="photo_url">Post Photo URL:</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline" id="photo_url" name="photo_url" type="url" 
                placeholder="http://example.com/image.jpg" 
                onChange={(e)=>{setBlogPhoto(e.currentTarget.value);}}
                />
            </div>


            <div class="mb-4 mt-4">
                <label class="block text-gray-700 font-bold mb-2" for="snippet">Snippet:</label>
                <textarea class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline" id="snippet" name="snippet" rows="2" 
                placeholder="Not more than 20 words"
                onChange={(e)=>{setBlogSnippet(e.currentTarget.value);}}
                ></textarea>
            </div>

            <div class="mb-4 mt-4">
                <label class="block text-gray-700 font-bold mb-2" for="body">Main body of the post:</label>
                <textarea class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline" id="body" name="body" rows="10" 
                placeholder=""
                onChange={(e)=>{setBlogBody(e.currentTarget.value);}}
                ></textarea>
            </div>

            <div class="mb-4 mt-4">
                <label class="block text-gray-700 font-bold mb-2" for="keywords">Keywords:</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline" id="keywords" name="keywords" type="text" 
                placeholder="E.g. cybersecurity, AI, banking"
                onChange={(e)=>{setBlogTopic(e.currentTarget.value);}}
                />
            </div>

            <div class="flex items-center justify-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
                focus:outline-none focus:shadow-outline" 
                onClick={sendData}>
                Submit
                </button>
            </div>
        </form>



        
        {/* <div class="border border-gray-200 p-4 rounded-lg">
            <h3 class="text-xl font-medium mb-2">Post Title</h3>
            <p class="text-gray-500 text-sm mb-2">Post Date, in the format DD/MM/YYYY</p>
            <img className="mb-4 rounded-lg img" src={photo} alt="Post Photo" />
            <p class="text-gray-800 text-sm">Short Post Snippet, not more than 20 words</p>
            <p class="text-gray-800 text-sm">Main body of the Post</p>
            <h5 class="text-gray-800 text-md font-medium mb-2 mt-2">Keywords that desribe the topic of the Post</h5>
        </div> */}
    </>
  );
}



