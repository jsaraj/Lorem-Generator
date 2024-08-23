import React, { useState } from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import data from './Data'

function LoremIpsumGenerator() {
    const [count, setCount] = useState(1);
    const [text, setText] = useState([]);
    const countHandler = () => {
        let amount = parseInt(count);
        setText(data.slice(0, amount));
    }

    return (
        <>
            <div className='flex justify-center items-center h-screen '>
                <div className='w-7/12 bg-orange-400 rounded-xl py-6 px-10'>

                    <div className='flex justify-center border-b-2 mb-5 pb-3 border-gray-300'>
                        <h2 className='text-2xl'>Wellcome to the Lorem Ipsum Generator</h2>
                    </div>

                    <div className='flex justify-start pb-5'>
                        <label htmlFor='paraghraph' className='pr-2 text-lg font-semibold' >Number of paragraphs : (Max: 3) </label>
                        <input type='number' name='nParaghraph' min={1} max={3} value={count} onChange={(e) => { setCount(e.target.value) }} className='mr-5 rounded-lg py-1 px-3'></input>
                        <BsArrowRightCircleFill size={30} className='cursor-pointer' onClick={countHandler} />
                    </div>

                    <div className=''>
                        {
                            text.map((item, index) => {
                                return <p className='text-justify pb-10' key={index}>{item}</p>
                            })
                        }

                    </div>
                </div>

            </div>



        </>
    )
}

export default LoremIpsumGenerator

