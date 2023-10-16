//Redux implementation // installed extension for using rxslice
import { createSlice } from "@reduxjs/toolkit";

// const [username,setUserName]=useState(null) this is just to show what is state=action.payload is doing
const initialState = {
  userName: null, // its null for the first time and same for email
  userEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //created functions for handling user
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;
export const selectUserName = (state) => state.user.userName; // from user state grab the userName this will make the above code work
export const selectUserEmail = (state) => state.user.userEmail; // from user state grab the userName this will make the above code work

export default userSlice.reducer;
