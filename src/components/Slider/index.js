import React from 'react'
import './style.css'
import axios from 'axios'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Rating from '../Rating/Rating';
import Genres from '../Genres/Genres';
import {Link} from 'react-router-dom'



function Slider() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const imageUrl = process.env.REACT_APP_IMAGE_BASE;
    const [upcomingMovies, setUpcomingMovies] = React.useState([])
    const [currentRating, setCurrentRating] = React.useState(0)
    const [index, setIndex] = React.useState(0);

    React.useEffect(
        ()=>{
            axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
            .then(res=>{
                console.log(res.data.results)
    
                setUpcomingMovies(res.data.results)
                setCurrentRating(res.data.results[index]?.vote_average / 2);
            })
            .catch(err => console.log(err))

        }, [index]
    )

    const sliderStyle={
        backgroundImage:`url("${imageUrl}${upcomingMovies[index]?.backdrop_path}")`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        height: "60vh",
        position: "relative"
    }

    const handleRight = ()=>{
        index === upcomingMovies.length - 1 ?
        setIndex(0)
        :
        setIndex(index+1);
    }

    const handleLeft = ()=>{
        index=== 0?
        setIndex(upcomingMovies.length - 1)
        :
        setIndex(index-1);
    }


  return (
    <div style = { sliderStyle} >
        <div className="slider-overlay"></div>
        <MdKeyboardArrowLeft  className="left-arrow"
                              onClick={handleLeft}  />
        <MdKeyboardArrowRight className="right-arrow" 
                              onClick={handleRight} />
        <div className="slider-movie-info">
            <h1>{upcomingMovies[index]?.original_title}</h1>
            <p>{upcomingMovies[index]?.overview?.slice(0, 120)}</p>
            <Genres movieGenres={upcomingMovies[index]?.genre_ids}/>
            <p>Release Date: {upcomingMovies[index]?.release_date}</p>
            <Rating stars={currentRating} />
            <Link to={`/moviedetails/${upcomingMovies[index]?.id}`}
                  className="movie-link">See Details</Link>
        </div>
        
    </div>
  )
}

export default Slider