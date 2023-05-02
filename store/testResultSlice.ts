import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TestResultState {
  Co: number
  Xuong: number
  Khop: number
  DeKhang: number
  KetQua: number
}

const initialState: TestResultState = {
  Co: -1,
  Xuong: -1,
  Khop: -1,
  DeKhang: -1,
  KetQua: 0
}

const testResultSlice = createSlice({
  name: 'testResult',
  initialState,
  reducers: {
    updateTestResultField(state, action: PayloadAction<{ fieldName: keyof TestResultState; payload: any }>) {
      const { fieldName, payload } = action.payload
      return {
        ...state,
        [fieldName]: payload
      }
    },
    resetResults(state) {
      state.Co = -1
      state.Xuong = -1
      state.Khop = -1
      state.DeKhang = -1
    }
  }
})

export const { updateTestResultField, resetResults } = testResultSlice.actions

export default testResultSlice.reducer
