import React, { Component } from 'react';

import BlogList from '../ui/BlogList';

const style =  {width: 200, height: 100, alt: 'img'};

const posts = [
  {
    id: 1,
    image: { src: 'http://fakeimg.pl/300/ff0000/',
      style: {
        width: style.width,
        height: style.height,
        alt: style.alt
      }
    },
    text: 'Bla'
  },
  {
    id: 2,
    image: { src: 'http://fakeimg.pl/300/FFFF00/',
      style: {
        width: style.width,
        height: style.height,
        alt: style.alt
      }
    },
    text: 'Bla'
  }
];

export default class BlogPage extends Component {
  render() {
    return React.createElement(BlogList, { posts });
  }
}
