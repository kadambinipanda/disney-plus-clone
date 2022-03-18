import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {auth, provider} from '../firebase'
import{selectUserName, selectUserPhoto, setUserlogin, setSignOut} from '../features/user/userSlice'

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
       auth.onAuthStateChanged(async (user)=>{
           if(user){
                dispatch(setUserlogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/Home")
           }
       })
    },[])

    const signIn =() =>{
        auth.signInWithPopup(provider).then((result)=>{
            let user = result.user
                dispatch(setUserlogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
            history.push("/Home")
        })
    }

    const signOut = ()=>{
        auth.signOut().then(()=>{
            dispatch(setSignOut());
            history.push("/Login")
        })
    }
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
         {
             !username ?(
                 <LoginContainer>
                     <Login onClick={signIn}>Login</Login>
                 </LoginContainer>
             ):
             <>
                        <NavMenu>
                        <a href="/Home">
                            <img src="/images/home-icon.svg"/>
                            <span>HOME</span>
                        </a>
                        <a>
                            <img src="/images/search-icon.svg"/>
                            <span>SEARCH</span>
                        </a>
                        <a>
                            <img src="/images/watchlist-icon.svg"/>
                            <span>WATCHLIST</span>
                        </a>
                        <a>
                            <img src="/images/original-icon.svg"/>
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/Movies">
                            <img src="/images/movie-icon.svg"/>
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <img src="/images/series-icon.svg"/>
                            <span>SERIES</span>
                        </a>

                    </NavMenu>
                    <SignOut>
                    <UserImg src={userPhoto}/>
                    <DropDown>
                        <span onClick={signOut}>  Sign out</span>
                    </DropDown>
                    </SignOut>
             </>
         }

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:70px;
    background-color:#090b13;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 36px;
    letter-spacing:16px;
    z-index: 3;
`


const Logo = styled.img`
        width: 80px;
    `

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items:center;

    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor: pointer;
        font-size: 13px;
        letter-spacing: 1.42px;
        color:white;
        text-decoration:none;
 

        img{
            height:20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background:white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
    
    /* @media (max-width: 768px) {
        display: none;
    } */
`

const UserImg=styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor: pointer;
`

const Login = styled.div`
    border:1px solid #f9f9f9;
    padding:8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform:uppercase;
    background-color: rgba(0,0,0,0.6);
    transitions: all 0.2s ease 0s;
    cursor:pointer;

    &:hover{
        background-color: #f9f9f9;
        color:#000;
        border-color: transparent;
    }
`

const LoginContainer = styled.div`
    display:flex;
    flex:1;
    justify-content:flex-end;
`
const DropDown = styled.div`
    position:absolute;
    top:48px;
    background:rgb(19,19,19);
    border:1px solid rgb(151,151,151,0.34);
    border-radius:4px;
    box-shadow:rgb(0 0 0/50%) 0px 0px 18px 0px;
    padding:10px;
    font-size:14px;
    letter-spacing:3px;
    width:100px;
    opacity:0;
`
const SignOut = styled.div`
position:relative;
height:48px;
width:48px;
display:flex;
cursor: pointer;
align-items:center;
justify-content:center;
${UserImg}{
    border-radius:50%;
    width:100%;
    height:100%;
}
&:hover{
    ${DropDown}{
        opacity:1;
        transition-duration:1s;
    }
}

`