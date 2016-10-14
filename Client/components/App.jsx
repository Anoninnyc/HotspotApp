import React from 'react';
import Map from '../containers/Map';
import Nav from '../containers/Nav';
import Panel from '../containers/Panel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collection: []
    };
  }

  componentDidMount() {
    var that = this;
    this.getSpots();
    console.log('states during app mount', that.state.collection);
  }

  getUpdate(wish) {
    console.log('calling getUpdate');
    let that = this;
    $.post('/api/wishes', wish, (data, err)=> {
    }).then(function(result) {
      that.getSpots();
    })
  }

  getSpots() {
    $.get('/api/spots', (data, err)=> {;
    }).then( result => {
      console.log("this is result.data", result.data);
      this.setState({
        collection: result.data
      });
      console.log("And this is the collection:", this.state.collection)
    })
  }

  postSpots(spotObj) {
    spotObj.name=parse(spotObj.name);
    console.log("this is spotObj",spotObj);
    $.post('/api/spots', spotObj, (data, err)=> {
      console.log('postSpots being hit');
    }).then(result=> {
      console.log("result from postSpots", result)
      if (result.message!=="error"){
        this.getSpots();
      }
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <Map 
        collection={this.state.collection}
        getUpdate={this.getUpdate.bind(this)}
        getSpots={this.getSpots.bind(this)}
        postSpots={this.postSpots.bind(this)}
        />
        <Panel
        collection={this.state.collection}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalCollection: state.CollectionRestaurantsFilters.collection
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


function parse(res) {
  let apos = res.indexOf("'");
  if (apos > -1) {
    let split = res.split("");
    split.splice(apos, 1,"*")
    return split.join('')
  } else {
    return res;
  }
}