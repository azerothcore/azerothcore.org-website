import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

function CardFeature({ icon, title, text }) {
  return (
    <div className="card-feature-container">
      <div className="card-feature-title">
        <FontAwesomeIcon
          icon={icon}
          className="card-feature-icon"
          size="lg"
        />
        <h3>{title}</h3>
      </div>
      <ReactMarkdown source={text} />
      <style jsx>{`
        .card-feature-container {
          padding: 0 10px;
        }
        .card-feature-title {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          margin-top: 20px;
        }
      `}</style>
      <style jsx global>
        {`
          .card-feature-title .card-feature-icon {
            margin-right: 5px;
          }
        `}
      </style>
    </div>
  );
}

CardFeature.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardFeature;
