import React from 'react';
import Link from 'next/link';
import { Link as RRLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export function LinkPrefetch({
  children,
  href,
  as,
  prepare,
  className,
  ...props
}) {
  return (
    <Link href={href} as={as} {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={className} onMouseEnter={() => prepare()}>
        {children}
      </a>
    </Link>
  );
}

export function RRLinkPrefetch({ children, to, prepare }) {
  return (
    <RRLink to={to} onMouseEnter={() => prepare()}>
      {children}
    </RRLink>
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

RRLinkPrefetch.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  prepare: PropTypes.func.isRequired,
};
