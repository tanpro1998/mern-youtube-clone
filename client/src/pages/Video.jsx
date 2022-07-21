import React, { useState } from "react";
import styled from "styled-components";

import Card from "../components/Card";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const VideoWrapper = styled.div``;

const Content = styled.div`
  flex: 5;
`;

const Title = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  margin: 20px 0 10px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 30px;
  font-size: 14px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const Text = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h4`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ChannelCounter = styled.span`
  font-size: 14px;
`;

const Subscribes = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Subscribe = styled.button`
  padding: 10px 15px;
  text-transform: uppercase;
  background-color: red;
  border: none;
  color: wheat;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

const Recomment = styled.div`
  flex: 2;
`;

const Video = () => {
  const [subscribe, setSubscribe] = useState(false);
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            src="https://www.youtube.com/embed/Rvd8oo7GBg8"
            frameborder="0"
            width="100%"
            height="720"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Test Title"
          ></iframe>

          <Title>Test Video</Title>
          <Details>
            <Info>2,000,000 views - July 06, 2022</Info>
            <Buttons>
              <Button>
                <ThumbUpOutlinedIcon />
                <Text>500</Text>
              </Button>
              <Button>
                <ThumbDownOffAltOutlinedIcon />
                <Text>DISLIKE</Text>
              </Button>
              <Button>
                <ReplyOutlinedIcon />
                <Text>SHARE</Text>
              </Button>
              <Button>
                <ContentCutOutlinedIcon />
                <Text>CLIP</Text>
              </Button>
              <Button>
                <SaveAltOutlinedIcon />
                <Text>SAVE</Text>
              </Button>
              <Button>
                <MoreHorizOutlinedIcon />
              </Button>
            </Buttons>
          </Details>
          <Hr />

          <Channel>
            <ChannelInfo>
              <Img src="https://howthere.org/wp-content/uploads/2022/04/Shroud-Gaming-Setup-PC-Maus-Tastatur-Monitor-Headset-usw.jpg" />
              <ChannelDetail>
                <ChannelName>
                  Flash
                  <CheckCircleIcon style={{ fontSize: 16, color: "gray" }} />
                </ChannelName>
                <ChannelCounter>200 N subscribers</ChannelCounter>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribes>
              <Subscribe
                onClick={() => setSubscribe(!subscribe)}
                style={{ backgroundColor: subscribe ? "gray" : "red" }}
              >
                {subscribe ? "Subscribed" : "Subscribe"}
              </Subscribe>
              {subscribe && <NotificationsNoneIcon />}
            </Subscribes>
          </Channel>
        </VideoWrapper>
      </Content>
      <Recomment>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recomment>
    </Container>
  );
};

export default Video;
