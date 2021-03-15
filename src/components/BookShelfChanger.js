import * as React from 'react';
import PropTypes from 'prop-types';

export function BookShelfChanger(props) {
    const handleOnChange = event => {
        event.preventDefault();
        const newValue = event.target.value;
        if(props.onBookShelfChange) {
            props.onBookShelfChange(newValue);
        }
    };
    return (
        <div className="book-shelf-changer">
            <select onChange={handleOnChange} value={props.selectedValue}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>);
}

BookShelfChanger.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
};

export default BookShelfChanger;
