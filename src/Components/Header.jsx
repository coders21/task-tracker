import React from 'react';

const Header=({onAdd,showaddtask}) => {
  return (
    <div className="header">
      <h2>Task Tracker</h2>
    
      <button 
      onClick={onAdd}
      style={{ backgroundColor: showaddtask? 'red':'green'}}
      className="btn">{showaddtask? 'close':'open'}</button>
    </div>
  )
}

export default Header
