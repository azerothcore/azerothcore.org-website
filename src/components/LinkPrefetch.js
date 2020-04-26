import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function LinkPrefetch({ children, href, as, prepare, className, ...props }) {
  return (
    <Link href={href} as={as} {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={className} onMouseEnter={() => prepare()}>
        {children}
      </a>
    </Link>
  );
}

LinkPrefetch.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
  prepare: PropTypes.func.isRequired,
  className: PropTypes.string,
};

LinkPrefetch.defaultProps = {
  className: '',
};

export default LinkPrefetch;
