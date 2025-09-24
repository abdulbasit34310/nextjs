"use client";

import { User, Users, Star, TrendingUp } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const metadata = {
    title: 'My Blog',
    description: '...',
    authors: [
        { name: "Abdul Basit" },
        { name: "Urwah Khan", url: "nextjs.com" },
    ],
    keywords: ["nextjs", "reactjs", "fullstack"],
}

const Service = () => {
    const [userInfo, setUserInfo] = useState({});
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    // Handle case where no name is provided
    if (!userName) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            No Name Provided
                        </h1>
                        <p className="text-gray-600">
                            Please add ?name=yourname to the URL
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(() => {
        const revealUserGender = async () => {
            const res = await fetch(`https://api.genderize.io/?name=${userName}`);
            const userData = await res.json();
            //   console.log(userData);
            setUserInfo(userData);
        };
        revealUserGender();
    }, []);

    if (!userInfo.gender) return null;

    const isMale = userInfo.gender === "male";
    const confidencePercentage = userInfo.probability * 100;

    return (
        <div>
            <h1>Service Page</h1>
        </div>
    );
};

export default Service;