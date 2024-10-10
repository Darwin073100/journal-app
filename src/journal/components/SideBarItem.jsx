import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ item }) => {
    const dispatch = useDispatch();

    const onClickNote = ()=>{
        dispatch( setActiveNote( item ));
    }

    const newTitle = useMemo(()=>{
        return item.title.length > 17
            ? item.title.substring(0, 17) + '...'
            : item.title
    }, [item.title]);

  return (
    <ListItem>
      <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={ newTitle } />
          <ListItemText secondary={item?.body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
