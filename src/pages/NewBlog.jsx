import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import { AddBlog } from '../helpers/firebase';
import { toastSuccessNotify } from '../helpers/toastNotify';

const initialValues = { title: '', imgurl: '', content: '', author: '' };

function NewBlog() {

  const [blog, setBlog] = useState(initialValues);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(blog);
    toastSuccessNotify('New blog added');
    navigate('/')
  };

  return (
    <div>
      <BlogForm blog={blog} setBlog={setBlog} handleSubmit={handleSubmit} />
    </div>
  );
}

export default NewBlog;