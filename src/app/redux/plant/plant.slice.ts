import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PlantRepositoryImpl from "../../../data/repositories/PlantRepositoryImpl";
import Plant from "../../../domain/entities/Plant";
import PlantService from "../../../domain/cases/PlantService";
import type { RootState } from "../store";

interface PlantState {
  loading: boolean;
  plants: Array<Plant>;
}

const initialState: PlantState = {
  loading: false,
  plants: [],
};

export const fetchPlants = createAsyncThunk(
  "plantSlice/fetchPlants",
  async () => {
    const plantRepo = new PlantRepositoryImpl();
    const plantService = new PlantService(plantRepo);
    return plantService.GetPlants();
  }
);

export const plantSlice = createSlice({
  name: "plantSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlants.fulfilled, (state, action) => ({
      ...state,
      plants: action.payload,
      loading: false,
    }));
    builder.addCase(fetchPlants.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchPlants.rejected, (state) => ({
      ...state,
      loading: false,
    }));
  },
});

export const plants = (state: RootState) => state.plantSlice.plants;
export default plantSlice.reducer;
