import { createSlice } from '@reduxjs/toolkit'
const initialState = []
const value = 0
const cartSlice = createSlice({
    name: "cart",
    initialState,
    value,
    reducers:{
        add(state, action){
            const isExist = state.find((item)=> item.id === action.payload.id)
            if (isExist) {
                
                return state.map((item) => item.id===isExist.id ? action.payload : item)
            }
            else{

                state.push(action.payload)
            }
        },
        remove(state, action){
            return state.filter((item)=> item.id!==action.payload)
        },
        increment(state){
            state.value +=1
        },
        incrementValue(state,action){
            state.value +=action.payload
        }
    }

})

// Action creators are generated for each case reducer function
export const {add, remove, increment, incrementValue} = cartSlice.actions
export default cartSlice.reducer