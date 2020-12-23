hexo generate
cp -R hexo_blog/public/* ./
git add .
git commit -m 'update blog'
git push origin master

