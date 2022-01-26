import React from 'react';
interface Props{
    stats: any;
    text: any;
}
const StatsCard = ({ stats, text }: Props) => {
    return (<>        
        <div className="mt-32 mb-20 py-5 bg-accent-200 w-full h-40 rounded-3xl shadow-2xl flex items-center justify-center gap-6">            
            {
                text.length > 0 && text.map((item: { top: string; bottom: string; end: string; start: string; }, itemIdx: number) => {                    
                    return (
                        <React.Fragment key={itemIdx}>
                            <div className="w-40 text-center mt-2">
                                <p>{item.top ?? '\u00A0' }</p>
                                <div className="font-black text-5xl text-center text-color-400">
                                    <span className='text-3xl'>{item.start ?? ""}</span>
                                    {stats[itemIdx]}
                                    <span className='text-3xl'>{item.end ?? ""}</span></div>
                                <p>{item.bottom ?? '\u00A0' }</p>
                            </div>
                            {
                                itemIdx < text.length - 1 && (<div style={{ width: '0.5px' }} className="h-2/3 bg-slate-400"></div>)
                            }
                        </React.Fragment>
                    )
                })
            }
        </div>
    </>);
}

export default StatsCard;

