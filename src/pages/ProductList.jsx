import React from "react";
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import {mobile} from "../responsive";


const Container = styled.div``
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}

`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight: "0px"})}

`
const Select = styled.select`
margin-right: 20px;
padding: 10px;
${mobile({margin: "10px 0px"})}

`
const Option = styled.option`

`

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Red</Option>
                    <Option>Yellow</Option>
                    <Option>Blue</Option>
                    <Option>Pink</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XXL</Option>
                    <Option>XL</Option>
                    <Option>L</Option>
                    <Option>M</Option>
                    <Option>S</Option>
                    <Option>XS</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products
                </FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  );
};

export default ProductList;
