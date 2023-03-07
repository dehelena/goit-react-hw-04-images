// import PropTypes from 'prop-types';

import { StyledButton } from './ButtonStyled';

export const Button = ({ onLoadMore }) => (
  <StyledButton>
    <button type="button" className="btn" onClick={onLoadMore}>
      Load more
    </button>
  </StyledButton>
);
