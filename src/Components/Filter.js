import s from './PhoneBook.module.css';

import PropTypes from 'prop-types';

// onChange - ф-ция, переданная как пропс в Апп. 
const Filter = ({ value, onChange }) => (
  <label>
    <input className={s.input} type='text' value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Filter;