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
z-index: 9;
background-color: #2c3e50;
/* background-color: linear-gradient(to right, #2c3e50, #4E6E9D); */
/* background: linear-gradient(to right, #2c3e50, #4E6E9D) url('../../static/__7.jpg'); */
/* background-color: ${props => props.scroll && `rgba(20,20,20,.4)`}; */
background-image: url('https://res.cloudinary.com/kevinpena/image/upload/v1552189534/kpblog/nzklhp9svft52jcqeoii.jpg');
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
width: 100%;
justify-content: center;
font-size: 1.5rem;
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


@media (max-width: 700px) {
  flex-direction: column;
  align-content: center;
  justify-content: center;
  /* position: relative; */
  position: absolute;
  top: -300px;
  font-size: 10px;
  padding: 0 10px;
  box-shadow: 1px 1px 1px rgba(0,0,0, 0.4);
}

@media(max-width: 900px) {
  font-size: 1.3rem;
}
@media(max-width: 1500px) {
  font-size: 1.5rem;
  ${props => props.scroll && `
position: fixed;
top: 0;
border-bottom: 5px solid #494e52;
`}
}

`;

export default class Nav extends Component {

  render() {


    return (
      <User>
        {({ data: { me } }) => (
          <NavStyles  
          scroll={this.props.scroll} 
          mobile={this.props.mobile} 
          className={`${this.props.mobile && 'mobile'} ${this.props.open && 'open'}`}>
            <Link href={{ pathname: '/tag', query: { hash: 'work' } }}>
            <a>Work</a>
            </Link>
            <Link href={{ pathname: '/tag', query: { hash: 'lifestyle' } }}>
            <a>Lifestyle</a>
            </Link>
            <Link href={{ pathname: '/tag', query: { hash: 'travel' } }}>
            <a>Travel</a>
            </Link>
            <Link href={{ pathname: '/tag', query: { hash: 'family' } }}>
            <a>Family</a>
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
