import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import ListItem from '../ListItem/ListItem'
import './List.scss'

const List = () => {
    const [sliderNumber, setSliderNumber] = useState(0);
    const [isMoved, setIsMoved]=useState(false)
    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x -50 
        if (direction === "left" && sliderNumber > 0) {
            setSliderNumber(sliderNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && sliderNumber < 4) {
            setSliderNumber(sliderNumber + 1 )
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        console.log(distance)
    }
return (
    <div className='list'>
        <div className="itemtitle">Continue to watch</div>
        <div className="wrapper">
            <ArrowBackIosNewOutlined className='sliderArrow left' onClick={() => handleClick("left")}
                style={{display:!isMoved && 'none'}}
            />
            <div className="container" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
)
}

export default List