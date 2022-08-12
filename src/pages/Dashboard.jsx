// import { useContext, useState } from 'react';
import BlogCard from '../components/BlogCard';
// import Icerik from '../components/icerik';
import { GetBlog } from '../helpers/firebase';
// import { AuthContext } from '../contexts/AuthContext';


{/* <h1>***********  DASHBOARD  ****************</h1> */ }
const Dashboard = () => {
  const { isLoading, blogList } = GetBlog();
  // console.log(blogList)
  // const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {isLoading ? (
          <div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          blogList?.map((item, id) => <BlogCard key={item.id} {...item} />)
        )}
      </div>
    </>
  );
};

export default Dashboard;
