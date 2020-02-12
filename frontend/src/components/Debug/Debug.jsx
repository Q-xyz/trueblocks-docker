import React, { Fragment } from 'react';

//----------------------------------------------------------------------
function Debug({ state, fieldList, meta }) {
  return (
    <Fragment>
      <hr />
      <a href={'http://localhost:8080/' + state.cur_submenu.route + '?' + state.cur_submenu.query} target="__blank">
        Data
      </a>
      <hr />
      <div>{'state: ' + JSON.stringify(state)}</div>
      <hr />
      <div>{'fields: ' + JSON.stringify(fieldList)}</div>
      <hr />
      <div>{'meta: ' + JSON.stringify(meta)}</div>
      <hr />
    </Fragment>
  );
}

//----------------------------------------------------------------------
export default Debug;
