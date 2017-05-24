import React, { DOM } from 'react';

const TextBox = ({post}) => (
  DOM.span(null, post.text)
);

export default TextBox;
