import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/"
import { NoteView } from "../views/NoteView"

export const JournalPage = () => {
  const { isSaving, active } = useSelector( state => state.journal );
  const dispatch = useDispatch();

  const onClickNewNote = ()=>{
    dispatch( startNewNote() );
  }
  return (
    <JournalLayout>
        {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim eaque quas similique! Autem minus repudiandae vero cumque, eligendi voluptatibus. Vel corrupti blanditiis unde dolores doloribus ab minima temporibus in.</Typography> */}
        
        {
          (!!active)
          ? <NoteView />
          : <NothingSelectedView />
        }
        
        <IconButton 
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
          onClick={ ()=> onClickNewNote() } 
          disabled={ isSaving }>
          <AddOutlined sx={{ fontSize: 30 }}/>
        </IconButton>
    </JournalLayout>
  )
}
