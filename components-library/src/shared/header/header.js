import React from 'react';
import 'styled-components/macro';
import { Link } from 'react-router-dom';
import * as Styles from './header-styles';

const Header = () => (
  <Styles.HeaderDiv>
    <Styles.NavbarDiv>
      <div>
        <Link to='/' onClick={() => window.scrollTo(0, 0)}>
          <span
            css={`
              padding: 0 3rem;
            `}
          >
            GS UI Library
          </span>
        </Link>
      </div>
      <div>
        <Link to='/components-overview' onClick={() => window.scrollTo(0, 0)}>
          <span
            css={`
              padding-left: 2rem;
              padding-right: 1rem;
              @media (max-width: 700px) {
                padding: 0rem;
              }
            `}
          >
            Components
          </span>
        </Link>
        <Link to='/guides-overview' onClick={() => window.scrollTo(0, 0)}>
          <span
            css={`
              padding-left: 1rem;
              @media (max-width: 700px) {
                padding: 0rem;
              }
            `}
          >
            Guides
          </span>
        </Link>
      </div>
    </Styles.NavbarDiv>
  </Styles.HeaderDiv>
);

export default Header;
