import { combineReducers } from '@reduxjs/toolkit'
import testResultReducer, { TestResultState } from './testResultSlice'
import loadDataReducer, { LoadDataState } from './testPageDataSlice'

interface RootState {
  testResult: TestResultState
  testPageData: LoadDataState
}

const rootReducer = combineReducers<RootState>({
  testResult: testResultReducer,
  testPageData: loadDataReducer
})

export default rootReducer
