import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchEntity: any = createAsyncThunk( "entities/fetchEntity", async (id, thunkAPI) => {
  const url = `https://64f35917edfa0459f6c683a4.mockapi.io/Entities/${id}`;
    const results = await fetch(url);
    const data = await results.json();
    return data;
  }
)



