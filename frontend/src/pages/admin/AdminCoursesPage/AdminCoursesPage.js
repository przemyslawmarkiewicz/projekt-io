import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid, Button } from '@material-ui/core';

import './AdminCoursesPage.scss';

const coursesData = [
  {subject: 'Fizyka I', instructor: 'Prowadzacy 1'},
  {subject: 'Fizyka II', instructor: 'Prowadzacy 2'},
  {subject: 'Analiza', instructor: 'Prowadzacy 3'},
  {subject: 'Algebra', instructor: 'Prowadzacy 4'},
  {subject: 'Podstawy Informatyki]', instructor: 'Prowadzacy 5'},
  {subject: 'Angielski', instructor: 'Prowadzacy 6'},
  {subject: 'Fizyka I', instructor: 'Prowadzacy 1'},
  {subject: 'Fizyka II', instructor: 'Prowadzacy 2'},
  {subject: 'Analiza', instructor: 'Prowadzacy 3'},
  {subject: 'Algebra', instructor: 'Prowadzacy 4'},
  {subject: 'Podstawy Informatyki]', instructor: 'Prowadzacy 5'},
  {subject: 'Angielski', instructor: 'Prowadzacy 6'},
  {subject: 'Fizyka I', instructor: 'Prowadzacy 1'},
  {subject: 'Fizyka II', instructor: 'Prowadzacy 2'},
  {subject: 'Analiza', instructor: 'Prowadzacy 3'},
  {subject: 'Algebra', instructor: 'Prowadzacy 4'},
  {subject: 'Podstawy Informatyki]', instructor: 'Prowadzacy 5'},
  {subject: 'Angielski', instructor: 'Prowadzacy 6'},
]

const instructors = [
  {name: 'Andrzej Nowak', degree: 'mgr'},
  {name: 'Marian Taki', degree: 'dr'},
  {name: 'Super prowadzacy', degree: 'mgr'},
  {name: 'Andrzej Nowak', degree: 'mgr'},
  {name: 'Marian Taki', degree: 'dr'},
  {name: 'Super prowadzacy', degree: 'mgr'},
  {name: 'Andrzej Nowak', degree: 'mgr'},
  {name: 'Marian Taki', degree: 'dr'},
  {name: 'Super prowadzacy', degree: 'mgr'},
]


const AdminCoursesPage = () => {
  return (
      <Grid container>
        <Grid container xs={6} spacing={2} justify="center">
          <Grid item xs={8}>
            Lista wszystkich kursów:
          </Grid>
          <Grid item xs={8}>
            <List className='courses-list'>
              {coursesData && coursesData.map((course, index) => 
                <div className='course-item'>
                  <ListItem key={index} >
                    <ListItemIcon><MenuBookIcon fontSize={'large'}/> </ListItemIcon>
                    <ListItemText 
                      primary={course.subject} 
                      secondary={`PROWADZĄCY: ${course.instructor}`}>
                    </ListItemText>
                  </ListItem>
                </div>
              )}
            </List>
          </Grid>
        </Grid>
        <Grid container xs={6} spacing={2} direction="column" justify="center" >
          <Grid>
            Dodaj nowy kurs:
          </Grid>
          <Grid item xs={8}>
            <Card className="add-course-card">
              <CardContent>
                <Grid container spacing={3} direction="column">
                  <Grid item xs={12}>
                    <TextField style={{width: '100%'}} id="outlined-basic" label="Nazwa kursu" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={instructors}
                      getOptionLabel={(instructor) => instructor.name}
                      renderInput={(params) => <TextField {...params} label="Przypisz prowadzącego" variant="outlined" />}
                      style={{width: '100%'}}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      variant="outlined" 
                      color="primary"
                      style={{width: '100%'}}
                    >
                      Dodaj kurs
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      
  );
};

export {
  AdminCoursesPage
}