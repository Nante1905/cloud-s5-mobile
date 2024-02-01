import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import firstLetterToUpperCase from './string-helper';
import { Item } from '../types/item';
import { SimpleDialogProps } from '../types/simple-dialog-props';

export function SimpleDialog<T extends Item>(props: SimpleDialogProps<T>) {
  const { onClose, open, items, title } = props;

  const handleClose = () => {
    onClose(null);
  };

  const handleListItemClick = (item: T) => {
    onClose(item);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {items.map((item) => (
          <ListItem disableGutters key={item.id}>
            <ListItemButton onClick={() => handleListItemClick(item)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  {/* <PersonIcon /> */}
                  {firstLetterToUpperCase( item.name )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleClose()}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}