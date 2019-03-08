import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import User from '../User';
import SignOut from '../Login/SignOut';

function hasPermission(user, permissionsNeeded) {
  const matchedPermissions = user.permissions.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave)
  );
  if (!matchedPermissions.length) {
    return false;
  } else {
    return true;
  }
}

const NavStyles = styled.ul`
z-index: 999;
background-color: #2c3e50;
/* background-color: linear-gradient(to right, #2c3e50, #4E6E9D); */
/* background: linear-gradient(to right, #2c3e50, #4E6E9D) url('../../static/__7.jpg'); */
/* background-color: ${props => props.scroll && `rgba(20,20,20,.4)`}; */
background-image: url('../../static/__7.jpg');
background-repeat: no-repeat;
background-attachment: fixed;
/* background-position: fixed; */
background-size: cover;
/* background */

${props => props.scroll && `
position: fixed;
top: 0;
border-bottom: 5px solid #494e52;
`}

margin: 0;
padding: 0;
display: flex;
justify-self: end;
font-size: 2rem;
box-shadow: 1px 1px 1px rgba(0,0,0, 0.4), inset 1px 1px 1px rgba(0,0,0, 0.4);
a,
button {
  /* + */
  font-family: 'radnika_next';
  color: ${props => props.theme.lightgrey};
  text-shadow: 1px 1px 1px rgba(20,20,20,.4);
  /* + */
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1em;
  background: none;
  border: 0;
  cursor: pointer;
  @media (max-width: 700px) {
    font-size: 10px;
    padding: 0 10px;
  }
  &:before {
    height: 2px;
    background: ${props => props.theme.blue};
    content: '';
    width: 0;
    position: absolute;
    transform: translateX(50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    left: 50%;
    margin-top: 2rem;
  }
  &:after {
    height: 2px;
    background: ${props => props.theme.blue};
    /* background: ${props => props.theme.blue}; */
    content: '';
    width: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    left: 50%;
    margin-top: 2rem;
  }
  
  &:hover,
  &:focus {
    outline: none;
    &:after {
      width: calc(100% - 60px);
    }
  @media (max-width: 700px) {
      width: calc(100% - 10px);
  }
  }
}
@media (max-width: 1300px) {
  width: 100%;
  justify-content: center;
  font-size: 1.5rem;
}
@media (max-width: 700px) {
  flex-direction: column;
  align-content: center;
  justify-content: center;
  /* position: relative; */
  position: absolute;
  top: -300px;

}
`;

export default class Nav extends Component {

  render() {


    return (
      <User>
        {({ data: { me } }) => (
          <NavStyles scroll={this.props.scroll}>
            <Link href='/work'>
              <a>
                Work
          </a>
            </Link>
            <Link href='/lifestyle'>
              <a>
                Lifestyle
          </a>
            </Link>
            <Link href='/travel'>
              <a>
                Travel
          </a>
            </Link>
            <Link href='/family'>
              <a>
                Family
          </a>
            </Link>


            {me && (
              <>

                {
                  hasPermission(me, ['ADMIN']) ? <Link href="/createpost"><a>Post</a></Link> : ''
                }
                <SignOut />
              </>
            )}

            {!me && (
              <Link href='/login'>
                <a>
                  Login
        </a>
              </Link>
            )}

          </NavStyles>
        )}
      </User>
    )
  }
}
