"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import toast from 'react-hot-toast';

export default function Signup(){
    const router = useRouter();
    const [user, setUser] = useState({
        userName:"",
        email: "",
        password: ""
    })

    const onSignup =async ()=>{}

    return(
        <div className="flex flex-col min-h-screen flex flex-col items-center justify-center bg-slate-100 py-2">
            <h1 className="flex items-center mb-6 justify-center text-4xl font-bold text-black">
                Facebook
            </h1>
            <input
                className="text-lg p-2 border border-slate-300 rounded-md mb-4 focus:outline-none focus:border-blue-700 text-black"
                id = "userName"
                type="text"
                value={user.userName}
                onChange={e => setUser({...user, userName:e.target.value})}
                placeholder="UserName"
            />
            <input
                className="text-lg p-2 border border-slate-300 rounded-md mb-4 focus:outline-none focus:border-blue-700 text-black"
                id = "email"
                type="text"
                value={user.email}
                onChange={e => setUser({...user, email:e.target.value})}
                placeholder="Email address"
            />
            <input
                className="text-lg p-2 border border-slate-300 rounded-md mb-4 focus:outline-none focus:border-blue-700 text-black"
                id = "password"
                type="password"
                value={user.password}
                onChange={e => setUser({...user, password:e.target.value})}
                placeholder="Password"
            />
            <button 
            onClick={onSignup} 
            className="text-xl p-2 px-[114px] border border-green-300 rounded-md mb-4 focus:outline-none focus:border-green-700 text-white bg-green-600 hover:bg-green-500"
            >
                Sign up
            </button>
            <Link
                href="/login"
                className="text-xl p-2 border ps-4 pe-4 border-blue-300 rounded-md mb-4 focus:outline-none focus:border-blue-700 text-white bg-blue-600 hover:bg-blue-500">
                Login
            </Link>

        </div>
    );
}











