import React from "react";
import { useState, useEffect, useContext } from 'react';
import { StateContext } from "@/components/StateContext";
import moment from "moment";
import { useRouter } from "next/router";


export async function getStaticPaths() {
    const response = await fetch('http://localhost:3000/api/getPosts');
    const posts = await response.json();
    const paths = posts.map((post) => ({ params: { postId: post._id }}));
    return { paths, fallback: false };
  }

export async function getStaticProps({ params }) {
    const response = await fetch('http://localhost:3000/api/getPosts');
    const posts = await response.json();
    const post = posts.filter((item) => item._id === params.postId);
    return { props: { post } };
    }

export default function PostPage({ post }) {

    const { data, setData } = useContext(StateContext);
    const router = useRouter();
    const { postId } = router.query;
    const [active, setActive] = useState([])


    useEffect(() => {
      async function fetchData() {
          let response = await fetch('/api/getPosts');
          let posts = await response.json();
          const foundMatch = data.filter(item=>item._id.toString() === postId)
          setActive(foundMatch)
          setData(posts)
        }

      fetchData();
  }, []);

    

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <>
          {active.length>0 &&
          <>
            <h1 className="text-4xl font-bold mb-4">{active[0].postTitle}</h1>
            <p className="text-gray-800 text-lg mb-2">Published: {moment(active[0].date).format('DD/MM/YYYY')}</p>
            <p className="text-gray-800 text-lg mb-2">Author: {active[0].author}</p>
              <p className="text-lg leading-7 mb-4 mt-4 italic ">
              {active[0].postSnippet}
              </p>
            <img className="inner-photo mb-4 rounded-lg" src={active[0].photo} alt="Post Image" />
              <p className="text-lg leading-7 mb-4">
              {active[0].postBody}
              </p>
            <div className="flex justify-between mb-4">
              <a href="#" className="text-gray-500 hover:text-gray-800">Previous Post</a>
              <a href="#" className="text-gray-500 hover:text-gray-800">Next Post</a>
            </div>
          </>
          }
          </>
      </div>
      );
    }