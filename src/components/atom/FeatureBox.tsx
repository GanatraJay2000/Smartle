import React from 'react'

interface Props{
    pos: string;
    img: any;
    title: any;
    desc: any;
    color?: string;
}
const FeatureBox = ({ pos, img, title, desc, color='bg-accent-200 ' }:Props) => {
    return (
        <div className={`absolute text-slate-900 rounded-3xl shadow-2xl z-20 ${color} ${pos} w-56 h-80 `}>
            <img className="pt-5 w-16 pb-2 mx-auto" src={img} alt="" />
            <div className="text-2xl text-center font-bold"
                dangerouslySetInnerHTML={{ __html: title }}
            >
            </div>
            <p className="p-4 text-center"
                dangerouslySetInnerHTML={{ __html: desc }}
            >
            </p>
        </div>
    )
}

export default FeatureBox