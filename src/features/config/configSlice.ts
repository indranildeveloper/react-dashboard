import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import configService from "./configSetvice";

interface InitialStateInterface {
  config: {
    id: number;
    logo: string;
    mainColor: string;
    hasUserSection: boolean;
  };
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: InitialStateInterface = {
  config: {
    id: 0,
    logo: "",
    mainColor: "",
    hasUserSection: true,
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Config
export const getConfig = createAsyncThunk(
  "product/getConfig",
  async (_, thunkAPI) => {
    try {
      return await configService.getConfig();
    } catch (e) {
      const error = e as AxiosError;

      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const configSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset: (_state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConfig.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getConfig.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.config = action.payload;
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(getConfig.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = configSlice.actions;
export default configSlice.reducer;
