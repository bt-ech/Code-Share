'use client'

import {useEffect, useState} from 'react'

interface Paste {
    _id: string;
    name_of_paste: string;
    owner_name: string;
}

export default function Recent(){
    const [recentPastes , setRecentPastes] = useState<Paste[]>([]);

    useEffect(() => {
        const fetchRecent = async () => {
            const res = await fetch("/api/paste");
            const data = await res.json();

            if(res.ok){
                setRecentPastes(data.data);
            }
        };

        fetchRecent();
    },[]);

    return (
        <div className="col-span-3 bg-white p-6 rounded-md shadow-sm">
            <h2 className="font-semibold mb-4">Recent Paste</h2>
            {recentPastes.map((paste) => (
                <div key={paste._id} className='p-3 bg-gray-50 rounded-lg shadow-sm mt-4'>    
                    <p className='font-semibold text-gray-800'>{paste.name_of_paste}</p>
                    <p className='text-sm text-gray-500'> by {paste.owner_name}</p>
                </div>
            ))}
        </div>
    )
}