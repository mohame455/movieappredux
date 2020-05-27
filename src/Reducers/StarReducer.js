const init= [{ icon: "⭐", id: Math.random(), isColored: false }, { icon: "⭐", id: Math.random(), isColored: false }, { icon: "⭐", id: Math.random(), isColored: false },
{ icon: "⭐", id: Math.random(), isColored: false }, { icon: "⭐", id: Math.random(), isColored: false }]
const StarReducer = (state=init,action) => {
    if (action.type==='COLOR'){
        return state.map(el=>(el.id===action.payload)?{id:el.id,icon:el.icon,isColored:!el.isColored}:el)
    }
    return state
}
 
export default StarReducer;