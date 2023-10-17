import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const themes = {
    winter: 'winter',
    dracula: 'dracula',
};

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme') || themes.winter;
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
};
console.log(import.meta.env)
const initialState = {
    theme: getThemeFromLocalStorage(),
    images: [],
    searchTerm: 'eggs'
}
export const getImages = createAsyncThunk('get/images', async (searchTerm, thunkAPI) => {
    // console.log(searchTerm);/
    try {
        const resp = await axios.get(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_ID}&query=${searchTerm}`
        );
        return resp.data.results;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue('something went wrong');
    }
})
export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            const { dracula, winter } = themes;
            state.theme = state.theme === dracula ? winter : dracula;
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme);
        },
        setSearch: (state, { payload }) => {
            console.log(`state changed to ${payload}`)
            state.searchTerm = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getImages.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.images = action.payload;
        }).addCase(getImages.rejected, (state, action) => {
            console.log(action);
            console.log("This is an err")
        })
    }
})

export const { toggleTheme, setImages, setSearch } = toggleSlice.actions
export default toggleSlice.reducer