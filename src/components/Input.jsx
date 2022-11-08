import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';

const Input = () => {
  /* const [value, setValue] = useState('Текст в инпуте');

  function changeValue(event) {
    setValue(event.target.value);
  }*/

  return (
    <div>
      <form>
        <input
          type="text"
          /*value={value}
        onChange={changeValue}*/
          placeholder={'Название поста'}
        />
        <input
          type="text"
          /*value={value}
        onChange={changeValue}*/
          placeholder={'Описание поста'}
        />
        <MyButton>Добавить пост</MyButton>
      </form>
    </div>
  );
};

export default Input;
