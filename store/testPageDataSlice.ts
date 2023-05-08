import { createSlice } from '@reduxjs/toolkit'

export interface testDataType {
  Title: string
  Content: string
  modalText: string
}

export interface LoadDataState {
  testPageData: testDataType[]
}

const initialState: LoadDataState = {
  testPageData: []
}

export const loadDataSlice = createSlice({
  name: 'loadData',
  initialState,
  reducers: {
    setTestPage: (state, action) => {
      state.testPageData = action.payload
    }
  }
})

export const { setTestPage } = loadDataSlice.actions
export default loadDataSlice.reducer
