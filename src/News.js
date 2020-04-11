import React from 'react';
import './index.css';


class News extends React.Component {

  state = {
    postData: [],
    otr: "",
    news: ""
  }

  componentDidMount() {
    fetch("https://news.patcummings.com/wp-json/wp/v2/posts")
    .then(r => r.json())
    .then(r => {
      // debugger;
      this.setState({postData: r})
      this.setState({otr: r[0].content.rendered, news: r[1].content.rendered})
    })
  }

  render(){
  return (
    <div className="News">
      {/* {this.state.postData.map((post) => <Post post={post} />)} */}
      {/* <Post post={this.state.postData[0]} /> */}
      <div className="otr"><div dangerouslySetInnerHTML={{__html: this.state.otr}}></div></div>
      <div></div>
      <div className="news-right"><div dangerouslySetInnerHTML={{__html: this.state.news}}></div></div>
    </div>
  );
  }
}

export default News;