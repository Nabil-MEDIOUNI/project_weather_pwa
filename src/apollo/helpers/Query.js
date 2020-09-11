import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

const processQuery = (error, loading, children, other) => {
  if (error) {
    return <p>Error!</p>;
  }
  if (loading) return <p>Loading...</p>;

  return children(other);
};

const CustomQuery = ({ children, ...props }) => (
  <Query {...props}>
    {({ loading, error, ...other }) => processQuery(error, loading, children, other)}
  </Query>
);

CustomQuery.propTypes = {
  children: PropTypes.func.isRequired,
  loadingComponent: PropTypes.func,
};

CustomQuery.defaultProps = {
  loadingComponent: null,
};

export default CustomQuery;
