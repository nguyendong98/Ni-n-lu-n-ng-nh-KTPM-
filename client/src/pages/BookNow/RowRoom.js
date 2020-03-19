import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const RowRoom = ({room, allroom}) => {
    console.log(allroom)
    const rooms = allroom.filter(val => val.kind === room._id && val.status === false)
    return (
        <Fragment>
            <tr>
                <td>{room.name.toUpperCase()}</td>
                <td>{room.price} $</td>
                <td>
                    <select>
                        <option>-----Select----</option>
                        {rooms.map((val, index) => {
                            return (
                                <option key={index} value={val.name}>{val.name}</option>
                            )
                        })}
                    </select>
                </td>
            </tr>
        </Fragment>
    )
}

RowRoom.propTypes = {
    room: PropTypes.object.isRequired,
    allroom: PropTypes.array.isRequired
}

export default RowRoom
