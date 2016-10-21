import React from 'react';

var ResultModel = ({item}) => {
  console.log('item', item);
  var url = item.url;
  var rating = item.rating;
  var address = item.address;

  return (
  <div id='restaurant' className='restaurant card' >
    <img className='card-img-top' src={item.image} />
    <div className='card-block'>
      <h4 className='card-title'><a href={url} target="_blank">{item.name}</a></h4>
    </div>
    <ul className='list-group list-group-flush'>
        <li className='list-group-item'>Address: <p style={{fontSize: '12px'}}>{address}</p></li>
      <li className='list-group-item'>Yelp Rating: {rating}</li>
      <li className='list-group-item'>Type: {item.cuisine}</li>
    </ul>
  </div>
);
  // console.log(here);
};


export default ResultModel;
