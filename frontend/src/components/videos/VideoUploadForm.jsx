import React, { useState } from 'react';

export default function VideoUploadForm({ onSubmit, user }) {
  const [videoName, setVideoName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const onCreateVideoClick = (e) => {
    const videoData = { videoName, videoUrl, user };
    console.log('from upload form' + videoData);
    onSubmit(videoData).catch((err) => {
      alert('error occured');
    });
  };

  return (
    <>
      <h3>Create a video below</h3>
      <label>Video Upload area</label>

      <form onSubmit={onCreateVideoClick}>
        <div class="input-group mb-3">
          <textarea
            type="text"
            class="form-control"
            placeholder="Enter the name of the video"
            value={videoName}
            onChange={(e) => setVideoName(e.target.value)}
          />
        </div>
        <div class="input-group mb-3">
          <textarea
            type="text"
            class="form-control"
            placeholder="Enter the url for the video"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Create
        </button>

        {/* <button
          className="btn btn-primary"
          onClick={() => {
            onCreateClick({ videoName, user, videoUrl });
            setVideoName('');
          }}
        >
          Upload
        </button>*/}
      </form>
    </>
  );
}
