
import {useTracks} from "../bll/useTracks.tsx";
import {TrackItem} from "./TrackItem.tsx";


type Props = {
     selectedTrackId: string | null,
     onTrackSelected: (id: string | null) => void,

}




export function TrackList({selectedTrackId, onTrackSelected}: Props) {

const {tracks} = useTracks();





if (tracks === null ) {
    return  (
        <h3>Loading..</h3>
    )
}

if (tracks.length === 0)  {
    return (
        <h3>No tracks</h3>
    )
}

const handleReset  =() => {
  onTrackSelected?.(null)

    }




return <div>
    <button onClick={handleReset}>Reset</button>
    <ul>
        {tracks.map((track) => {
            return (
               <TrackItem track={track} key={track.id}  isSelect = {track.id === selectedTrackId} onTrackSelected={onTrackSelected} />
            )
        })}
    </ul>

</div>
}
