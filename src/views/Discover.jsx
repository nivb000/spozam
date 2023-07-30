import { useDispatch, useSelector } from 'react-redux'
import { Error, Loader, SongPreview } from '../cmps'
import { genres } from '../assets/constants'
import { useGetSongsByGenreQuery } from '../services/shazamCore.service'
import { selectGenreListId } from '../redux/features/playerSlice'

export const Discover = () => {

    const dispatch = useDispatch()

    const {activeSong, isPlaying, genreListId} = useSelector((state) => state.player)

    const {data: songs, isFetching, error} = useGetSongsByGenreQuery(genreListId || 'genre-global-chart-1');

    const genreTitle = genres.find(({value}) => value === genreListId)?.title

    if(isFetching) return <Loader title="Loading songs..."/>

    if(error) return <Error />

    return <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}</h2>
            <select
                className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
                onChange={(e) => {dispatch(selectGenreListId(e.target.value))}}
                value={genreListId || 'Pop'}>
                {genres.map(genre => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
            </select>
        </div>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {songs?.tracks?.map((song, idx) =>
                <SongPreview key={song.key} song={song} idx={idx} isPlaying={isPlaying} activeSong={activeSong} songs={songs} />
            )}
        </div>
    </div>

}