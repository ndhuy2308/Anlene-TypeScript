import { getFirestore, getDocs, collection } from 'firebase/firestore'
import firebaseapp from '../FirebaseConfig'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTestPage, testDataType} from '../../store/testPageDataSlice'

function LoadData() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchTestPageData = async () => {
      try {
        const db = getFirestore(firebaseapp)
        const testPageRef = collection(db, 'testPage')
        const querySnapshot = await getDocs(testPageRef)
        const data = querySnapshot.docs.map((doc) => doc.data() as testDataType)
        dispatch(setTestPage(data)) // cập nhật state của slice
      } catch (error: any) {
        console.error(error.message)
      }
    }
    fetchTestPageData()
  }, [dispatch])

  return null // component này không cần render gì cả, do chỉ dùng để load dữ liệu vào Redux store
}

export default LoadData
