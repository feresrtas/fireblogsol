import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { toastWarnNotify } from '../helpers/toastNotify';



const BlogCard = ({ title, imgurl, content, id }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="card">
      <img className="card-img-top" src={imgurl} loading="lazy" alt="mgi" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            currentUser
              ? navigate('/details/' + id)
              : toastWarnNotify('Please log in to see detail');
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;

//
// blogList?.)