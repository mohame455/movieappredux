const SetInputReducer = (state='',action) => {
if (action.type==="CHANGE"){
    return action.payload
}else{return state}
}
 
export default SetInputReducer;