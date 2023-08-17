//
import Card from './Card';
import Paper from './Paper';
import Input from './Input';
import Table from './Table';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import Autocomplete from './Autocomplete';
// import TextField from './Textfield';
import { Theme } from '@mui/material';
import Container from './Container';
import TextField from './Textfield';
// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Card(theme),
    Table(theme),
    Input(theme),
    Paper(),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    Autocomplete(theme),
    Container(theme),
    TextField()
  );
}
