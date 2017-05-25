import React, { DOM } from 'react';

const BlogItem = (props) => (
  DOM.ul(
    {
      style: {
        listStyle: 'none',
        border: '1px solid red',
        padding: '5px',
        textAlign: 'center'
      }
    }
    , props.children
  )
);

export default BlogItem;
