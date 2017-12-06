import React from 'react';

export default props => (
    <div className='well card mb-4'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a  target ="_blank" href={"https://maps.google.com/?q="+props.location[0] + "," + props.location[1]}>
        <button type="button" className="btn btn-primary mb-3" >Location</button>
        </a>
    </div>
);