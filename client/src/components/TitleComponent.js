import React from 'react';
import Helmet from 'react-helmet';

export default ({ title }) => {
    var defaultTitle = 'School Database Demo';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};
