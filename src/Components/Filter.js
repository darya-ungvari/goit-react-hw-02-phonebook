import s from './PhoneBook.module.css';

import PropTypes from 'prop-types';

// onChange - ф-ция, переданная как пропс в Апп. 
const Filter = ({ value, onChange, contacts }) => (

  <div className={s.container}>
    <p className={s.description}>Find contacts by name</p>
    <label>
      <input className={s.input} type='text' value={value} onChange={onChange} />
    </label>
    <ul>
            {contacts.map(({ id, name, number}) => (
                <li key={id}>
                    <span className={s.name}>{name}:</span> {number}
                </li>
            ))}
        </ul>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Filter;