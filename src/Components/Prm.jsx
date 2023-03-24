import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import ReactDOM from 'react-dom';  

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
 <>



    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Choose Your Role
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
            <SchoolIcon></SchoolIcon>
        </ListItemIcon>
      
     
      
        {/* <SomeOtherComponent /> */}
      
   
        {/* <Route path="Login" element={<Login />}></Route> */}
        <ListItemText primary="Student" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
            <ManageAccountsIcon></ManageAccountsIcon>
        
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <PersonIcon></PersonIcon>
        </ListItemIcon>
        <ListItemText primary="Principal" />
       
      </ListItemButton>

        </List>
     
        </>
  );
}
