import React from 'react';

export default function Input({ value, onChange, type, placeholder }) {
  return (
    <input value={value} type={type} placeholder={placeholder} onChange={e => {
      onChange(e.target.value);
    }} />
  );
}
