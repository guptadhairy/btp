import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  courses: [],
  error: null,
};

const courseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("allCoursesRequest", (state) => {
      state.loading = true;
    })
    .addCase("allCoursesSuccess", (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    })
    .addCase("allCoursesFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default courseReducer;
