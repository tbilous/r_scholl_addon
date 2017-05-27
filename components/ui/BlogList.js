import React, { Component } from 'react';

import _ from 'lodash';

import BlogItem from './BlogItem';


class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        {
          _.map(posts, (post) => {
            return <BlogItem key={post.id} post={post} />
          })
        }
      </div>
    );
  }
}

export default BlogList;
