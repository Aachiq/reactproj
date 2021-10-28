import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
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
    width:300
  },
  Button : {
    marginTop:20,
  }
}));

export default function SearchDepose() {
     const classes = useStyles();
   return (
      <div >
        <Grid container >
       <Grid item xs={2}>
       </Grid>
       <Grid item xs={8}>
       <form>
       <Typography variant="h4" color="secondary" style={{textAlign:'center'}}>Recherche Document </Typography>
        <div>
        <FormControl /*className={classes.formControl}*/ fullWidth>
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
      <FormControl /*className={classes.formControl}*/ fullWidth>
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
      <FormControl /*className={classes.formControl}*/ fullWidth>
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
         label="Periode comptable "
         defaultValue="2017-05-24"
         type="date"
         style={{marginTop:8}}
         fullWidth
       /> 
       <TextField
         label="Au"
         defaultValue="2017-05-24"
         type="date"
         style={{marginTop:8}}
         fullWidth
       />
      </div>
      <div>
      <TextField
         label="Periode de traitement "
         defaultValue="2017-05-24"
         type="date"
         style={{marginTop:8}}
         fullWidth
       /> 
       <TextField
         label="Au"
         defaultValue="2017-05-24"
         type="date"
         style={{marginTop:8}}
         fullWidth
       />
       <FormControl /*className={classes.formControl}*/ fullWidth>
        <InputLabel id="demo-simple-select-label">Type :</InputLabel>
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
      <TextField
         label="Nom du fichier "
         fullWidth
       /> <br></br>
      <Button className={classes.Button} variant="contained" color="secondary">Rechercher</Button>
     </form>
       </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    
      </div>
   )
}
