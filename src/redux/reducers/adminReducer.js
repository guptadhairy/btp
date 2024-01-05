import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  message: null,
  error: null,
};

export const adminReducer = createReducer(initialState, (builder) => {
  builder
  .addCase("getAllUsersRequest", (state) => {
    state.loading = true;
  })
  .addCase("getAllUsersSuccess", (state, action) => {
    state.loading = false;
    state.users = action.payload;
  })
  .addCase("getAllUsersFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  })
    .addCase("createCourseRequest", (state) => {
      state.loading = true;
    })
    .addCase("createCourseSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("createCourseFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteCourseRequest", (state) => {
       state.loading = true;
     })
     .addCase("deleteCourseSuccess", (state, action) => {
       state.loading = false;
       state.message = action.payload;
     })
     .addCase("deleteCourseFail", (state, action) => {
       state.loading = false;
       state.error = action.payload;
     })
     .addCase("updateUserRoleRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateUserRoleSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateUserRoleFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteUserSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteUserFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
     .addCase("clearError", (state) => {
       state.error = null;
     })
     .addCase("clearMessage", (state) => {
       state.message = null;
     });
});

