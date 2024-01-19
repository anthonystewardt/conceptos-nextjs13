import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { init } from 'next/dist/compiled/webpack/webpack';

interface CounterI {
  count: number,
  isReady: boolean
}

// rxslice
const initialState: CounterI = {
  count: 10,
  isReady: false
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounter(state, action: PayloadAction<number>) {
      if(state.isReady){
        return;
      }
      state.count = action.payload;
      state.isReady = true;

    },
    addOne(state) {
      state.count += 1
    },
    substractOne(state) {
      if (state.count === 0) return;
      state.count -= 1
    },
    resetCounter(state, action: PayloadAction<number>) {
      if (action.payload < 0) {
        action.payload = 0;
      }

      state.count = action.payload;
    }
  }
});

export const { addOne, resetCounter, substractOne, initCounter} = counterSlice.actions

export default counterSlice.reducer