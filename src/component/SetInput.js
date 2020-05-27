import React, { Component } from 'react';
import { connect } from 'react-redux'
class SetInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (<div className='section1'>
            <div className='search'>
                <input type='text' placeholder='Search' className='input' onChange={(e) => this.props.SetInput(e.target.value)} />
                <button className='btn'>Search</button>
            </div>
            <div className='rating'>
                <p className='text'>Minimum rating</p>
                {this.props.Star.map(el => <span onClick={() => this.props.colored(el.id)} className={(el.isColored)?'starColored':'star'}>{el.icon}</span>)}
            </div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SetInput: (Input) => dispatch({ type: "CHANGE", payload: Input }),
        colored: (id) => dispatch({ type: "COLOR", payload: id })
    }
}

const mapStateToProps = (state) => {
    return {
        Search: state.InputVal,
        Star:state.star
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetInput);