import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width:400
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

export default function SearchIndex() {
     const classes = useStyles();
   return (
      <div>
         <Grid container >
       <Grid item xs={2}>
       </Grid>
       <Grid item xs={8}>
       <form>
        <Typography variant="h4" color="secondary">Documents Indexés </Typography>
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
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Status :</InputLabel>
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
      <TextField
         style={{width:400,marginTop:8}}
         label="Nom du fichier "
       />
      </div>
      <div>
        <TextField
         style={{width:400}}
         label="Nom du fichier "
       />
       <TextField
         style={{width:400,marginLeft:15}}
         label="Nom du fichier "
       />
      </div>
      <div>
      <TextField
         label="Periode comptable "
         defaultValue="2017-05-24"
         type="date"
         style={{width:200,marginTop:8}}
       /> 
       <TextField
         label="Au"
         defaultValue="2017-05-24"
         type="date"
         style={{width:200,marginTop:8}}
       />
        <TextField
         label="Periode comptable "
         defaultValue="2017-05-24"
         type="date"
         style={{width:200,marginTop:8}}
       /> 
       <TextField
         label="Au"
         defaultValue="2017-05-24"
         type="date"
         style={{width:200,marginTop:8}}
       />
      </div>
      <div>
        <TextField
         style={{width:400}}
         label="Nom du fichier "
       />
       <FormControlLabel
            control={<Checkbox/>}
            label="piece comptable"
          />
      </div>
      <Button className={classes.Button} variant="contained" color="secondary">Rechercher</Button>
     </form>
     </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
      </div>
   )
}
