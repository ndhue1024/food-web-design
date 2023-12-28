import { ExpandMoreOutlined } from '@mui/icons-material';
import React from 'react'

type optionType = {
  value: string | number;
  text: string;
}

type SelectInputType = {
  name: string;
  value: string | number;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: optionType[];
}

const SelectInput = ({ name, value, onChange, disabled, options}: SelectInputType) => {
  return (
    <div className="input-group">
        <label>Time</label>
        <select
          disabled={disabled}
          name={name}
          id={name}
          className="input"
          value={value}
          onChange={onChange}
        >
          {options.map(option => (
            <option value={option.value}>{option.text}</option>
          ))}
        </select>
        <ExpandMoreOutlined className="select-icon" />
      </div>
  )
}

export default SelectInput