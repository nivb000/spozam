import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../cmps'
import { useGetArtistDetailsQuery } from "../services/shazamCore.service";

export const ArtistDetails = () => {
    const { id: artistId } = useParams()
    const { activeSong, isPlaying } = useSelector(state => state.player)
    const { data: artistsData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId)

    if (isFetchingArtistDetails) return <Loader title="Loading artist details" />
    if (error) return <Error />

    return <div className="flex flex-col">
        <DetailsHeader artistId={artistId} artistData={artistsData} />

        <RelatedSongs
        data={Object.values(artistsData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong} />

    </div>
}