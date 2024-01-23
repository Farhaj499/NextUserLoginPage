"use client";

import axios from "axios";
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import React from "react";

export default function profile(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const logout = () => {
        try {
            const response = axios.get('api/users/logout');
            router.push('/login');

        } catch (error:any) {
            toast.error(error.message)
        }
    }


    return(
        <div className="flex flex-col min-h-screen flex flex-col items-center justify-center bg-slate-100 py-2">
            <h1 className="text-black font-bold text-xl">Profile</h1>
            <button 
            onClick={logout} 
            className="text-xl p-2 px-12 border border-green-300 rounded-md mb-4 focus:outline-none focus:border-green-700 text-white bg-green-600 hover:bg-green-500"
            >
                Logout
            </button>
        </div>
    )
}

