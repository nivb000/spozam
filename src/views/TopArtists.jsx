import axios from 'axios'
import { ArtistCard, Loader, Error } from '../cmps'
import { useGetTopChartsQuery } from '../services/shazamCore.service'

export const TopArtists = () => {

    const {data:songs, isFetching, error} = useGetTopChartsQuery()


    if(isFetching) return <Loader title="Loading Top Charts..."/>
    if(error) return <Error />
    

    return <div className='flex flex-col'>
       <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Top Artists
       </h2>

       <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {songs?.map(track => <ArtistCard key={track.key} track={track} />)}
       </div>
    </div>
}