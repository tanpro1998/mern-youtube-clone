import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 360px;
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "200px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 5px;
  flex: 1;
`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Desc = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);
  console.log(channel);
  return (
    <Link to="/:id" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://st.quantrimang.com/photos/image/2021/09/17/thiet-lap-video-youtube-hien-thi-vua-voi-man-hinh700.jpg"
        />
        <Details type={type}>
          <ChannelImg
            type={type}
            src="https://howthere.org/wp-content/uploads/2022/04/Shroud-Gaming-Setup-PC-Maus-Tastatur-Monitor-Headset-usw.jpg"
          />
          <Desc>
            <Title>Test Descriptions</Title>
            <ChannelName>Shroud</ChannelName>
            <Info>1,000,000 views - 1 day ago</Info>
          </Desc>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
