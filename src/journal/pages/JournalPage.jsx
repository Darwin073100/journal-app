import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
        {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim eaque quas similique! Autem minus repudiandae vero cumque, eligendi voluptatibus. Vel corrupti blanditiis unde dolores doloribus ab minima temporibus in.</Typography> */}
        <NothingSelectedView />
        <IconButton 
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }} >
          <AddOutlined />
        </IconButton>
        {/* <NoteView /> */}
        {/* NothinSelected */}
        {/* NoteView */}
    </JournalLayout>
  )
}
