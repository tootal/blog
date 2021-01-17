/**
 * KaTeX math renderer plugin JSX component.
 * @module view/plugin/katex
 */
const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

/**
 * KaTeX math renderer plugin JSX component.
 *
 * @see https://katex.org/
 * @example
 * <KaTeX
 *     cssUrl="/path/to/katex.css"
 *     jsUrl="/path/to/katex.js"
 *     autoRenderUrl="/path/to/auto-render.js"
 *     mhchemUrl="/path/to/mhchem.js" />
 */
class KaTeX extends Component {
  render() {
    const { cssUrl, jsUrl, autoRenderUrl, mhchemUrl } = this.props;

    const js = `
    var katex_config = {
      delimiters: 
      [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false}
      ],
      strict: false,
      throwOnError: false
    };
    window.addEventListener("load", function() {
      document.querySelectorAll('[role="article"] > .content').forEach(function(element) {
        renderMathInElement(element, katex_config);
      });
      document.querySelectorAll('#toc .level-item').forEach(function(element) {
        renderMathInElement(element, katex_config);
      });
    });`;

    return (
      <>
        <link rel="stylesheet" href={cssUrl} />
        <script src={jsUrl} defer={true}></script>
        <script src={autoRenderUrl} defer={true}></script>
        <script src={mhchemUrl} defer={true}></script>
        <script dangerouslySetInnerHTML={{ __html: js }}></script>
      </>
    );
  }
}
/**
 * Cacheable KaTeX math renderer plugin JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <KaTeX.Cacheable
 *     head={true}
 *     helper={{ cdn: function() {...} }} />
 */
KaTeX.Cacheable = cacheComponent(KaTeX, 'plugin.katex', (props) => {
  const { head, helper } = props;
  if (head) {
    return null;
  }
  var version = props.plugin.version || '0.11.1';
  return {
    jsUrl: helper.cdn('katex', version, 'dist/katex.min.js'),
    cssUrl: helper.cdn('katex', version, 'dist/katex.min.css'),
    autoRenderUrl: helper.cdn('katex', version, 'dist/contrib/auto-render.min.js'),
    mhchemUrl: helper.cdn('katex', version, 'dist/contrib/mhchem.js'),
  };
});

module.exports = KaTeX;