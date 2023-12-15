import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import profilePhoto from '../images/profile-photo.jpg';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  li {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  .active {
    border-bottom: 2px solid white;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="profile-section">
        <br />
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <h2>Ichsanul Kamil Sudarmi</h2>
        <p>
          Hai, saya Kamil. Seorang pengembang aplikasi yang memiliki pengalaman
          baru 1 tahun dalam pengembangan mobile dan website.
        </p>
      </div>
      <Nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
