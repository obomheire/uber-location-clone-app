import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

// Create a reducer for the actions to save information to the state

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    // setOrigin action
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    // setDestination action
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    // setTravelTimeInformation action
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

//Selectors (use to grap information from the state)

export const selectOrigin = state => state.nav.origin
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer