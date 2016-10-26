import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';


var friendEndpoints = {
  accept:'/api/confirmFriend',
  decline:'/api/rejectFriend'
};

class FriendModel extends React.Component {
  constructor(props) {
    super(props);
  }

  accept(person) {
    $.post(friendEndpoints.accept, { friendname: person }, (res, err)=>{
      console.log('accept request!!', res, 'error(?):', err);
      this.props.actions.fetchFriendRequests();
      this.props.actions.fetchCurrentFriends();
    });
  }


  decline(person) {
    $.post(friendEndpoints.decline, { friendname: person }, (res, err)=>{
      console.log('decline request!!', res, 'error(?):', err);
      this.props.actions.fetchFriendRequests();
    });
  }
  //

  render() {
    return (
  <div>
     <div className="requestorName" >{this.props.item.requestor} </div>
    <div className="btn-default" onClick={()=>{ this.accept(this.props.item.requestor); } }>Accept</div>
    <div className="btn-default" onClick={()=>{ this.decline(this.props.item.requestor); }}>Decline</div>
  </div>
  );
  }
}



function mapStateToProps(state) {
  return {
    friendRequestsLower: state.FriendReqs.friendReqs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


 export default connect(mapStateToProps, mapDispatchToProps)(FriendModel);

