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
        <ul className="list">
          {this.props.plantList.map((item, index) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PlantList);
