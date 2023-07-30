import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import { useEffect } from 'react'

export const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }) => {

  useEffect(() => {
    if(Object.keys(activeSong).length > 0){
      if(activeSong.subtitle  && activeSong.title.length){
        document.title = `${activeSong.subtitle} - ${activeSong?.title}`
      } else {
        document.title = `${activeSong.artistName} - ${activeSong.name}`
      }
    }
    return () => {
      document.title = 'Spozam - listen to music for free'
    }
  }, [activeSong])
  

  return (
    isPlaying && activeSong?.title === song.title ?
      (<FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />)
      :
      (<FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />))
}
