import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background-color: ${(props) => props.bg};
  color: ${props => props.bg === 'blue' ? 'black' : 'white'};
  padding: 10px;
  border-radius: 5px;
  border: 0;
  margin: 20px;
  width:150px;
  &:hover {
    background-color: #dbab00;
    cursor: pointer;
  }
`;

let Box = styled.div`
  background: black;
  color: white;
  padding: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  id = parseInt(id);
  let checkedProduct = props.신발.find(function (product) {
    return product.id === id;
  });

  return (
    <>
      <Box>
        <h1>On Sale 4.17 ~ </h1>
        <YellowBtn bg="#FFC800">Learn More</YellowBtn>
      </Box>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                "https://codingapple1.github.io/shop/shoes" + (id + 1) + ".jpg"
              }
              width="100%"
              alt="신발사진"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{checkedProduct.title}</h4>
            <p>{checkedProduct.content}</p>
            <p>{checkedProduct.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
