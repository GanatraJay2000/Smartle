import React from 'react';
import styles from '../../styles/modules/popOutImage.module.scss';
interface Props{
    image: string;
    imageTop?: any;
    imageLeft?: any;
    imagePos?: any; 
    circleBg?: any;
    imageOverflow?: any;
    borderColor?: any;
}
const PopOutCircle = ({image, imageTop='3rem', imageLeft='0rem', imagePos='left top', circleBg='bg-accent-200', imageOverflow='hidden', borderColor='purple'}:Props) => {      
    
    let style = {
        "--image-url": `url("${image}")`,
        "--image-top": `${imageTop}`,
        "--image-left": `${imageLeft}`,  
        "--image-pos": `${imagePos}`,
        "--image-overflow": `${imageOverflow}`,
    } as React.CSSProperties;    

    return (
        <div className={`ml-10 ${borderColor=='blue' ? styles.contrastBorder : ''} ${styles.box} `}>
            <div className={`${styles.circle} rounded-full -bottom-16 ${circleBg}`}></div>
            <div style={style} className={`rounded-b-full ${styles.image}`}></div>
        </div>
    )
}

export default PopOutCircle;
