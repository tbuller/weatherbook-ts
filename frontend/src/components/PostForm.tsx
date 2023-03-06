import React from 'react';
import { useState, useEffect } from 'react';

const PostForm = () => {

  const [content, setContent] = useState("");

  const handleContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  }

  return (
    <div>
    <form>
    <h3>Content of your post</h3>
    <input type="text" onChange={handleContent}/>
    </form>  
    </div>
  )
}

export default PostForm;