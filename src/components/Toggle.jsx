import React, { useState } from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../features/toggle';
const Toggle = () => {
    function handleClick() {
        dispatch(toggleTheme());
        if (isDark === "dracula") {
            setDark("winter")
        }
        else {
            setDark("dracula")
        }
    }
    const dispatch = useDispatch();
    const [isDark, setDark] = useState(localStorage.getItem('theme'))
    return (
        <section className='mt-5 absolute right-2'>
            <button type='button' onClick={handleClick} className='bg-slate-400 bg-transparent h-10 w-10 text-4xl'>
                {isDark === "dracula" ? <BsFillSunFill /> : <BsFillMoonFill />}
            </button>
        </section>
    )
}
export default Toggle