import { ArrowBackOutlined } from '@mui/icons-material';
import './Watch.scss'
import vd from './video/Copyright Free Action Movie Clip __ creative common movie clip __ copyright free movie __.mp4';
const Watch = () => {
    
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className='video'
                autoPlay
                loop
                Progress
                controls
                src={vd}
            />
                
        </div>
    )
}
export default Watch;