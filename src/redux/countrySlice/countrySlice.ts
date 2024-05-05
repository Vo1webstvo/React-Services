import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IData } from '../../interface/dataInterface';
import { transformDataResponse } from '../../utils/transformDataResponse';

export const getCountries = createAsyncThunk('country/getCountries', async (navigate: string) => {
  const res = await axios.get(`http://127.0.0.1:8000/api/tables/${navigate}/`);
  return transformDataResponse(res.data);
});

type TinitialState = {
  countries: IData[];
  page: number;
  soloCompany: IData | null;
  startIndex: number;
  endIndex: number;
  totalPages: number;
  status: 'loading' | 'success' | 'error';
};

const initialState: TinitialState = {
  countries: [],
  soloCompany: null,
  page: 1,
  startIndex: 0,
  endIndex: 15,
  totalPages: 0,
  status: 'loading',
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    nextPage: (state) => {
      if (state.page < state.totalPages) {
        state.page += 1;
        state.startIndex += 15;
        state.endIndex += 15;
      }
    },
    prevPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
        state.startIndex -= 15;
        state.endIndex -= 15;
      }
    },
    totalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setSelectedCompany: (state, action: PayloadAction<IData | null>) => {
      state.soloCompany = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.status = 'success';
      state.totalPages = Math.ceil(state.countries.length / 15);
    });
    builder.addCase(getCountries.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export const { nextPage, prevPage, totalPages, setSelectedCompany } = countrySlice.actions;
export default countrySlice.reducer;
