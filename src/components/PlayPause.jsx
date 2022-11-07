import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

export const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }) => (
  isPlaying && activeSong?.title === song.title ? 
  (<FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />) 
  : 
  (<FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />))
