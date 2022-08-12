import { useParams } from 'react-router-dom';
import { DelBlog, GetBlog } from '../helpers/firebase';
import { useNavigate } from 'react-router-dom';
import { toastWarnNotify } from '../helpers/toastNotify';
// import { useContext, useState } from 'react';
// import NewBlog from './NewBlog';
// import UpdateBlog from './UpdateBlog';
// import BlogForm from '../components/BlogForm';
// import BlogCard from '../components/BlogCard';



const Details = ({ imgurl, title, content }) => {
  const { blogList } = GetBlog();
  const navigate = useNavigate();
  const { id } = useParams();
  const details = blogList?.find?.(blog => blog.id === id);
  // console.log(blogList.find(blog=> blog.id === id))

  return (
    <div className="d-flex flex-column justify-content-center p-5">
      <img className='detail-img img-fluid' src={details?.imgurl} loading="lazy" alt="mgi" />
      <h5>{details?.title}</h5>
      <p>{details?.content}</p>
      <div className="btn-group" role="group" aria-label="gr">
        <button type="button" className="btn btn-secondary" onClick={() => { navigate(-1) }}>Main Page</button>
        <button type="button" className="btn btn-secondary" onClick={() => {
          navigate(-1/*'/updateblog/'+id*/);
          toastWarnNotify("Edit isn't ready yet :|")
        }}>Edit</button>
        <button type="button" className="btn btn-secondary" onClick={() => { DelBlog(id); navigate(-1) }}>Delete</button>
      </div>
    </div>
  );
};

export default Details;