
import { useDispatch } from "react-redux"
import { fetchRegister } from "./userSlice"


export const useUpdateProfile = () => {
    const dispatch = useDispatch()
  
    const onSubmit = async (data) => {
      console.log('dataForm....',data)
     const resultAction = await dispatch(fetchRegister(data))
    }
  
    return [onSubmit]
  }
  