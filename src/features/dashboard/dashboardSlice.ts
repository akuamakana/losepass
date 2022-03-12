import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from '../../types/User';

export interface DashboardState {
  users: User[];
  filteredUsers: User[];
  pageLimit: number;
  currentPage: number;
  totalUsers: number;
  totalPages: number;
  filter: string;
  user: User | null;
}

const initialState: DashboardState = {
  users: [],
  filteredUsers: [],
  totalUsers: 0,
  totalPages: 0,
  currentPage: 0,
  pageLimit: 10,
  filter: '',
  user: null,
};

export const fetchUsersAsync = createAsyncThunk('dashboard/fetchUsers', async () => {
  const response = await fetch('https://randomuser.me/api/?results=100&noinfo');
  return response.json();
});

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    incrementPage: (state) => {
      if (state.currentPage < state.totalPages - 1) {
        state.currentPage++;
      }
    },
    decrementPage: (state) => {
      if (state.currentPage > 0) {
        state.currentPage--;
      }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.currentPage = 0;
      state.filter = action.payload;
      state.filteredUsers = state.users.filter((user) => {
        const fullName = user.name.first + ' ' + user.name.last;
        return fullName.toLowerCase().includes(state.filter.toLowerCase());
      });
      state.totalUsers = state.filteredUsers.length;
      state.totalPages = Math.ceil(state.totalUsers / state.pageLimit);
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.filter = '';
      state.user = action.payload;
    },
    setPageLimit: (state, action: PayloadAction<number>) => {
      state.pageLimit = action.payload;
      state.currentPage = 0;
      state.totalPages = Math.ceil(state.totalUsers / state.pageLimit);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.users = [];
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.users = action.payload.results;
        state.totalUsers = action.payload.results.length;
        state.totalPages = Math.ceil(state.totalUsers / state.pageLimit);
      });
  },
});

export const { incrementPage, decrementPage, setFilter, setUser, setPageLimit } = dashboardSlice.actions;

export const selectUsersCount = (state: RootState) => state.dashboard.totalUsers;

export const selectPaginatedUsers = (state: RootState) => {
  const { users, currentPage, pageLimit, filteredUsers, filter } = state.dashboard;
  const startIndex = currentPage === 0 ? 0 : currentPage * pageLimit;
  const endIndex = startIndex + pageLimit;
  return filter ? filteredUsers.slice(startIndex, endIndex) : users.slice(startIndex, endIndex);
};

export const selectPages = (state: RootState) => [state.dashboard.currentPage, state.dashboard.totalPages, state.dashboard.pageLimit];

export const selectUser = (state: RootState) => state.dashboard.user;

export const selectFilter = (state: RootState) => state.dashboard.filter;

export default dashboardSlice.reducer;
