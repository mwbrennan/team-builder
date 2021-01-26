import React from 'react';

export default function User(props) {
    const { details } = props

    return (
        <div className='userCard'>
            <h2>{details.name} </h2>
            <p>Email: {details.email} </p>
            <p>Role: {details.role} </p>
        </div>
    )
}
