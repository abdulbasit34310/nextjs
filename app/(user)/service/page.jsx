import React from 'react';

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
    return (
        <div>
            <h1>Service Page</h1>
        </div>
    );
};

export default Service;