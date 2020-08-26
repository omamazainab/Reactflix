import React, { useEffect, useState } from 'react';
import { CloudinaryContext /*, Transformation*/, Video } from 'cloudinary-react';

const Display = () => {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('https://res.cloudinary.com/omama/video/list/videos.json')
      .then(res => res.json())
      .then(
        (result) => {
          setVideos(result.resources)
          console.log(result.resources)
        },

        (error) => {
          console.log('error')
        }
      )
  }, []);

  return (
    <CloudinaryContext cloudName="omama">
      <h2 className="text-center">Check out our latest videos</h2>
      <div className="container row mx-auto">
      {
        videos.map(video => {
          return (
            <div className="col-md-4">
              <Video publicId={video.public_id} width="300" height="300" controls></Video>
            </div>
          )
        })
      }
      </div>
      
    </CloudinaryContext>
  )
}

export default Display
