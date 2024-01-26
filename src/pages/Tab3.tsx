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
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import firstLetterToUpperCase from '../shared/hooks/string-helper';
import { Item } from '../shared/types/item';
import { SimpleDialog } from '../shared/hooks/SimpleDialog';

const emails = [
  { id: 1, name: 'username@gmail.com' },
  { id: 2, name: 'user02@gmail.com' },
  { id: 3, name: 'user03@gmail.com' },
];

const dogs = [
  { id: 1, name: 'Rex' },
  { id: 2, name: 'Buddy' },
  { id: 3, name: 'Luna' },
];

const cars = [
  { id: 1, name: 'Toyota Camry' },
  { id: 2, name: 'Honda Accord' },
  { id: 3, name: 'Ford Mustang' },
];


export default function Tab3() {
  const [open, setOpen] = React.useState(false);
  const [selectedEmail, setSelectedEmail] = React.useState<Item | null>(null);
  const [selectedDog, setSelectedDog] = React.useState<Item | null>(null);
  const [selectedCar, setSelectedCar] = React.useState<Item | null>(null);
  const [items, setItems] = React.useState<Item[]>([]);
  const [dialogTitle, setDialogTitle] = React.useState("");
  const [type, setType] = React.useState<string>("");

  const handleClickOpen = (items: Item[], title: string, type: string) => {
    setItems(items);
    setDialogTitle(title);
    setType(type);
    setOpen(true);
  };

  const handleClose = (item: Item | null) => {
    setOpen(false);
    switch(type) {
      case 'email':
        if (item) {
          setSelectedEmail(item);
        }
        break;
      case 'dog':
        if (item) {
          setSelectedDog(item);
        }
        break;
      case 'car':
        if (item) {
          setSelectedCar(item);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected Email: {selectedEmail ? `${selectedEmail.id} - ${selectedEmail.name}` : 'None'}
      </Typography>
      <Typography variant="subtitle1" component="div">
        Selected Dog: {selectedDog ? `${selectedDog.id} - ${selectedDog.name}` : 'None'}
      </Typography>
      <Typography variant="subtitle1" component="div">
        Selected Car: {selectedCar ? `${selectedCar.id} - ${selectedCar.name}` : 'None'}
      </Typography>
      <br />
      <Button variant="outlined" onClick={() => handleClickOpen(emails, 'Select Email', 'email')}>
        {selectedEmail ? `${selectedEmail.name}` : 'aucun Email selectionné' }
      </Button>
      <Button variant="outlined" onClick={() => handleClickOpen(dogs, 'Select Dog', 'dog')}>
        Open Dog Dialog
      </Button>
      <Button variant="outlined" onClick={() => handleClickOpen(cars, 'Select Car', 'car')}>
        Open Car Dialog
      </Button>
    <SimpleDialog
        selectedValue={selectedEmail}
        open={open && type === 'email'}
        onClose={handleClose}
        items={items}
        title={dialogTitle}
      />
      <SimpleDialog
        selectedValue={selectedDog}
        open={open && type === 'dog'}
        onClose={handleClose}
        items={items}
        title={dialogTitle}
      />
      <SimpleDialog
        selectedValue={selectedCar}
        open={open && type === 'car'}
        onClose={handleClose}
        items={items}
        title={dialogTitle}
      />
    </div>
  );
}


