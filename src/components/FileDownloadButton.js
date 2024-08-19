// FileUploadDownload.js
//This code just simulates how uploading/downloading will work. 
//Real intergration should be done by the backend team
import React, { useState } from 'react';

const FileUploadDownload = () => {
  const [file, setFile] = useState(null);

  const handleFileDownload = () => {
    if (file) {
      const url = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      alert('No file uploaded to download.');
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleFileDownload} disabled={!file}>
          Download
        </button>
      </div>
    </div>
  );
};

export default FileUploadDownload;
