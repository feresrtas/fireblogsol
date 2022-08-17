import { useNavigate } from 'react-router-dom';
import { UpBlog, GetBlog } from '../helpers/firebase';
import { toastSuccessNotify } from '../helpers/toastNotify';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const initialValues = { title: '', imgurl: '', content: '', author: '' };

function UpdateBlog() {

  const { id } = useParams();
  const { blogList } = GetBlog();
  useEffect(() => {
    if (blogList) {
      const blog = blogList.find((blog) => blog.id === id);
      if (blog) {
        setBlog(blog);
      }
    }
  }, [id, blogList]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    UpBlog(blog)
    toastSuccessNotify('Edited')
    navigate('/')
  };

  const [blog, setBlog] = useState(initialValues);  //ERR*********************
  const handleChange = (e) => {
    e.preventDefault();
    // edit[id] = value;
    const { id, value } = e.target;
    setBlog({ ...blog, [id]: value });
  };

  return (
    <div className="d-flex px-5">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title display-4">Edit Blog</h1>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter your name"
            required
            value={blog?.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter a title"
            required
            value={blog?.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imgurl"
            placeholder="Enter your image URL"
            required
            value={blog?.imgurl}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            type="text"
            className="form-control"
            rows="6"
            id="content"
            placeholder="Enter your content"
            required
            value={blog?.content}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary form-control"
          value="Edit"
        />
      </form>
    </div>
  );
}

export default UpdateBlog;