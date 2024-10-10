import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, deleteNoteById, savingNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from './journalSlice';
import { loadNotes } from '../../helpers';
import { fileUpload } from '../../helpers/fileUpload';
export const  startNewNote = () =>{
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        // uid

        const newNote ={
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ));

        await setDoc( newDoc, newNote);

        newNote.id = newDoc.id;

        // dispatch
        dispatch( addNewEmptyNote( newNote ));

        dispatch( setActiveNote( newNote ));

        dispatch( savingNote( newNote ));
    }
}

export const startLoadingNote = () =>{
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if( !uid ) throw new Error('El UID del usuario no existe');
        
        const notes = await loadNotes( uid );

        dispatch( setNotes( notes ))
        console.log( uid );
    }
}

export const startSaveNote = ()=>{
    return async ( dispatch, getState )=>{
        dispatch( setSaving() );
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = {
            ...note
        }

        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        console.log(docRef);
        await setDoc( docRef, noteToFireStore, { merge: true});

        dispatch( updateNote( note ));
    }
}

export const startUploadingFiles = (files = [])=>{
    return async ( dispatch )=>{
        dispatch(setSaving());
        
        const fileUploadPromise = [];

        for (const file of files) {
            fileUploadPromise.push( fileUpload( file ) );
        }

        const photosUrls = await Promise.all( fileUploadPromise );

        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
}

export const startDelitingNote = ()=>{
    return async ( dispatch, getState )=>{
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);

        await deleteDoc( docRef );

        dispatch( deleteNoteById( note.id ) );
    }
}