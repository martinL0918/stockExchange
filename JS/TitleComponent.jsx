import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent = ({ title }) => {
    var defaultTitle = 'User Info';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export { TitleComponent };