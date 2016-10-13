import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';






var friendEndpoints={
  accept:'/api/confirmFriend',
  decline:'/api/rejectFriend'
}

 class FriendModel extends React.Component  {
  //console.log('you should see a friend!');
  constructor(props){
    super(props)
  }

accept(person){
  var that=this;
$.post(friendEndpoints.accept,{ friendname:person },function(a,b){
  console.log('accept request!!',a,'error(?):',b);
  that.props.actions.fetchFriendRequests();
    console.log('the new store!:',that.props.friendRequestsLower);

});

 }


decline(person){
  var that=this;
$.post(friendEndpoints.decline,{ friendname:person },function(a,b){
  console.log('decline request!!',a,'error(?):',b);
  that.props.actions.fetchFriendRequests();
});

 }
//

  render(){
    var that=this;
 
    return (
  <div>
     <div className="requestorName" >{this.props.item.requestor} </div>
    <div className="btn-default" onClick={()=>{this.accept(that.props.item.requestor)}}>Accept</div>
    <div className="btn-default" onClick={()=>{this.decline(that.props.item.requestor)}}>Decline</div>
  </div>
  );
 }
};



function mapStateToProps(state) {
  return {
    friendRequestsLower:state.FriendReqs.friendReqs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


 export default connect(mapStateToProps, mapDispatchToProps)(FriendModel);

