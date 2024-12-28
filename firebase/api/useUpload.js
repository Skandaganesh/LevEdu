import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";

const useUpload = () => {
//   const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

  const handleUpload = async (file) => {
    if (!file) return "";

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error("Upload failed:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          console.log("File available at:", downloadURL);
        });
      } 
    );
    return "";
  };
  return {handleUpload, progress, url};
};

export default useUpload;
