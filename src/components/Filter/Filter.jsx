import { Label } from 'components/Common/Common.styled';
import PropTypes from "prop-types";


export default function Filter({callback}){

  return (
      <Label>
        Find contacts by name
        <input
          type="text"
          onChange={e => callback(e.target.value)}
        />
      </Label>
    );
};

Filter.propTypes = {
  callback:PropTypes.func.isRequired,
}
