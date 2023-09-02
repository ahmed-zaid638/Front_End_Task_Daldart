import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEntity: any = createAsyncThunk( "entities/fetchEntity", async (id, thunkAPI) => {
  const url = `http://localhost:4000/data/${id}`;
    const results = await fetch(url);
    const data = await results.json();
    return data;
  }
)



