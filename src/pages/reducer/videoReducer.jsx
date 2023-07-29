import { categories } from "../../Utils/categories";

export const initialState = { categories: categories }

export const videoReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        default:
            throw new Error(`Unknown action type ${type} `)
    }
}