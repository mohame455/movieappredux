import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const MovieList = (props) => {
    return (<div className='moviesCard'>
        {props.movieList.filter(el => el.title.toUpperCase().includes(props.Search.toUpperCase())).filter(el => el.rating >= props.Star.filter(el => el.isColored === true).length).map((el, i) => <div key={i} className='film'>
            <div className='starColored'>{''.padEnd(el.rating, '⭐')}</div>
            <img className='image' src={el.src} alt='' />
            <h3>{el.title}</h3>
            <div className="btns">
                <Link to={`/movie/${el.id}`} ><button className='btn-descrip'>Movie Description</button></Link>
                <div className="btn-edit-remove">
                    <button className="button" onClick={() => props.Edit(el.id)}>Edit</button>
                    <button className="button" onClick={() => props.Remove(el.id)}>Remove</button>
                </div>
            </div>
        </div>)}
        <div className="add-movie">
            <p className='plus' onClick={() => props.addMovie()}>+</p>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movieList,
        Search: state.InputVal,
        Star: state.star
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMovie: () => {
            let movieTitle = prompt('Please tap the movie title')
            let movieimg = prompt('Please enter the image url')
            let movierate = prompt('Please enter the movie rate')
            let moviedescription = prompt('Please enter the movie description')
            dispatch({ type: "ADD_MOVIE", payload: { rating: movierate, src: movieimg, title: movieTitle, description: moviedescription,id:Math.random() } })
        },
        Edit: (id) => {
            let movieTitle = prompt('Please tap the movie title')
            let movieimg = prompt('Please enter the image url')
            let movierate = prompt('Please enter the movie rate')
            let moviedescription = prompt('Please enter the movie description')
            dispatch({ type: "EDIT", payload: { rating: movierate, src: movieimg, title: movieTitle, id: id, description: moviedescription } })
        },
        Remove: (id) => dispatch({ type: "REMOVE", payload: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);