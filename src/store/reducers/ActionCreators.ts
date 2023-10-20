import axios from "axios";
import { IUser } from "../../models/IUser";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return responce.data;
        } catch(e) {
            return thunkAPI.rejectWithValue('Не удалось получить данные');
        }
    }
)