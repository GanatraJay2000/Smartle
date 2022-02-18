import React from 'react';
import data from '../util/resources/files/legal.json';

const Title = ({ children }:{children:any}) => <h1 className='text-2xl md:text-3xl'>{children}</h1>
const LI = ({ children, sub }: { children: any, sub?: boolean }) => <li className={`text-sm ${sub?'mb-2':'mb-6'} text-justify text-slate-700`}>{children}</li>
const List = ({ children }: { children: any }) => <ol className={`mt-6 ml-3 md:ml-10 list-decimal`}>{children}</ol>
const ListBlock = ({ children }: { children: any }) => <div className='p-8 rounded-xl'>{children}</div>

const Legal = () => {
    return (
        <div className='my-10 md:w-11/12 mx-auto md:pr-6'>
            <h1 className="text-center text-4xl font-bold mb-10">Terms of Service</h1>
            {
                data.map((d, idx) => {
                    return (
                        <ListBlock key={idx}>
                            <Title>{d.title}</Title>
                            <List>
                                {d.list.map((li, key) => {
                                    return (
                                        <LI key={key}>
                                            <span dangerouslySetInnerHTML={{ __html: li }}></span>
                                            {
                                                d.subList?.some(e => e.item - 1 == key) && (<>
                                                    <List>
                                                        {d.subList.find(e => e.item - 1 == key)?.list?.map((l, lIdx) => {
                                                            return <LI sub={true} key={lIdx}
                                                            ><span dangerouslySetInnerHTML={{ __html: l }}></span></LI>
                                                        })}
                                                    </List>
                                                </>)
                                            }
                                        </LI>)
                                })}
                            </List>
                        </ListBlock>
                    );
                })
            }
        </div>
    )
}

export default Legal;