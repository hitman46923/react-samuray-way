import {PageTitle} from "./PageTitle.tsx";
import {TrackList} from "./TrackList.tsx";
import {TrackDetail} from "./TrackDetail.tsx";
import {useTrackSelection} from "../bll/useTrackSelection.tsx";

export function MainPage () {
    const {selectedTrackId, setSelectedTrackId} = useTrackSelection();




   const handleTrackSelect = (id: string | null):  void =>  {
       setSelectedTrackId(id);
    }


    return (
        <div>
            <PageTitle />
            <div style={{display: 'flex'}}>
                <TrackList  selectedTrackId ={selectedTrackId}   onTrackSelected={handleTrackSelect}  />
                <TrackDetail   trackId={selectedTrackId}  />
            </div>
        </div>
    )
}


