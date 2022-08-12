const BlogForm = ({ blog, setBlog, handleSubmit }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setBlog({ ...blog, [id]: value });
  };

  return (
    <div className="d-flex px-5">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title display-4">Add New Blog</h1>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter a title"
            required
            value={blog.title}
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
            value={blog.imgurl}
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
            value={blog.content}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary form-control"
          value="Add"
        />
      </form>
    </div>
  );
};

export default BlogForm;