import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div>
            <Image
                src="/thapa.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                quality={75}
                priority={false}   
                placeholder="empty"
                blurDataURL=""                      
            />
        </div>
    );
};

export default About; 