import React, { Component } from 'react';
import './PlantList.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const mapStateToProps = (store) => ({
  plantList: store.plantList,
});

class PlantList extends Component {
  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({
      type: 'GET_PLANTS',
    });
  }
  deletePlant = (id) => (event) => {
    // console.log('plant id', index);
    //dispatch out to saga
    this.props.dispatch({
      type: 'DELETE_PLANT',
      payload: id,
    });
  };
  render() {
    console.log(this.props.plantList);

    return (
      <div>
        <h3>This is the plant list</h3>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
        <TableContainer component={Paper}>
          <Table className="list">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Kingdom</TableCell>
                <TableCell align="right">Clade</TableCell>
                <TableCell align="right">Order</TableCell>
                <TableCell align="right">Family</TableCell>
                <TableCell align="right">Sub-Family</TableCell>
                <TableCell align="right">Genus</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.plantList.map((item, index) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Link to={`/plant/${item.id}`}>{item.name}</Link>
                    </TableCell>
                    <TableCell>{item.kingdom}</TableCell>
                    <TableCell>{item.clade}</TableCell>
                    <TableCell>{item.order}</TableCell>
                    <TableCell>{item.family}</TableCell>
                    <TableCell>{item.subfamily}</TableCell>
                    <TableCell>{item.genus}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={this.deletePlant(item.id)}
                      >
                        X
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PlantList);
