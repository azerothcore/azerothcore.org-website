import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NOOP = () => {};
export default function LinkPrefetch({
  children,
  href,
  as,
  prepare = NOOP,
  className,
  ...props
}) {
  const [fetched, setFetched] = useState(false);

  const prefetchData = () => {
    if (!fetched) {
      prepare();
      setFetched(true);
    }
  };

  return (
    <Link href={href} as={as} {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={className} onMouseEnter={prefetchData}>
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
