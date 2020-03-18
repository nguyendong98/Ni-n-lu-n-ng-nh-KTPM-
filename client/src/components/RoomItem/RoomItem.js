import React from 'react'
import PropTypes from 'prop-types'

const RoomItem = ({room}) => {
    return (
        <div className='col-12 col-lg-4'>
            <div className='card'>
                <img src={room.image} 
                    className='card-img-top' alt='...' />
                <div className='card-body'>
                    <h5 className='card-title title'>{room.name.toUpperCase()}</h5>
                    <p className='card-text detail-text'>
                        {room.text}
                    </p>
                    <a href='/' className='btn btn-success'>
                        See more
                    </a>
                </div>
            </div>
        </div>
    )
}

RoomItem.propTypes = {
    room: PropTypes.object.isRequired
}

export default RoomItem
