import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSection: 'home',
  projectFilter: 'All',
  selectedProject: null, // For project detail modal
  contactStatus: {
    status: 'idle', // 'idle' | 'sending' | 'success' | 'error'
    message: ''
  }
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setProjectFilter: (state, action) => {
      state.projectFilter = action.payload;
    },
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
    clearSelectedProject: (state) => {
      state.selectedProject = null;
    },
    setContactStatus: (state, action) => {
      state.contactStatus = action.payload;
    },
    resetContactStatus: (state) => {
      state.contactStatus = { status: 'idle', message: '' };
    }
  }
});

export const {
  setActiveSection,
  setProjectFilter,
  setSelectedProject,
  clearSelectedProject,
  setContactStatus,
  resetContactStatus
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
