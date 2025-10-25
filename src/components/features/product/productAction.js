import { createAsyncThunk } from "@reduxjs/toolkit";

// GET all products
export const getAllProducts = createAsyncThunk(
  "getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'http://localhost:3001/user/product'
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// CREATE product
export const createProduct = createAsyncThunk(
  "createProduct",
  async (data, { rejectWithValue }) => {
    try {
      console.log("Sending product data:", data);

      const response = await fetch(
        'http://localhost:3001/user/product',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
