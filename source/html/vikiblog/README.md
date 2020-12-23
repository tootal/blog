## Website Task List
- [x] Add a nav bar which contain logo,website name,three menu item (v0.0.1)
- [x] Add a footer show datetime,copyright and social id (v0.0.2)

*Always use relative link to support view without web server.*

- [x] Add nav bar login menu item
- [x] Add login pop modal (v0.0.3)
- [x] color the pop modal interface (v0.0.4)
- [x] add key shortcut for login modal 
- [x] add nav bar menu item switch shadow (v0.0.5)
- [x] **bug** fix: menu hover abnormal after switch
- [x] set font family (v0.0.6)
- [ ] ~~~add animate to pop modal (v0.0.7)~~~

### Login pop modal plan
1. Modal Dialogue Box
2. Title Login (header left)
3. X (close button at header right)
4. horizontal divide line
5. Input1: Username
6. Input2: Password
7. horizontal divide line
8. remind info (default hide)
9. footer button left (Forget Password)
10. footer button right1 (Cancel)
11. footer button right2 (Login)

(seem like vjudge login modal)

### Login modal input imporve (still in plan)
1. First just show username input
2. After enter username type enter or click (->) next
3. use ajax to query username
4. if username is not exist show info remind user 
5. if it exist switch username input to password input 

### Key shortcut for login modal 
* ESC to close the modal 
* Enter to login (allow empty password)

### Switch menu use javascript

I plan to use a variable `menu_state` to record current state. When we first load the website the `menu_state` set to `0`,when we click the menu item (brand_icon/blog/message/awesome), let the variable `menu_state` equal (0/1/2/3) respectively. At the sametime switch the page (or part of page) and do some change.

### Bug record 1
It seems like work wrongly, when I click a menu item, the function of other item when mouse over it will be disappear!  
I have find what cause wrong, when I use JavaScript to set a item's color, it will be inline style to this item, becase the importance of inline style greater than the link style file, so it cause link style failed (include hover/active/visited). Just use `!important` to decorate the css type.  
Work! But it not support ie even ie11. 

Leave this issue future!

### skip add animate 
it is hard to learn css animate now, i plan to skip it!


## Next Step

Today I play computer games all the day. So I just can't find the way! what I am going to do? What should I do? My main work is ACM/ICPC contest but I want to learn something else and something interesting. But sometimes (like now) I do some work, and become boring? So I consider about give it up? No ,I can. Tootal World will be a better website and I will do it still.

Let me take a rest...


## Hodor Hodor Hodor 
This world are beautiful and have many thing to enjoy. I can overcome any problem and live it.


### Next step
- [x] an online judge list page
- [ ] test video play 

Now as index (may be as sub page later)
I have a aliyun ECS , so I may publish it to tootal.xyz domain.
Already published, now it is available on tootal.xyz!


### use api!
test ajax! 