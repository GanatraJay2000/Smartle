import React from 'react';

interface Props{
    items: string;
}
const Socials = ({ items }: Props) => {
    let arr = items.split(",");    
    return (
        <div className="flex">            
            <i className="text-xl mx-4 bi bi-facebook"></i>
            <i className="text-xl mx-4 bi bi-instagram"></i>
            <i className="text-xl mx-4 bi bi-twitter"></i>
            <i className="text-xl mx-4 bi bi-linkedin"></i>
        </div>
    );
}

export default Socials;
