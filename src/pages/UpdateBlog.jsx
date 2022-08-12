import { useNavigate } from 'react-router-dom';
import { UpBlog, GetBlog } from '../helpers/firebase';
import { toastSuccessNotify } from '../helpers/toastNotify';
import { useParams } from 'react-router-dom';
// import { BlogContext } from '../contexts/BlogContext';
// import { details } from './Details';
function UpdateBlog() {

  const { id } = useParams();
  const { blogList } = GetBlog();
  const edit = blogList?.find?.(blog => blog.id === id);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    UpBlog(edit)
    toastSuccessNotify('Edited')
    navigate('/')
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex px-5">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title display-4">Edit Blog</h1>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter a title"
            required
            value={edit?.title}
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
            value={edit?.imgurl}
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
            value={edit?.content}
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