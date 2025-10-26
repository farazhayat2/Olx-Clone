import { createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Base URL of your deployed backend
const BASE_URL = "https://backend-swart-ten-98.vercel.app";

export const registerUser = createAsyncThunk('registerUser', async (data, { rejectWithValue }) => {
  try {
    console.log("Register data:", data);
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message || "Something went wrong");
  }
});


export const loginUser = createAsyncThunk('loginUser', async (data, { rejectWithValue }) => {
  try {
    console.log("Login data:", data);
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message || "Network Error");
  }
});


export const logoutUser = createAsyncThunk('logoutUser', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message || "Network Error");
  }
});
