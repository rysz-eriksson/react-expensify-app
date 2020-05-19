import React from 'react' 
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>
        {numeral(amount / 100).format('$0,0.00')}   
         - {moment(createdAt).format('Do MMMM YYYY')}</p>
        <Link to={`/edit/${id}`}>Edit {description}</Link>
    </div>
);

export default ExpenseListItem;