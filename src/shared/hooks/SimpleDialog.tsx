import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import CancelIcon from '@mui/icons-material/Cancel';
import { blue } from '@mui/material/colors';
import firstLetterToUpperCase from './string-helper';
import { Item } from '../types/item';
import { SimpleDialogProps } from '../types/simple-dialog-props';
import { BoiteVitesse, Couleur, Energie, Etat, Marque, Modele } from '../types/creation-annonce-types';
interface ModeleDialogProps {
  onClose:(value: Modele|null)=>void;
  items: Modele[], 
  title: string, 
  open: boolean;
}
interface MarqueDialogProps{
  onClose:(value: Marque|null)=>void;
  items: Marque[], 
  title: string, 
  open: boolean;
}
interface CouleurDialogProps{
  onClose:(value: Couleur|null)=>void;
  items: Couleur[], 
  title: string, 
  open: boolean;
}
interface EtatDialogProps{
  onClose:(value: Etat|null)=>void;
  items: Etat[], 
  title: string, 
  open: boolean;
}
interface EnergieDialogProps{
  onClose:(value: Energie|null)=>void;
  items: Energie[], 
  title: string, 
  open: boolean;
}
interface BVDialogProps{
  onClose:(value: BoiteVitesse|null)=>void;
  items: BoiteVitesse[], 
  title: string, 
  open: boolean;
}

export const BVSimpleDialog : React.FC<BVDialogProps> = (props: BVDialogProps) => {
  const { onClose, open, items, title } = props;
  const handleClose = () => {
    onClose(null);
  };
  const handleListItemClick = (item: BoiteVitesse) => {
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
                {firstLetterToUpperCase( item.nom )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.nom} />
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
                <CancelIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export const EnergieSimpleDialog : React.FC<EnergieDialogProps> = (props: EnergieDialogProps) => {
  const { onClose, open, items, title } = props;
  const handleClose = () => {
    onClose(null);
  };
  const handleListItemClick = (item: Energie) => {
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
                {firstLetterToUpperCase( item.nom )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.nom} />
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
                <CancelIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}
export const EtatSimpleDialog : React.FC<EtatDialogProps> = (props: EtatDialogProps) => {
  const { onClose, open, items, title } = props;
  const handleClose = () => {
    onClose(null);
  };
  const handleListItemClick = (item: Etat) => {
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
                  {item.valeur} 
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.nom} />
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
                <CancelIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}
export const CouleurSimpleDialog : React.FC<CouleurDialogProps> = (props: CouleurDialogProps) => {
  const { onClose, open, items, title } = props;
  const handleClose = () => {
    onClose(null);
  };
  const handleListItemClick = (item: Couleur) => {
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
                <Avatar sx={{bgcolor: item.hexa, color:item.hexa}}> 
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.nom} />
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
                <CancelIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}
export const ModeleSimpleDialog : React.FC<ModeleDialogProps> = (props: ModeleDialogProps) => {
  const { onClose, open, items, title } = props;
  const handleClose = () => {
    onClose(null);
  };
  const handleListItemClick = (item: Modele) => {
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
                  {firstLetterToUpperCase( item.nom )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.nom} />
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
                <CancelIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}
export const MarqueSimpleDialog : React.FC<MarqueDialogProps> = (props: MarqueDialogProps) => {
  const { onClose, open, items, title } = props;
  const handleClose = () => {
    onClose(null);
  };
  const handleListItemClick = (item: Marque) => {
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
                <Avatar alt="logo" src={item.logo} sx={{width:24, height:24}}>
        
                  
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.nom} />
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
                <CancelIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}