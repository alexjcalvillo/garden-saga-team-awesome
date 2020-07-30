import React, { Component } from 'react';
import './PlantList.css';
import { connect } from 'react-redux';

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

  render() {
    console.log(this.props.plantList);
    return (
      <div>
        <h3>This is the plant list</h3>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
        <table className="list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Kingdom</th>
              <th>Clade</th>
              <th>Order</th>
              <th>Family</th>
              <th>Sub-Family</th>
              <th>Genus</th>
            </tr>
          </thead>
          <tbody>
            {this.props.plantList.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.kingdom}</td>
                  <td>{item.clade}</td>
                  <td>{item.order}</td>
                  <td>{item.family}</td>
                  <td>{item.subfamily}</td>
                  <td>{item.genus}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PlantList);
