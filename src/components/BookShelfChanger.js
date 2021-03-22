import * as React from 'react';
import PropTypes from 'prop-types';

export function BookShelfChanger(props) {
    const [shelf, setShelf] = React.useState(props.book.shelf);
    const handleOnChange = event => {
        event.preventDefault();
        const newValue = event.target.value;
        setShelf(newValue);
        if(props.onBookShelfChange) {
            props.onBookShelfChange(newValue, props.book);
        }
    };
    return (
        <div className="book-shelf-changer">
            <select
                onChange={(event) => {
                    handleOnChange(event);
                }}
                value={shelf ? shelf : 'none'} >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>);
}

BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
};

export default BookShelfChanger;
