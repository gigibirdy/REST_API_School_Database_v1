import React from 'react';
import TitleComponent from './TitleComponent';

//if a course or a route can not be found, user will be redirect and
//webpage will render the following content
export default () => {
  return (
    <div>
    <TitleComponent title="Not Found"/>
    <hr/>
      <div className="bounds">
        <h1>Not Found</h1>
        <p>Sorry! We couldn't find the page you're looking for.</p>
      </div>
    </div>
  );
};
