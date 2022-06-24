import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CardTravelIcon from '@material-ui/icons/CardTravel';


export default function ListItems(props) {
    const handleClick=(v)=>{
      props.setDashboard(v)  
    }

return(
    <div>
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Policies" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DriveEtaIcon />
      </ListItemIcon>
      <ListItemText primary="Vehicle Insurance"  />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Life Insurance" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FavoriteBorder />
      </ListItemIcon>
      <ListItemText primary="Health Insurance" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CardTravelIcon />
      </ListItemIcon>
      <ListItemText primary="Travel Insurance"/>
    </ListItem>
  </div>
  </div>
)
}