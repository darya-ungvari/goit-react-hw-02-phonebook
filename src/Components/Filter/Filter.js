import PropTypes from 'prop-types'

// props -  object! {}
// props.onChangeFilter
const Filter = ({ onChangeFilter })  => {
    

    return(
        <input  onChange={onChangeFilter}></input>
    )
}

Filter.propTypes = {
    onChangeFilter: PropTypes.func.isRequired
}



export default Filter;