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
        <div className="list-container">
            <ul className="item-list">
                {celebrity.map((category) => (
                    <li className="list-item" key={category._id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Locations;