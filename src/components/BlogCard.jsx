import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { toastWarnNotify } from '../helpers/toastNotify';

const BlogCard = ({ title, imgurl, content, id, author }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="card">
      <img className="card-img-top" src={imgurl} loading="lazy" alt="mgi" />
      <div className="card-body">
        {author ? (
          <>
            <h6>Author : {author}</h6>
          </>
        ) : (
          <h6>Author : Anonymus</h6>
        )}

        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p
          className="text-decoration-underline"
          onClick={() => {
            currentUser
              ? navigate('/details/' + id)
              : toastWarnNotify('Please log in to see detail');
          }}
        >
          Read More
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

//
// blogList?.)