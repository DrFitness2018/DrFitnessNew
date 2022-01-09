/*eslint-disable*/
import { exercisesConst,deleteCollection,insertCollection,updateCollection,viewCollection } from "../constant/exerciseInnerConst";
const initialState = {
    reset:1,
    insert:[],
    update:[],
    delete:[],
    view:[]
}
const ExercisesReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case exercisesConst.RESET_DAY:
            return {...state,reset:payload}
        case deleteCollection.DELETE_COLLECTION:
            return {...state,delete:payload}
        case insertCollection.INSERT_COLLECTION:
            return {...state,insert:payload}
        case updateCollection.UPDATE_COLLECTION:
            return {...state,update:payload}
        case viewCollection.VIEW_COLLECTION:
            return {...state,view:payload}
        default:
            return state            
    }
}
export default ExercisesReducer