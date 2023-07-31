import { categories } from "../../Utils/categories";
import { videos } from "../../Utils/videos";

export const initialState = {
    categories: categories,
    videos: videos,
    exploreVideos: videos,
    watchLater: [],
    searchValue: "",
    noteValue: "",
    createPlaylist: {
        _id: "",
        title: "",
        description: ""
    },
    playlist: [],
    playlistCount: 0
}

export const videoReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_WATCH_LATER":
            return { ...state, watchLater: [...state.watchLater, payload.addVideoToWatchLater] }
        case "REMOVE_FROM_WATCH_LATER":
            return { ...state, watchLater: payload.removeFromWatchLater }
        case "SEARCH":
            console.log("SEARCH", payload)
            return { ...state, searchValue: payload.search }
        case "NOTE":
            return { ...state, noteValue: payload.note }
        case "ADD_NOTES":
            return { ...state, videos: payload.addNote, noteValue: "" }
        case "DELETE_NOTES":
            return { ...state, videos: payload.deleteNote }
        case "SET_PLAYLIST_TITLE":
            return {
                ...state,
                createPlaylist: {
                    ...state.createPlaylist,
                    title: payload.title,
                },
            };
        case "SET_PLAYLIST_DESCRIPTION":
            return {
                ...state,
                createPlaylist: {
                    ...state.createPlaylist,
                    description: payload.description,
                },
            };
        case "ADD_PLAYLIST":
            return {
                ...state,
                playlistCount: state.playlistCount + 1,
                playlist: [
                    ...state.playlist,
                    {
                        ...payload.playlist,
                        _id: state.playlistCount + 1,
                        videos: [],
                    },
                ],
                createPlaylist: { title: "", description: "" },
            };
        case "DELETE_PLAYLIST":
            return { ...state, playlist: payload.deletePlaylist }
        case "ADD_VIDEO_TO_PLAYLIST":
            return { ...state, playlist: payload.addVideoToPlaylist }

        case "LOAD-STATE":
            return { ...state, ...payload };


        case "EDIT_NOTE":
            return {
                ...state,
                videos: state.videos.map((video) => {
                    if (video._id === payload.videoId) {
                        const updatedNotes = [...video.notes];
                        updatedNotes[payload.index] = payload.editedNote;
                        return { ...video, notes: updatedNotes };
                    }
                    return video;
                }),
            };

        default:
            throw new Error(`Unknown action type ${type} `)
    }
}