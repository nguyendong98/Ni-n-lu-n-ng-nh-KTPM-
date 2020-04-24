import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Room = ({ rooms }) => {
  return (
    <div className='col-lg-4 col-md-6 col-12'>
      <div className='card'>
        <img className='card-img-top' src={rooms.image} alt='Cardimagecap' />
        <div className='card-body'>
          <h5 className='card-title'>{rooms.name}</h5>
          <h3 className='card-price'>
            {rooms.price}$<span>/Pernight</span>
          </h3>
          <table>
            <tbody>
              <tr>
                <td className='r-0'>Size:</td>
                <td>{rooms.size} ft</td>
              </tr>
              <tr>
                <td className='r-0'>Capacity:</td>
                <td>Max persion {rooms.capacity}</td>
              </tr>
              <tr>
                <td className='r-0'>Bed:</td>
                <td>{rooms.bed}</td>
              </tr>
              <tr>
                <td className='r-0'>Services:</td>
                <td>
                  {rooms.services.map((val, index) => {
                    return index === rooms.services.length - 1
                      ? val + ',.. '
                      : val + ', ';
                  })}
                </td>
              </tr>
            </tbody>
          </table>

          <Link to={`/roomdetail/${rooms._id}`} className='card-details'>
            MORE DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
};

Room.propTypes = {
  rooms: PropTypes.object.isRequired,
};

export default Room;
