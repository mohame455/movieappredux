import React from 'react';
import { connect } from 'react-redux';
const Description = (props) => {
    return (<div>
        {console.log(props)}
        {console.log(props.movieList)}
        {props.movieList.filter(el=>el.id==props.match.params.id).map(el=><div style={{color:"white"}}>{el.description}</div>)}
        
        </div>  );
}
const mapStateToProps = (state) => {
    return {
        movieList: state.movieList,
       
    }
}
 
export default connect(mapStateToProps,null)(Description);