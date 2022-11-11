import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Grid } from '@mui/material';

export default function BasicList() {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <nav aria-label="main mailbox folders">
        <List>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <ListItem >
                        <ListItemButton>
                            <ListItemText primary="React" />
                        </ListItemButton>
                    </ListItem>
                </Grid>
                <Grid item xs={6}>
                    <ListItem >
                        <ListItemButton>
                            <ListItemText primary="TypeScript" />
                        </ListItemButton>
                    </ListItem>
                </Grid>
                <Grid item xs={6}>
                    <ListItem >
                        <ListItemButton>
                            <ListItemText primary="Redux" />
                        </ListItemButton>
                    </ListItem>
                </Grid>
                <Grid item xs={6}>
                    <ListItem >
                        <ListItemButton>
                            <ListItemText primary="MaterialUI" />
                        </ListItemButton>
                    </ListItem>
                </Grid>
            </Grid>


    </List>
    </nav>
    <Divider />
        </Box>
);
}
