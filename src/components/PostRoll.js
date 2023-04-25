import React from "react";
import { useState, useEffect, useContext } from 'react';
import { StateContext } from "../components/StateContext";
import moment from "moment";
import Link from 'next/link';


  
export default function PostRoll(){

    // const [data, setData] = useState({});
    const { loggedIn, data, setData } = useContext(StateContext);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch('/api/getPosts');
            let posts = await response.json();
            setData(posts)
            }

        fetchData();
    }, []);
  

    async function deletePost(e) {
        e.preventDefault();
        console.log("e.currentTarget.name: " + e.currentTarget.name);
        const toDelete = e.currentTarget.name;
        await fetch('http://localhost:3000/api/deletePost', {
        // await fetch(`/api/deletePost?postId=${itemToDelete}`, {
            method: 'DELETE',
            // headers: {
            //   'Content-Type': 'application/json'
            // },
            body: JSON.stringify({ toDelete })
          });
            console.log("Kustutamise tagajärg: " + toDelete)
            setData(data.filter((post) => post.postTitle !== toDelete))
      }


    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h2 class="text-2xl font-bold mb-4">Latest Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.length>0 && data.map((post)=>(
            <div class="border border-gray-200 p-4 rounded-lg" key={post._id}>
                <h3 class="text-xl font-medium mb-2"><b>
                <Link href={`/posts/${post._id}`}>
                    {post.postTitle} 
                </Link>
                </b></h3>
                <p class="text-gray-500 text-sm mb-2">{moment(post.date).format('DD/MM/YYYY')}</p>
                <img className="mb-4 rounded-lg img" src={post.photo} alt="Post Image" />
                <p class="text-gray-800 text-md">{post.postSnippet}</p>
                <h5 class="text-gray-800 text-md font-medium mb-2 mt-2">
                KEYWORDS: <em>{post.topic.map(item=>(item + " "))}</em>
                </h5>
                <p>{post._id.toString()}</p>
                {loggedIn && 
                <>
                    <button class="bg-blue-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg mt-3 mb-3 mr-3"
                        onClick={deletePost} name={post.postTitle}>
                        Delete
                    </button> 
                    <button class="bg-blue-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg mt-3 mb-3"
                        onClick={()=>{alert("Make me editable!")}}>
                        Edit
                    </button> 
                </>
                }
            </div>
        ))}
        </div>
    </div>
    )


}