import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const NewPost = {
      ...post,
      id: Date.now(),
    };
    create(NewPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder={'Название товара'}
      />
      <MyInput
        value={post.body}
        /*ref={bodyInputRef}*/
        type="text"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder={'Описание товара'}
      />
      <MyButton onClick={addNewPost}>Добавить товар</MyButton>
    </form>
  );
};

export default PostForm;
