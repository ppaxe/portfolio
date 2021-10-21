// eslint-disable-next-line

import React from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';


function Product(props) {

    const { id } = useParams();

    const StyledMain = styled.article`

        width:100vw;
        display:block;
        position:relative;
        overflow:hidden;
        ${props => props.theme.isVh()};

    `;
    
    const StyledInfo = styled.article`
    
        width:100vw;
        display:block;
        position:relative;
        overflow:hidden;

    `;

    const StyledButton = styled.div`

        position:fixed;
        z-index:99;
        bottom:0;
        left:0;
        dispaly:block;
        overflow:hidden;
        width:100%;

        div{

            display:flex;
            overflow:hidden;

            button{

                display:block;
                width:100%;
                background : ${props => props.theme.mainRed};
                text-align:center;
                ${props => props.theme.isColor('white')};
                font-size: 2.4rem;
                line-height:320%;

            }
        }
    `;

    return(
        <>
            <StyledMain>
                <div className="product__img">
                    <img src={ `http://ppaxe.kr/pc/contents/images/product/prod_${props.product[id].name}.png` } alt={ `${props.product[id].title} 제품 이미지` } />
                </div>
                <div className="product__info">
                    <h3>{ props.product[id].title.toUpperCase() }</h3>
                    <p>{ props.product[id].info }</p>
                    <p>W { props.product[id].price.toLocaleString() }</p>
                </div>
            </StyledMain>
            <StyledInfo>
                <div>
                    
                </div>
            </StyledInfo>
            <StyledButton>
                <div>
                    <button type="button" title="구매하기">ADD CART</button>
                </div>
            </StyledButton>
        </>
    )

}

export default Product;