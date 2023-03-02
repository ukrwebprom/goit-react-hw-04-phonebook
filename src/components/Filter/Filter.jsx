import { useState, useEffect } from 'react';
import { Label } from 'components/Common/Common.styled';
import PropTypes from "prop-types";


export default function Filter({callback}){
  const [filter, setFilter] = useState('');

  useEffect(() => {
    callback(filter)
  }, [callback, filter])

  return (
      <Label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </Label>
    );
};

Filter.propTypes = {
  callback:PropTypes.func.isRequired,
}
