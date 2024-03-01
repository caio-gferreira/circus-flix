import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title } from '../../styles/Carousel.styles';
import VideoCard from './VideoCard/VideoCard';

function VideoCardGroup({ category }) {
  const { title, color, videos } = category;


  return (
    <VideoCardGroupContainer>
      {title && (
        <Title style={{ backgroundColor: color || 'red' }}>
          {title}
        </Title>
      )}
      
      <VideoCardList>
        {videos.map((video, index) => {
          return (
            <li key={video.title}>
              <VideoCard
                index={index}
                videoTitle={video.title}
                videoURL={video.url}
                color={color}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;