import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Add, AddShoppingCartOutlined } from '@mui/icons-material';
import {mobile} from '../responsive';
import { Link } from "react-router-dom";


const Container = styled.div`
height: 60px;
${mobile({height: "50px"})}
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding: "10px 0px"})}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}

`
const SearchContainer = styled.div`
border : 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
${mobile({width: "50px"})}

`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize: "24px"})}

`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex: 2, justifyContent: "center"})}

`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft: "10px"})}
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           <Left>
               {/* <Language>EN</Language> */}
               <SearchContainer>
                   <Input placeholder= "search"/>
                   <SearchIcon style={{color: 'grey', fontSize: '16px'}} />
               </SearchContainer>
           </Left>
           <Center>
               <Logo>URBANO</Logo>
           </Center>
           <Right>
            <MenuItem><Link to="/" style={{textDecoration: "none", color: "black"}}>Home</Link></MenuItem>

            <MenuItem><Link to="/productList" style={{textDecoration: "none", color: "black"}}>Products</Link></MenuItem>

            <MenuItem><Link to="/register" style={{textDecoration: "none", color: "black"}}>REGISTER</Link></MenuItem>
            <MenuItem><Link to="/login" style={{textDecoration: "none",  color: "black"}}>SIGN IN</Link></MenuItem>
            <MenuItem>
                <Badge badgeContent={3} color="primary">
                    <Link to="/cart" style={{textDecoration: "none",  color: "black"}}><AddShoppingCartOutlined /></Link>
                </Badge>
            </MenuItem>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
