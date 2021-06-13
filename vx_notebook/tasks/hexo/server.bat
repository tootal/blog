@echo off
cd ..
start hexo server
timeout /t 3
start http://localhost:4000