import React, {useState, useContext} from "react";
import { StateContext } from '../components/StateContext';
import Link from 'next/link';


export default function Navbar(){

const { loggedIn, setLoggedIn } = useContext(StateContext);

return (
<nav class="bg-white shadow-md">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="flex justify-between h-16">
    <div class="flex-shrink-0 flex items-center">
      <a href="/" class="text-gray-800 font-bold text-lg">BestTechBlog</a>
    </div>
    <div class="hidden md:block">
      <div class="ml-10 flex items-center">
        <a href="/posts" class="mt-4 text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Posts</a>
        <a href="/about" class="mt-4 text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
      </div>
    </div>
    <div class="flex-1 flex items-center justify-end">
      <div class="w-full max-w-sm px-6">
        <label for="search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.559 14.742a8 8 0 111.414-1.414l3.85 3.85a1 1 0 01-1.414 1.414l-3.85-3.85zm-6.279-1.732a6 6 0 100-8.486 6 6 0 000 8.486z" clip-rule="evenodd" />
            </svg>
          </div>
          <input id="search" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out" type="search" placeholder="Search" />
        </div>
      </div>
    </div>
    {loggedIn 
    ? <>
    <Link href="/write" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-3 mb-3 mr-4">
        Write
    </Link> 
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-3 mb-3"
    onClick={()=>{setLoggedIn(false)}}>
        Log Out
    </button> 
    </>
    : <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-3 mb-3" 
    onClick={()=>{setLoggedIn(true)}}>
        Log In
    </button>
    }

    <div class="-mr-2 flex md:hidden">
      <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
<div class="md:hidden">
  <div class="px-2 pt-2 pb-3 sm:px-3">
    <a href="/posts" class="mt-4 md:mt-0 text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Posts</a>
    <a href="/about" class="mt-4 md:mt-0 text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About</a>
  </div>
  <div class="px-2 pt-2 pb-3 border-t border-gray-200">
    <div class="w-full max-w-sm px-6">
      <label for="search" class="sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.559 14.742a8 8 0 111.414-1.414l3.85 3.85a1 1 0 01-1.414 1.414l-3.85-3.85zm-6.279-1.732a6 6 0 100-8.486 6 6 0 000 8.486z" clip-rule="evenodd" />
          </svg>
        </div>
        <input id="search" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out" type="search" placeholder="Search" />
      </div>
    </div>
  </div>
</div>
</nav>
)
}