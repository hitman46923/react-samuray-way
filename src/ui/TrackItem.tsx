import type {TrackListItemOutput} from "../dal/api.ts";




type Props = {
    isSelect: boolean
    onTrackSelected: (trackId: string | null) => void
    track: TrackListItemOutput
};



export function  TrackItem({isSelect, onTrackSelected, track}: Props) {

    return (
        <li
            key={track.id}
            style={
                {
                border: isSelect ? '1px solid orange': 'none'
                }
            }
        >
            <div
                onClick={() => {

                    onTrackSelected?.(track.id)
                }}
            >
                {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
        </li>
    )
}
