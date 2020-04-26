import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function LinkPrefetch({ children, href, as, prepare, ...props }) {
  return (
    <Link href={href} as={as} {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onMouseEnter={() => prepare()}>{children}</a>
    </Link>
  );
}

LinkPrefetch.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
  prepare: PropTypes.func.isRequired,
};

export default LinkPrefetch;
