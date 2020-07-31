import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SinglePlant.module.css';

// Material UI ---
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const mapStateToProps = (store) => ({
  plantDetails: store.plantDetails,
});

class SinglePlant extends Component {
  state = {
    editMode: false,
    newPlant: {
      name: '',
      kingdom: '',
      clade: '',
      order: '',
      family: '',
      subfamily: '',
      genus: '',
    },
  };

  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.history.push(`/plant/${this.props.match.params.id}`);
    this.props.dispatch({
      type: 'GET_PLANT_DETAILS',
      payload: this.props.match.params.id,
    });
    this.props.history.push(`/plant/${this.props.match.params.id}`);
  }

  handleOnEditClick = () => {
    console.log(`let's edit so good`);
    this.setState({ editMode: !this.state.editMode });
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
      <div className="container-admin">
        <h3>This is the single plant</h3>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Kingdom</TableCell>
                <TableCell align="right">Clade</TableCell>
                <TableCell align="right">Order</TableCell>
                <TableCell align="right">Family</TableCell>
                <TableCell align="right">SubFamily</TableCell>
                <TableCell align="right">Genus</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!this.state.editMode ? (
                <TableRow>
                  <TableCell align="right">
                    {this.props.plantDetails.name}
                  </TableCell>
                  <TableCell align="right">
                    {this.props.plantDetails.kingdom}
                  </TableCell>
                  <TableCell align="right">
                    {this.props.plantDetails.clade}
                  </TableCell>
                  <TableCell align="right">
                    {this.props.plantDetails.order}
                  </TableCell>
                  <TableCell align="right">
                    {this.props.plantDetails.family}
                  </TableCell>
                  <TableCell align="right">
                    {this.props.plantDetails.subfamily}
                  </TableCell>
                  <TableCell align="right">
                    {this.props.plantDetails.genus}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={this.handleOnEditClick}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell align="right">
                    <TextField
                      id="standard-basic"
                      label="name"
                      variant="outlined"
                      type="text"
                      name="name"
                      value={this.state.newPlant.name}
                      onChange={this.handleNameChange('name')}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="standard-basic"
                      label="kingdom"
                      variant="outlined"
                      type="text"
                      name="kingdom"
                      value={this.state.newPlant.kingdom}
                      onChange={this.handleNameChange('kingdom')}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      label="clade"
                      type="text"
                      name="clade"
                      value={this.state.newPlant.clade}
                      onChange={this.handleNameChange('clade')}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      label="order"
                      type="text"
                      name="order"
                      value={this.state.newPlant.order}
                      onChange={this.handleNameChange('order')}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      label="family"
                      type="text"
                      name="family"
                      value={this.state.newPlant.family}
                      onChange={this.handleNameChange('family')}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      label="subfamily"
                      type="text"
                      name="subfamily"
                      value={this.state.newPlant.subfamily}
                      onChange={this.handleNameChange('subfamily')}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      label="genus"
                      type="text"
                      name="genus"
                      value={this.state.newPlant.genus}
                      onChange={this.handleNameChange('genus')}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={this.handleOnEditClick}
                    >
                      Save
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SinglePlant);
