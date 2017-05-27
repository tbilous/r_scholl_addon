import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({posts}) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post) => (
        React.createElement(
          BlogItem,
          { key: post.id, post }
        )
      )
    )
  )
);

export default BlogList;
