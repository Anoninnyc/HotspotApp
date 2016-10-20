import React from 'react';
//import { parse } from '../containers/utils';
function fade (el) {
 $(el).fadeIn(1000);
 $(el).fadeOut(1000);
}

function parseAgain(res) {
  let ast = res.indexOf("*");
  if (ast > -1) {
    let split = res.split("");
    split.splice(ast, 1, "'");
    return split.join('');
  } else {
    return res;
  }
}

console.log("THIS IS THE PARSE FUNCTION", parse);

var CollectionModel = ({item}) => {
  var url=item.yelpData.url;
  var yelpRating=item.yelpData.rating;
  var address=item.yelpData.address;
  //console.log("Parsed name!!!", parse(item.name));
  return (
  <div id='restaurant' className='restaurant card' >
    <img className='card-img-top' src={item.yelpData.image||"http://bit.ly/2e99Pwd"} />
   
    <div className='card-block'>
      <h4  className='card-title'><a href={url} target="_blank">{parseAgain(item.name)}</a></h4>
    </div>
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'>Address: <p style={{fontSize:'12px'}}>{address}</p></li>
      <li className='list-group-item'>Your Rating: {item.rating}</li>
      <li className='list-group-item'>Yelp Rating: {yelpRating}</li>
      <li className='list-group-item'>Type: {item.yelpData.cuisine}</li>
    </ul>
  </div>
 );
};


export default CollectionModel;
