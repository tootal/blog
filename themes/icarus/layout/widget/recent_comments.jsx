const { Component } = require('inferno');
const gravatrHelper = require('hexo-util').gravatar;
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class RecentComments extends Component {
    render() {
        const {
            title,
            limit
        } = this.props;
        return <div class="card widget" data-type="recent-comments">
            <div class="card-content">
                <h3 class="menu-label">{title}</h3>
                <article class="media">
                    <div class="media-content">
                        <p class="date"><time datetime="2020-12-05T07:23:41.000Z">2020-12-05</time></p>
                        <p class="title"><a href="/posts/fibonacci-summary/">斐波那契数列总结</a></p>
                        <p class="categories"><a href="/categories/%E8%AE%A1%E7%AE%97%E6%9C%BA/">计算机</a> / <a
                            href="/categories/%E8%AE%A1%E7%AE%97%E6%9C%BA/%E7%AE%97%E6%B3%95%E7%AB%9E%E8%B5%9B/">算法竞赛</a>
                        </p>
                    </div>
                </article>
                <article class="media">
                    <div class="media-content">
                        <p class="date"><time datetime="2020-11-23T09:54:01.000Z">2020-11-23</time></p>
                        <p class="title"><a href="/posts/scutpc2020-summary/">2020 年「计算机科学与工程学院」新生赛总结</a></p>
                        <p class="categories"><a href="/categories/%E8%AE%A1%E7%AE%97%E6%9C%BA/">计算机</a> / <a
                            href="/categories/%E8%AE%A1%E7%AE%97%E6%9C%BA/%E7%AE%97%E6%B3%95%E7%AB%9E%E8%B5%9B/">算法竞赛</a>
                        </p>
                    </div>
                </article>
                <article class="media">
                    <div class="media-content">
                        <p class="date"><time datetime="2020-08-30T05:53:57.000Z">2020-08-30</time></p>
                        <p class="title"><a href="/posts/pdf-table/">给PDF文件添加目录</a></p>
                        <p class="categories"><a href="/categories/%E8%AE%A1%E7%AE%97%E6%9C%BA/">计算机</a> / <a
                            href="/categories/%E8%AE%A1%E7%AE%97%E6%9C%BA/%E6%8A%80%E6%9C%AF/">技术</a></p>
                    </div>
                </article>
                <article class="media">
                    <div class="media-content">
                        <p class="date"><time datetime="2020-07-12T08:09:49.000Z">2020-07-12</time></p>
                        <p class="title"><a href="/posts/lis-summary/">最长上升子序列（LIS）总结</a></p>
                        <p class="categories"><a href="/categories/%E8%AE%A1%E7%AE%97%E6%9C%BA/">计算机</a> / <a
                            href="/categories/%E8%AE%A1%E7%AE%97%E6%9C%BA/%E7%AE%97%E6%B3%95%E7%AB%9E%E8%B5%9B/">算法竞赛</a>
                        </p>
                    </div>
                </article>
                <article class="media">
                    <div class="media-content">
                        <p class="date"><time datetime="2020-06-06T01:12:30.000Z">2020-06-06</time></p>
                        <p class="title"><a href="/posts/sqlserver-summary/">数据库实验总结</a></p>
                        <p class="categories"><a href="/categories/%E5%A4%A7%E5%AD%A6%E8%AF%BE%E7%A8%8B/">大学课程</a> / <a
                            href="/categories/%E5%A4%A7%E5%AD%A6%E8%AF%BE%E7%A8%8B/%E6%95%B0%E6%8D%AE%E5%BA%93/">数据库</a></p>
                    </div>
                </article>
            </div>
        </div>;
    }
}

RecentComments.Cacheable = cacheComponent(RecentComments, 'widget.profile', props => {
    const { helper, widget } = props;
    const {
        limit
    } = widget;
    const { __ } = helper;

    return {
        title: __('widget.recent_comments'),
        limit
    };
});

module.exports = RecentComments;
