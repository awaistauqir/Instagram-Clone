import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import BackDrop from "../Styles/Modal";
import Card from "../Styles/Card";
import { db, storage } from "../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import LinearProgress from "@mui/material/LinearProgress";
import { Button } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { useSelector } from "react-redux";

const AddModal = (props) => {
  const imageRef = useRef();
  const captionRef = useRef();
  const user = useSelector((state) => state.user.user);
  const [uploadProgress, setUploadProgress] = useState(-1);
  const [caption, setCaption] = useState("");
  const addPostHandler = (e) => {
    const image = imageRef.current.files[0];
    if (imageRef.current.files[0]) {
      const storageRef = ref(storage, image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
          console.log("Upload is " + uploadProgress, progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        async () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addDoc(collection(db, "posts"), {
              username: user.username,
              caption: caption,
              postImage: downloadURL,
              comments: [],
              timestamp: serverTimestamp(),
              photoURL: user.photoURL,
            });
          });

          setTimeout(() => {
            props.onHide();
          }, 300);
        }
      );
    }

    console.log(image);
  };
  const cancelHandler = (e) => {
    props.onHide();
  };
  return (
    <div>
      <BackDrop onClick={cancelHandler} />
      <Card>
        <Modal>
          <form onSubmit={(e) => e.preventDefault()}>
            <Button variant="contained" component="label">
              Upload File
              <input
                type="file"
                hidden
                name="img"
                accept="image/*"
                ref={imageRef}
              />
            </Button>
            <StyledInput>
              <input
                type="text"
                placeholder="Add Caption"
                ref={captionRef}
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                }}
              />
            </StyledInput>

            {uploadProgress >= 0 && (
              <>
                <small>Uploading</small>
                <StyledProgress variant="determinate" value={uploadProgress} />
              </>
            )}

            <div>
              <button onClick={cancelHandler}>Cancel</button>
              <button onClick={addPostHandler} type="submit">
                Add Post
              </button>
            </div>
          </form>
        </Modal>
      </Card>
    </div>
  );
};

export default AddModal;
const fadeIn = keyframes`{
	from {
		opacity:0;
	}
	to {
		opacity:1;
	}
}`;

const Modal = styled.div`
  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: fit-content;
  z-index: 1000;
  background: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }
  input {
    border: none;
    outline: none;
    background: none;
    width: 100%;
    margin-bottom: 20px;
    &::placeholder {
      text-align: center;
    }
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
    button {
      outline: none;
      border: none;
      background: none;
      color: #363636;
      cursor: pointer;
      font-size: 18px;

      padding: 5px 10px;
      border-radius: 5px;
      color: #f3f3f3;
      &:first-child {
        background: #d9534f;
      }
      &:last-child {
        background: #0095f6;
      }
    }
  }
`;
const StyledProgress = styled(LinearProgress)`
  /* margin: 10px 5px; */
`;

const StyledInput = styled.div`
  border-radius: 15px;
  border: 1px solid gray;
  padding-top: 20px;
  padding-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;
