import React from 'react';

import dbConnect from '@/app/db/mongodb';
import celebritySchema from '@/models/celebrityModels';

async function getCelebrity() {
    await dbConnect();
    const data = await celebritySchema.find({});
    return JSON.parse(JSON.stringify(data));
}

const Locations = async () => {
    const celebrity = await getCelebrity();
    return (
        <div>
            <h1>celebrity</h1>
            <ul>
                {celebrity.map((category) => (
                    <li key={category._id}>{category.name} {category.category}</li>
                ))}
            </ul>
        </div>
    );
};

export default Locations;