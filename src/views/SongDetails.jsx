import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../cmps'
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongsByArtistQuery } from "../services/shazamCore.service";

export const SongDetails = () => {
    const dispatch = useDispatch()
    const { songId } = useParams()
    const { activeSong, isPlaying } = useSelector(state => state.player)
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songId })
    const { data:songs , isFetching: isFetchingArtistSongs, error } = useGetSongsByArtistQuery(songData?.artists[0]?.adamid)
    
    const handlePauseClick = () => {
        dispatch(playPause(false))
    }
    const handlePlayClick = (song, idx) => {
        dispatch(setActiveSong({ song, songs, idx }))
        dispatch(playPause(true))
    }

    if (isFetchingSongDetails || isFetchingArtistSongs) return <Loader title="Loading song details..." />
    if (error) return <Error />

    return <div className="flex flex-col">
        <DetailsHeader artistId="" songData={songData} />
        <div className="mb-10">
            <h2 className="text-white text-3xl font-bold">Lyrics</h2>
            <div className="mt-5">
                {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1]?.text?.map((line, idx) => (
                    <p key={idx} className="text-gray-400 text-base my-1">{line}</p>
                )) : <p className="text-gray-400 text-base my-1">Sorry no lyrics available for this song</p>}
            </div>
        </div>

        <RelatedSongs
            data={songs?.data}
            artistName={songData.artistName}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseClick} />

    </div>
}