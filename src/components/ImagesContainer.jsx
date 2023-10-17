import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImages } from '../features/toggle'
const ImagesContainer = () => {
    const dispatch = useDispatch()
    const { images } = useSelector((store) => store.allStates)

    console.log(images);
    return (
        <div className='gap-x-4  w-11/12 max-w-7xl mx-auto mt-5 grid grid-cols-1 justify-items-center gap-y-2 
        md:grid-cols-2 lg:grid-cols-3'>
            {images.map((item) => {
                const url = item?.urls?.regular;
                return (
                    <img
                        src={url}
                        key={item.id}
                        alt={item.alt_description}
                        className='w-full h-44 m-2 object-cover'
                    ></img>
                );
            })}
        </div>
    )
}

export default ImagesContainer
