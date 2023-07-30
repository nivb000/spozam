import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../cmps'
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetArtistDetailsQuery } from "../services/shazamCore.service";

export const ArtistDetails = () => {

    const dispatch = useDispatch()
    const { id: artistId } = useParams()
    const { activeSong, isPlaying } = useSelector(state => state.player)
    const { data: artistsData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId)

    const handlePauseClick = () => {
        dispatch(playPause(false))
    }
    const handlePlayClick = (song, idx) => {
        const songs = artistsData?.resources?.songs
        dispatch(setActiveSong({ song, songs, idx }))
        dispatch(playPause(true))
    }


    if (isFetchingArtistDetails) return <Loader title="Loading artist details" />
    if (error) return <Error />

    return <div className="flex flex-col">
        <DetailsHeader artistId={artistId} artistData={artistsData} />

        <RelatedSongs
        data={Object.values(artistsData?.resources?.songs)}
        artistName={artistsData?.resources?.artists[artistId]?.attributes?.name}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePlayClick={handlePlayClick} 
        handlePauseClick={handlePauseClick} />

    </div>
}