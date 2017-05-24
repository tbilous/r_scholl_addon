import React, { DOM } from 'react';
import _ from 'lodash';

import Image from './Image';
import TextBox from './TextBox';
import Segment from './Segment';

const BlogItem = ({posts}) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post, key) => (
        React.createElement(
          Segment,
          {key},
          DOM.li(
            {
              style: {
                textAlign: 'center'
              }
            },
            React.createElement(TextBox, {post})
          ),
          DOM.li(null, React.createElement(Image, {post}))
        )
      )
    )
  )
);

export default BlogItem;
