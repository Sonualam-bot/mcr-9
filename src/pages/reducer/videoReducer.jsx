import { categories } from "../../Utils/categories";
import { videos } from "../../Utils/videos";

export const initialState = {
    categories: categories,
    videos: videos,
    watchLater: [],
    searchValue: "",
    noteValue: "",
    addNotes: []
}

export const videoReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_WATCH_LATER":
            return { ...state, watchLater: [...state.watchLater, payload.addVideoToWatchLater] }
        case "REMOVE_FROM_WATCH_LATER":
            return { ...state, watchLater: payload.removeFromWatchLater }
        case "SEARCH":
            return { ...state, searchValue: payload.search }
        case "NOTE":
            return { ...state, noteValue: payload.note }
        case "ADD_NOTES":
            return { ...state, addNotes: [...state.addNotes, payload.addNote], noteValue: "" }
        default:
            throw new Error(`Unknown action type ${type} `)
    }
}