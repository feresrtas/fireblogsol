import { useParams } from 'react-router-dom';
import { GetBlog } from '../helpers/firebase';
import { useNavigate } from 'react-router-dom';

const Details = ({ imgurl, title, content }) => {
  const { blogList } = GetBlog();
  const navigate = useNavigate();
  const { id } = useParams();
  const details = blogList?.find?.(blog => blog.id === id)
  // console.log(blogList.find(blog=> blog.id === id))

  return (
    <div className="d-flex flex-column justify-content-center p-5">
      <img className='detail-img img-fluid' src={details?.imgurl} loading="lazy" alt="mgi" />
      <h5>{details?.title}</h5>
      <p>{details?.content}</p>
      <button className='btn btn-primary' onClick={() => { navigate(-1) }}>Main Page</button>
    </div>
  );
};

export default Details;