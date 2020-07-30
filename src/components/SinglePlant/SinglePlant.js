import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  plantDetails: store.plantDetails,
});

class SinglePlant extends Component {
  state = {
    id: 1,
  };

  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({
      type: 'GET_PLANT_DETAILS',
      payload: this.state.id,
    });
  }

  render() {
    console.log(this.props.plantDetails);
    console.log(this.props);
    return (
      <div>
        <h3>This is the single plant</h3>

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
            <tr>
              <td>{this.props.plantDetails.name}</td>
            </tr>
            {/* {this.props.plantDetails.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.kingdom}</td>
                  <td>{item.clade}</td>
                  <td>{item.order}</td>
                  <td>{item.family}</td>
                  <td>{item.subfamily}</td>
                  <td>{item.genus}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SinglePlant);
