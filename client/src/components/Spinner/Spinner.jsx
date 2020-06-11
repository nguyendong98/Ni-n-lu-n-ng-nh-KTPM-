import React, { Fragment } from 'react';
import spinner from './spinner3.gif';
import './Spinner.scss'
export default () => (
  <Fragment>
    <div className="spinner">
        <img
            src={spinner}
            style={{ margin: 'auto', display: 'block', width: '100px' }}
            alt='Loading...'
        />
    </div>

  </Fragment>
);
