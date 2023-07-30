import { SongBar } from "./SongBar";

export const RelatedSongs = ({ data, artistName, isPlaying, activeSong, handlePlayClick, handlePauseClick, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs From {artistName}</h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, idx) =>
        <SongBar
          key={`${song.id}-${artistId}`}
          song={song}
          i={idx}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      )}
    </div>
  </div>
)