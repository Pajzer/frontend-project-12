import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL, handleApiError } from '../utils/routes';

export const fetchChannelsByToken = createAsyncThunk(
  'channels/fetchChannelsByToken',
  async (token) => {
    const response = await axios.get(`${BASE_API_URL}/channels`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

export const createChannelsByToken = createAsyncThunk(
  'channels/createChannelsByToken',
  async ({ token, newChannel }) => {
    const response = await axios.post(`${BASE_API_URL}/channels`, newChannel, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

export const removeChannelById = createAsyncThunk(
  'channels/removeChannelById',
  async ({ token, id }) => {
    const response = await axios.delete(`${BASE_API_URL}/channels/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

export const renameChannelById = createAsyncThunk(
  'channels/renameChannelById',
  async ({ token, id, editedChannel }) => {
    const response = await axios.patch(
      `${BASE_API_URL}/channels/${id}`,
      editedChannel,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  }
);

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    channelsData: [],
    activeChannelId: '1',
    loadingStatus: 'idle',
    error: null,
  },
  reducers: {
    selectActiveTab: (state, { payload }) => {
      state.activeChannelId = payload;
    },
    addChannel: (state, { payload }) => {
      state.channelsData.push(payload);
    },
    removeChannel: (state, { payload }) => {
      state.channelsData = state.channelsData.filter((channel) => channel.id !== payload.id);
      if (state.activeChannelId === payload.id) {
        state.activeChannelId = '1';
      }
    },
    renameChannel: (state, { payload }) => {
      const index = state.channelsData.findIndex((channel) => channel.id === payload.id);
      state.channelsData[index] = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelsByToken.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchChannelsByToken.fulfilled, (state, { payload }) => {
        state.channelsData = payload;
        state.loadingStatus = 'idle';
        state.error = null;

      })
      .addCase(fetchChannelsByToken.rejected, (state, action) => {
        state.loadingStatus = 'rejected';
        state.error = action.error;
        handleApiError(action.error);
      })
      .addCase(createChannelsByToken.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(createChannelsByToken.fulfilled, (state, { payload }) => {
        state.activeChannelId = payload.id;
        state.loadingStatus = 'idle';
        state.error = null;
      })
      .addCase(createChannelsByToken.rejected, (state, action) => {
        state.loadingStatus = 'rejected';
        state.error = action.error;
        handleApiError(action.error);
      })
      .addCase(removeChannelById.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(removeChannelById.fulfilled, (state, { payload }) => {
        state.channelsData = state.channelsData.filter((channel) => channel.id !== payload.id);
        if (state.activeChannelId === payload.id) {
          state.activeChannelId = '1';
        }
        state.loadingStatus = 'idle';
        state.error = null;
      })
      .addCase(removeChannelById.rejected, (state, action) => {
        state.loadingStatus = 'rejected';
        state.error = action.error;
        handleApiError(action.error);
      })
      .addCase(renameChannelById.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(renameChannelById.fulfilled, (state, { payload }) => {
        const index = state.channelsData.findIndex((channel) => channel.id === payload.id);
        state.channelsData[index] = payload;
        state.loadingStatus = 'idle';
        state.error = null;
      })
      .addCase(renameChannelById.rejected, (state, action) => {
        state.loadingStatus = 'rejected';
        state.error = action.error.message;
        handleApiError(action.error);
      });
  },
});

export default channelsSlice.reducer;
export const { selectActiveTab, addChannel, removeChannel, renameChannel } = channelsSlice.actions;