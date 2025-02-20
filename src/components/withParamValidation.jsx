import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { validateIdParam } from '@/utils/paramValidator';

// HOC to validate params before rendering
const withParamValidation = (Component) => {
  return (props) => {
    const { id } = useParams();

    if (!validateIdParam(id)) {
      return <Redirect to="/error" />;  // Redirect to error page if invalid
    }

    return <Component {...props} />;
  };
};

export default withParamValidation;
