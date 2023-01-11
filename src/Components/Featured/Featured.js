import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'
import './Featured.scss'

const Featured = ({type}) => {
return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movie" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>

                </select>
            </div>
        )}
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/083b0034-e11a-432d-9a74-0b6b0eec0e39/EG-en-20221219-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='' /> 
        <div className='info'>

            <div className='desc'>
                <image src='' alt='' />
                <span className='desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </span>
            </div>
            <div className='buttons'>
                <button className='play'>
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className='infoBtn'>
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
        
        
    </div>
)
}

export default Featured