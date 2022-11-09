import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Error, Loader, SongPreview } from '../cmps'
import { useGetSongsBySearchQuery } from '../services/shazamCore.service'

export const Search = () => {
  const { searchTerm } = useParams()
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm)
  const songs = data?.tracks?.hits?.map(song => song.track)


  if (isFetching) return <Loader title="Searching..." />
  if (error) return <Error />


  return <div className='flex flex-col'>
    <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
      Showing results for <span className='font-black'>{searchTerm}</span>
    </h2>

    <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
      {songs?.map((song, idx) =>
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
