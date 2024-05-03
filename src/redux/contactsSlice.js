import { initialState } from "./constants";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState.contacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid()
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;