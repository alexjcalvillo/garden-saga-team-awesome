import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = (reduxState) => ({
  reduxState,
});

class NewPlantForm extends Component {
  state = {
    newPlant: {
      id: 4,
      name: '',
      kingdom: '',
      clade: '',
      order: '',
      family: '',
      subfamily: '',
      genus: '',
    },
  };

  handleNameChange = (fieldKey) => (event) => {
    console.log('event happended', this.state.newPlant);
    this.setState({
      newPlant: {
        ...this.state.newPlant,
        [fieldKey]: event.target.value,
      },
    });
  };

  addNewPlant = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.newPlant });
    this.setState({
      newPlant: {
        id: this.state.newPlant.id + 1,
        name: '',
        kingdom: '',
        clade: '',
        order: '',
        family: '',
        subfamily: '',
        genus: '',
      },
    });
  };

  render() {
    return (
      <div>
        <h3>This is the form</h3>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.addNewPlant}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <TextField
                id="standard-basic"
                label="name"
                variant="outlined"
                type="text"
                name="name"
                value={this.state.newPlant.name}
                onChange={this.handleNameChange('name')}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="standard-basic"
                label="kingdom"
                variant="outlined"
                type="text"
                name="kingdom"
                value={this.state.newPlant.kingdom}
                onChange={this.handleNameChange('kingdom')}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="clade"
                type="text"
                name="clade"
                value={this.state.newPlant.clade}
                onChange={this.handleNameChange('clade')}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="order"
                type="text"
                name="order"
                value={this.state.newPlant.order}
                onChange={this.handleNameChange('order')}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="family"
                type="text"
                name="family"
                value={this.state.newPlant.family}
                onChange={this.handleNameChange('family')}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="subfamily"
                type="text"
                name="subfamily"
                value={this.state.newPlant.subfamily}
                onChange={this.handleNameChange('subfamily')}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="genus"
                type="text"
                name="genus"
                value={this.state.newPlant.genus}
                onChange={this.handleNameChange('genus')}
              />
            </Grid>
            <Grid item>
              <input type="submit" value="Add New Plant" />
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewPlantForm);
