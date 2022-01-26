import React from 'react';
import styles from '../../styles/modules/popOutImage.module.scss';
interface Props{
    image: string;
    imageTop?: any;
    imageLeft?: any;
    imagePos?: any;    
}
const PopOutCircle = ({image, imageTop='3rem', imageLeft='0rem', imagePos='left top'}:Props) => {      
    
    let style = {
        "--image-url": `url("${image}")`,
        "--image-top": `${imageTop}`,
        "--image-left": `${imageLeft}`,  
        "--image-pos": `${imagePos}`,
    } as React.CSSProperties;    

    return (
        <div className={`ml-10 ${styles.box} `}>
            <div className={`${styles.circle} rounded-full -bottom-16 bg-accent-200`}></div>
            <div style={style} className={`rounded-b-full ${styles.image}`}></div>
        </div>
    )
}

export default PopOutCircle;
