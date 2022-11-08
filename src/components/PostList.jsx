import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center', width: '100%' }}>
        Товары не были найдены
      </h1>
    );
  }

  return (
    <div className="post_list">
      <h1 style={{ textAlign: 'center', marginTop: '10px' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
