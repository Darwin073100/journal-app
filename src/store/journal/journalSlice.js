import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSave: '',
        notes:[],
        active: null
        // active:{
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 123456,
        //     imageUrls: []
        // }
    },
    reducers:{
        savingNote: (state, action)=>{
            state.isSaving = !state.isSaving;
        },
        addNewEmptyNote: (state, action)=>{
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action)=>{
            state.active = action.payload
        },
        setNotes: (state, action)=>{
            state.notes = action.payload;
        },
        setSaving: ( state )=>{

        },
        updateNote: (state, action)=>{

        },
        deleteNoteById: (state, action)=>{

        }

    }
});

export const { 
    savingNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById, 
} = journalSlice.actions;