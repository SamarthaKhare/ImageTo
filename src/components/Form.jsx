import React, { useState } from 'react'
import axios from 'axios'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch, getImages } from '../features/toggle'

const Form = () => {
    // const searchTerm=useSelector((store)=>store.allStates.searchTerm)
    const dispatch = useDispatch()
    function handleSubmit(e) {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if (!searchValue) return;
        dispatch(setSearch(searchValue));
        dispatch(getImages(searchValue));
    }
    return (
        <section className='mt-20 flex flex-col items-center justify-center text-center ' >
            <h1 className='text-4xl font-serif font-bold'>Unsplash Images</h1>
            <form className='flex  w-full items-center justify-center mt-4' onSubmit={handleSubmit} >
                <input type="text" name='search' placeholder='Search...' className='w-80 sm:w-96 border-2 border-blue-400 h-7 rounded-sm p-4 ' />
                <button type='submit' className='text-2xl text-blue-500 font-bold px-1 '><BsSearch /></button>
            </form>
        </section >
    )
}

export default Form
