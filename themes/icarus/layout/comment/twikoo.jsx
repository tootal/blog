const { Component, Fragment } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class Twikoo extends Component {
  render() {
    const {
      path,
      envId,
      region,
      jsUrl,
    } = this.props;
    const js = `twikoo.init({
      envId: '${envId}',
      region: '${region}',
      path: "'/${path}'",
      katex: {
        delimiters: 
        [
          {left: "$$", right: "$$", display: true},
          {left: "$", right: "$", display: false}
        ],
        throwOnError: false
      }
    });`;
    return (
      <Fragment>
        <div id="twikoo" class="content twikoo"></div>
        <script src={jsUrl}></script>
        <script dangerouslySetInnerHTML={{ __html: js }}></script>
      </Fragment>
    );
  }
}

Twikoo.Cacheable = cacheComponent(Twikoo, 'comment.twikoo', (props) => {
  const { comment, page } = props;
  return {
    path: page.path,
    envId: comment.envId,
    region: comment.region,
    jsUrl: comment.jsUrl || `https://cdn.jsdelivr.net/npm/twikoo@${comment.version}/dist/twikoo.all.min.js`,
  };
});

module.exports = Twikoo;