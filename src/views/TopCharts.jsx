import axios from 'axios'
import { useSelector } from 'react-redux'
import { Error, Loader, SongPreview } from '../cmps'
import { useGetTopChartsQuery } from '../services/shazamCore.service'

export const TopCharts = () => {
    const { activeSong, isPlaying } = useSelector(state => state.player)
    const {data:songs, isFetching, error} = useGetTopChartsQuery()


    if(isFetching) return <Loader title="Loading Top Charts..."/>
    if(error) return <Error />
    

    return <div className='flex flex-col'>
       <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Discover Top Charts
       </h2>

       <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {songs?.map((song,idx) => 
            <SongPreview 
            key={song.key} 
            song={song} 
            isPlaying={isPlaying} 
            activeSong={activeSong} 
            songs={songs} 
            i={idx} />
        )}
       </div>
    </div>
}
