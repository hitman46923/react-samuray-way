

import {useTrackDetail} from "../bll/useTrackDetail.tsx";





type Props = {
    trackId: string | null,
}





export function TrackDetail({trackId}:Props) {

    const {selectedTrack} = useTrackDetail(trackId)


    return (
        <div>
            <h1>Music</h1>
            <h2>Details</h2>
            {!selectedTrack && !trackId && "Track is not selected."}
            {!selectedTrack && trackId && "Loading..."}
            {selectedTrack && (
                <div>
                    <h3>{selectedTrack.attributes.title}</h3>
                    <h4>Lyrics</h4>
                    <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
                </div>
            )}
        </div>
    )
}
