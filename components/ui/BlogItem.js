import React, { DOM } from 'react';

import Image from './Image';
import TextBox from './TextBox';

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
    ,
    DOM.li(null, React.createElement(TextBox, {text: props.post.text})),
    DOM.li(null, React.createElement(Image, {image: props.post.image}))
  )
);


export default BlogItem;
