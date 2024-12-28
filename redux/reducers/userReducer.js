import { createSlice } from '@reduxjs/toolkit'
import { getUserProfile, userLogout } from '../api/userApi';
import { clearLocalStorage, setLocalStorage } from '../../helpers/localStorageMethods';

const initialUser = {
  name: "",
  userId: '',
  role: '',
  auth: false
}

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    login: (state, action) => {
      const { token,role } = action.payload;
      setLocalStorage('appUserToken', token);
      setLocalStorage('appUserRole', role);
      state.auth = true;
    },
    logout: (state) => {
      clearLocalStorage('appUserToken');
      clearLocalStorage('appUserRole');
      state = { ...initialUser, auth: false, role: '' };
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state = { ...initialUser, auth: action.payload.auth };
      return state;
    });

    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      const { auth, data, statusCode } = action.payload;
      if (statusCode === 401) {
        clearLocalStorage('appUserToken');
        clearLocalStorage('appUserRole');
        state = { ...initialUser, auth: false };
        return state;
      }else {
        if (auth) {
          const { userId, ...rest } = data;
          return { ...state, ...rest, userId: userId, auth: auth }
        } else return { ...state, auth: auth }
      }
    });
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;