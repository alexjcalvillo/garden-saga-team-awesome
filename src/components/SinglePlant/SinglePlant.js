import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  plantDetails: store.plantDetails,
});

class SinglePlant extends Component {
  state = {
    id: '',
  };

  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.history.push(`/${this.props.match.params.id}`);
    this.props.dispatch({
      type: 'GET_PLANT_DETAILS',
      payload: this.props.match.params.id,
    });
    this.props.history.push(`/${this.props.match.params.id}`);
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
            <tr key={this.props.plantDetails.id}>
              <td>{this.props.plantDetails.name}</td>
              <td>{this.props.plantDetails.kingdom}</td>
              <td>{this.props.plantDetails.clade}</td>
              <td>{this.props.plantDetails.order}</td>
              <td>{this.props.plantDetails.family}</td>
              <td>{this.props.plantDetails.subfamily}</td>
              <td>{this.props.plantDetails.genus}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SinglePlant);
