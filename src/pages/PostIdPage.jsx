import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, Comerror] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h2>Вы попали на страницу товара c ID = {params.id}</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id} {post.title}
        </div>
      )}
      <hr></hr>
      <h3> Отзывы</h3>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => {
            return (
              <div key={comm.id} style={{ marginTop: 15 }}>
                <h5>id{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
