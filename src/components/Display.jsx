import React, { useEffect, useState } from 'react';
import { CloudinaryContext, Video} from 'cloudinary-react';
import { Share } from 'react-twitter-widgets'


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
      <h2 className="display-heading text-center my-5">Check out our latest videos</h2>
      <div className="container row mx-auto">
        {
          videos.map(video => {
            return (
              <div className="col-md-6 col-lg-4 text-center" key={video.public_id}>
                <Video publicId={video.public_id} width="300" height="300" controls>
              </Video>
                  <div>
                    <p>Created at {video.created_at}</p>
                  </div>
                  <div>

                    <Share url={`https://res.cloudinary.com/omama/video/upload/v1/${video.public_id.replace(/\s/g, '%20')}.webm`}></Share>
                  </div>
            </div>
          )
        })
      }
              </div>
      
    </CloudinaryContext>
  )
}

export default Display
