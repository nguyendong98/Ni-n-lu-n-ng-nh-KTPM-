import React, { Fragment } from 'react';
import spinner from './spinner6.gif';
import './Spinner.scss'
export default () => (
  <Fragment>
    <div className="spinner">
        <img
            src={spinner}
            style={{ margin: 'auto', display: 'block', width: '120px', background: 'transparent' }}
            alt='Loading...'
        />
    </div>

  </Fragment>
);
