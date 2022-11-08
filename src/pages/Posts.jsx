import React, { useEffect, useRef, useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import '../styles/App.css';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';

function Post() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (NewPost) => {
    setPosts([...posts, NewPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="Posts">
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyButton onClick={fetchPosts}>Обновить список товаров</MyButton>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Добавить товар
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      )}

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={'Каталог товаров'}
      />

      <div ref={lastElement} style={{ height: 20 }}></div>
    </div>
  );
}

export default Post;
