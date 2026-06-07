/**
 * 博客右侧导航状态栏
 * 按分类组织文章，支持折叠/展开、点击跳转、滚动高亮
 */
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        var posts = document.querySelectorAll('article.post, .post-block');
        if (posts.length < 2) return;

        // 创建容器
        var container = document.createElement('div');
        container.className = 'sidebar-state-container';
        container.id = 'sidebarStateContainer';

        // 标题
        var title = document.createElement('div');
        title.className = 'sidebar-state-title';
        title.textContent = '导航';
        container.appendChild(title);

        // 按标签分类
        var categories = {};
        posts.forEach(function(post, index) {
            var postTitleEl = post.querySelector('.post-title-link, .post-title a, h1 a, h2 a') ||
                             post.querySelector('.post-title, h1, h2');
            var postTitle = postTitleEl ? postTitleEl.textContent.trim() : ('文章 ' + (index + 1));
            var href = post.querySelector('a[itemprop="url"], .post-title-link, .post-title a')?.href || '';

            // 从标签提取分类
            var tagEls = post.querySelectorAll('.post-tags a, .tag-cloud a, [itemprop="keywords"]');
            var cat = '其他';
            if (tagEls.length > 0) {
                var tags = Array.from(tagEls).map(function(t) { return t.textContent.trim(); });
                if (tags.some(function(t) { return t.includes('CTF') || t.includes('ctf'); })) cat = 'CTF';
                else if (tags.some(function(t) { return t.includes('kali') || t.includes('渗透'); })) cat = 'Kali';
                else if (tags.some(function(t) { return t.includes('取证') || t.includes('forensics'); })) cat = '取证';
                else if (tags.some(function(t) { return t.includes('Web') || t.includes('web'); })) cat = 'Web';
                else cat = tags[0];
            }

            if (!categories[cat]) categories[cat] = [];
            categories[cat].push({ title: postTitle, url: href, element: post });
        });

        // 渲染分类
        var catNames = Object.keys(categories).sort();
        catNames.forEach(function(catName) {
            var catDiv = document.createElement('div');
            catDiv.className = 'sidebar-state-category';

            var header = document.createElement('div');
            header.className = 'sidebar-state-category-header';
            header.textContent = catName + ' (' + categories[catName].length + ')';

            var postsDiv = document.createElement('div');
            postsDiv.className = 'sidebar-state-posts';

            categories[catName].forEach(function(item) {
                var link = document.createElement('a');
                link.className = 'sidebar-state-post-link';
                link.textContent = item.title.length > 16 ? item.title.substring(0, 15) + '..' : item.title;
                link.title = item.title;
                link.href = item.url || '#';

                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelectorAll('.sidebar-state-post-link').forEach(function(l) {
                        l.classList.remove('active');
                    });
                    this.classList.add('active');
                    if (item.element) {
                        item.element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });

                postsDiv.appendChild(link);
            });

            header.addEventListener('click', function() {
                this.classList.toggle('collapsed');
                catDiv.classList.toggle('collapsed');
            });

            catDiv.appendChild(header);
            catDiv.appendChild(postsDiv);
            container.appendChild(catDiv);
        });

        document.body.appendChild(container);

        // 滚动高亮
        var scrollTimer;
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(function() {
                var scrollY = window.scrollY + 120;
                var active = null;
                var minDist = Infinity;

                posts.forEach(function(post) {
                    var top = post.offsetTop;
                    if (scrollY >= top && (scrollY - top) < minDist) {
                        minDist = scrollY - top;
                        active = post;
                    }
                });

                document.querySelectorAll('.sidebar-state-post-link').forEach(function(l) {
                    l.classList.remove('active');
                });

                if (active) {
                    var titleEl = active.querySelector('.post-title-link, .post-title a, h1 a, h2 a') ||
                                  active.querySelector('.post-title, h1, h2');
                    var t = titleEl ? titleEl.textContent.trim().substring(0, 15) : '';
                    document.querySelectorAll('.sidebar-state-post-link').forEach(function(l) {
                        if (l.textContent.replace('..', '') === t) l.classList.add('active');
                    });
                }
            }, 100);
        });

        setTimeout(function() { window.dispatchEvent(new Event('scroll')); }, 600);
    });
})();