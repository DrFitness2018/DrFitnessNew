/*eslint-disable*/
import { exercisesConst,deleteCollection,insertCollection,updateCollection,viewCollection, CurrentUser } from "../constant/exerciseInnerConst";
const initialState = {
    reset:1,
    insert:[],
    update:[],
    delete:[],
    view:[],
    crruser:''
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
        case CurrentUser.CURRENT_USER:
            return {...state,crruser:payload}
        default:
            return state            
    }
}
export default ExercisesReducer