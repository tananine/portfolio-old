import { createSlice } from '@reduxjs/toolkit'

const initialNavbar = {
  menu: 'Home',
}

const navbarSlice = createSlice({
  name: 'navbarChange',
  initialState: initialNavbar,
  reducers: {
    home(state) {
      state.menu = 'Home'
    },
    about(state) {
      state.menu = 'About'
    },
    skill(state) {
      state.menu = 'Skill'
    },
    education(state) {
      state.menu = 'Education'
    },
    project(state) {
      state.menu = 'Project'
    },
    experience(state) {
      state.menu = 'Experience'
    },
    contact(state) {
      state.menu = 'Contact'
    },
  },
})

export const navbarActions = navbarSlice.actions

export default navbarSlice.reducer
