# 写在前面
我什么也不想写。
## GIT永久删除文件/文件夹
### 从文件库中删除记录
文件：
`git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch path-to-your-remove-file' --prune-empty --tag-name-filter cat -- --all`
文件夹：
`git filter-branch --force --index-filter 'git rm --cached -r --ignore-unmatch path-to-your-remove-folder' --prune-empty --tag-name-filter cat -- --all`

### 强制推送到远程
`git push origin master -f`
### 清理和回收空间
`rm -rf .git/refs/original/`
`git reflog expire --expire=now --all`
`git gc --prune=now`
`git gc --aggressive --prune=now`