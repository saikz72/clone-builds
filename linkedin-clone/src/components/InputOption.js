import React from 'react';
import '../styles/inputOption.css';

export default function InputOption({ title, Icon, color }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <p>{title}</p>
    </div>
  );
}
