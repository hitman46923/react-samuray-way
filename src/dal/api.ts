


export type AttachmentDto = {
    url: string
}

export type GetTracksOutput = {
    data: Array<TrackListItemOutput>

}



export type GetTrackDetailsOutputData = {
    id: string,
    attributes: {
        title: string,
        lyrics: string | null,
    }
}

export  type  GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}


export type TrackListItemOutput = {
    id: string
    attributes: TrackListItemOutputAttributes
}

type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<AttachmentDto>
}

const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    if (!apiKey) return undefined

    return {
        "api-key": apiKey,
    }
}



export const getTrack = (trackId: string) => {
    const promise:Promise<GetTrackDetailsOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId, {
        headers: prepareHeaders()

    }).then((res) => res.json())

    return promise
}
// ...

export const getTracks = () => {
    const promise:Promise<GetTracksOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/", {
        headers: prepareHeaders()

    }).then((res) => res.json())
    return promise
}
