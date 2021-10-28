import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width:600
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  TextField:{
    width:400
  },
  Button : {
    marginTop:20
  }
}));
export default function DocDepot() {
  const classes = useStyles();
  return (
  <div style={{textAlign:"center"}}>
      <form>
       <Typography variant="h4" color="secondary" >Doc depot</Typography>
       <div>
        <FormControl className={classes.formControl}>
         <InputLabel id="demo-simple-select-label">Code dossier :</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Nom dossier :</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> 
      </div>
      <div>
      <TextField
         label="Periode comptable "
         defaultValue="2017-05-24"
         type="date"
         style={{width:600}}
       />
       </div>
       <div>
       <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Journal :</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> 
      </div>
      <div>
      <TextField
         label="Fichiers"
         type="file"
         multiple
       />
       </div>
       <Button className={classes.Button} variant="contained" color="secondary">Valider</Button>
     </form>
    </div>
  )
}
