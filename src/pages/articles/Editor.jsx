import React, { useState } from "react";
import Header from "../../components/Header";
import {Box,TextField,Button} from "@mui/material";
import ReactQuill from "react-quill";
import converToBase64 from "../../helper/convert";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { validateArticle } from "../../helper/validate";
import { publishArticle } from "../../helper/helper";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    [{ color: [] }],
    [{ align: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

function Editor() {
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  const onUpload = async (e) => {
    const base64 = await converToBase64(e.target.files[0]);
    setFile(base64);
  };


  const formik = useFormik({
    initialValues:{
      title:'',
    },
    validate:validateArticle,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values => {
      values = Object.assign(values,{ coverImage: file, content:content })
      let articlePromise = publishArticle(values);
      toast.promise(articlePromise,{
        loading:'Loading...',
        success: "Published successfully.",
        error: "Could not publish..!"
      })
    }
  })


  return (
    <Box m={"20px"}>
      <Toaster position='top-right' reverseOrder='false' />
      <Header title={"Text Editor"} subtitle={"Write & Publish Articles."} />
      <Box my={3} component={"form"} onSubmit={formik.handleSubmit} >
        <Box
          my={2}
          width="200px"
          position={"relative"}
          className="imageUpload"
        >
          <img
            src={file || process.env.PUBLIC_URL + "/assets/coverImage.png"}
            width={200}
            alt="coverImage"
          />

          <label htmlFor="profile">
            <input
              type="file"
              className="imageUpload"
              accept="image/*"
              onChange={onUpload}
            />
          </label>
        </Box>
        <TextField id="filled-basic" label="Title" fullWidth variant="filled" {...formik.getFieldProps('title')} />
        <ReactQuill
          style={{height:"30vh"}}
          theme="snow"
          value={content}
          placeholder={"Write the content here..."}
          onChange={setContent}
          modules={modules}
        />
        <Button variant="contained" type="submit" fullWidth sx={{my:2,backgroundColor:"#42a5f5"}} >Publish</Button>
      </Box>
    </Box>
  );
}

export default Editor;
