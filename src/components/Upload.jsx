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
      <div>
        <button 
          id="upload_widget" 
          className="cloudinary-button"
          onClick={
            function () {
                myWidget.open();
              }
          }
        >
          Upload files
        </button>

                               
      </div>
    </CloudinaryContext>

  )
}

export default Upload
