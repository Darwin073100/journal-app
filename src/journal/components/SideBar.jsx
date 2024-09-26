import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
        component={'nav'}
        sx={{width: { sm: drawerWidth }, flexShrink: { sm: 0}}} >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: { xs: 'blcok'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
            }} >
            <Toolbar>
                <Typography variant="h6" noWrap component={'div'}>
                    Edwin Garcia
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {
                ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map(item =>(
                    <ListItem key={ item }> 
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={ item } />
                                <ListItemText secondary='Lorem usto voluptatibus consequatur voluptat.' />
                            </Grid>
                        </ListItemButton> 
                    </ListItem>
                ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
