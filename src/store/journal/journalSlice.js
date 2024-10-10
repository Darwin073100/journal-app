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
            state.isSaving = false;
            state.messageSave = '';
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
            state.isSaving = true;
            state.messageSave = '';
        },
        updateNote: (state, action)=>{
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if(action.payload.id === note.id) return action.payload;
                return note;
            });

            state.messageSave = `${ action.payload.title }, actualizada correctamente`;
        },
        deleteNoteById: (state, action)=>{
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload );
        },
        setPhotosToActiveNote: ( state, action ) =>{
            
            state.active.imageUrls = [
                ...state.active.imageUrls,
                ...action.payload
            ];

            state.isSaving = false;
        },
        clearNotesLogout: ( state )=>{
            state.isSaving = false;
            state.messageSave = '';
            state.notes = [];
            state.active = null;
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
    setPhotosToActiveNote,
    clearNotesLogout
} = journalSlice.actions;