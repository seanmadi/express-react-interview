import React from 'react';

function Device(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.dateTerminated}</td>
      <td><a href="#" onClick={() => props.onRemove(props.id)}>Remove</a></td>
    </tr>
  )
}

export default Device
