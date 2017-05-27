import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from './BlogItem';


class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { posts } = this.props;
    return (
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
  }
}

export default BlogList;
