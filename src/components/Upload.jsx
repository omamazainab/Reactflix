import React from 'react'
import { CloudinaryContext } from 'cloudinary-react'

const Upload = () => {

  window.cloudinary.setCloudName("omama");

  let myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'omama',
    uploadPreset: 'wjumhxyv',
    tags: ['videos']
  }, (error, result) => {
   
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
    }
  }
  )


  return (
    <CloudinaryContext cloudName="omama">
      <div className="my-5 text-center">
        <button 
          id="upload_widget" 
          className="upload-button"
          onClick={
            function () {
                myWidget.open();
              }
          }
        >
          Upload Videos
        </button>

                               
      </div>
    </CloudinaryContext>

  )
}

export default Upload
