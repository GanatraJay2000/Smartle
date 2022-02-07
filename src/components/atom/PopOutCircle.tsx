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
    imageSize?: any;
}
const PopOutCircle = ({image, imageTop='3rem', imageLeft='0rem', imagePos='left top', circleBg='bg-accent-200', imageOverflow='hidden', borderColor='purple', imageSize='4'}:Props) => {      
    
    let style = {
        "--image-url": `url("${image}")`,
        "--image-top": `${imageTop}`,
        "--image-left": `${imageLeft}`,  
        "--image-pos": `${imagePos}`,
        "--image-overflow": `${imageOverflow}`,
        "--image-size": `${imageSize}`
    } as React.CSSProperties;        

    return (
        <div  style={style} className={`md:ml-10 ${borderColor==='blue' ? styles.contrastBorder : ''} ${styles.box} `}>
            <div className={`${styles.circle} rounded-full ${circleBg}`}></div>
            <div className={`rounded-b-full ${styles.image}`}></div>
        </div>
    )
}

export default PopOutCircle;
