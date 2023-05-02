import { combineReducers } from '@reduxjs/toolkit'
import testResultReducer, { TestResultState } from './testResultSlice'

interface RootState {
  testResult: TestResultState
}

const rootReducer = combineReducers<RootState>({
  testResult: testResultReducer
})

export default rootReducer
