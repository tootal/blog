---
title: 最长上升子序列（LIS）总结
urlname: lis-summary
toc: true
categories:
  - 计算机
  - 算法竞赛
tags:
  - 算法
  - LIS
  - 动态规划
date: 2020-07-12 16:09:49
updated: 2020-07-12 16:09:49
---

子序列：可以通过删除原序列中一些元素获得的序列。
子串：原序列中连续的一段。
子序列和子串的区别：子序列不需要连续，子串是连续的。如abcdef中acf是子序列，bcd是子串。显然子串都是子序列。

参考：[Longest increasing subsequence](https://en.wanweibaike.com/wiki-Longest%20increasing%20subsequence)
<!-- more -->
## n^2做法
[POJ-2533 Longest Ordered Subsequence](https://vjudge.net/problem/POJ-2533)
求最长**上升**子序列，数据范围N<=1000，n^2复杂度可过。

假设f[i]表示以a[i]结尾的最长上升子序列长度，对每个f[i]，在前面找一个比a[i]小的数a[j]，更新f[i] = max(f[i], f[j] + 1)，最终最大的f[i]即为答案。

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
const int N = 1005;
int a[N], f[N];
int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> a[i];
    int ans = 1;
    for (int i = 1; i <= n; i++) {
        f[i] = 1;
        for (int j = 1; j < i; j++) {
            if (a[j] < a[i] && f[j] + 1 > f[i]) {
                f[i] = f[j] + 1;
            }
        }
        ans = max(ans, f[i]);
    }
    cout << ans << '\n';
    return 0;
}
```
## nlgn做法
[POJ-3903 Stock Exchange](https://vjudge.net/problem/POJ-3903)
题意一样，数据范围变成了10^5，显然n^2算法不能过了，需要使用nlogn算法。

假设f[i]表示长度为i的上升子序列的末尾元素的最小值。ans表示目前最长上升子序列的长度。初始值ans=1，f[1]=a[1]，依次考虑每个元素i，如果$a[i]>f[ans]$，说明a[i]可以接在目前最长的上升子序列的末尾，答案+1。否则，答案不会更优。但是a[i]可以替换掉f数组中第一个**大于等于**a[i]的值所代表上升子序列的末尾元素，因为a[i]比他更小，所以更有可能使得答案变大。注意这个位置是a[i]唯一能替换的元素，小于a[i]的，替换后只会使答案可能变小，不是第一个大于等于a[i]的，不符合上升序列的定义。注意到f数组单调递增，因此可以使用二分查找。

参考：[最长不下降子序列nlogn算法详解](https://www.cnblogs.com/itlqs/p/5743114.html)

```cpp
#include <iostream>
#include <algorithm>
using namespace std;
const int N = 1e5 + 5;
int a[N], f[N];
int main() {
    ios::sync_with_stdio(false);cin.tie(0);
    int n;
    while(cin >> n) {
        for (int i = 1; i <= n; i++) {
            cin >> a[i];
        }
        int ans = 1;
        f[1] = a[1];
        for (int i = 2; i <= n; i++) {
            if (a[i] > f[ans]) {
                ans++;
                f[ans] = a[i];
            } else {
                f[lower_bound(f + 1, f + 1 + ans, a[i]) - f] = a[i];
            }
        }
        cout << ans << '\n';
    }
    return 0;
}
```

## 最长公共子序列（LCS）
[HDU-1159 Common Subsequence](https://vjudge.net/problem/HDU-1159)
求两个串的最长公共子序列，数据范围小于1000，n^2算法可过。

假设两个串为a、b，f[i][j]表示a串前i个字符与b串前j个字符的最长公共子序列长度。依次枚举i、j，若a[i] = b[j]，则f[i][j] = f[i - 1][j - 1] + 1，否则，f[i][j] = max(f[i - 1][j], f[i][j - 1])。

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 1005;
char a[N], b[N];
int f[N][N];
int main() {
    while (cin >> a + 1 >> b + 1) {
        int la = strlen(a + 1), lb = strlen(b + 1);
        for (int i = 1; i <= la; i++) {
            for (int j = 1; j <= lb; j++) {
                if (a[i] == b[j]) {
                    f[i][j] = f[i - 1][j - 1] + 1;
                } else {
                    f[i][j] = max(f[i][j - 1], f[i - 1][j]);
                }
            }
        }
        cout << f[la][lb] << '\n';
    }
    return 0;
}
```

## LCS转LIS
**[Luogu-1439 【模板】最长公共子序列](https://www.luogu.com.cn/problem/P1439)**
数据范围10^5，因此不能用n^2的算法。

假设两个序列为a、b，构造一个新的序列c，c[i]表示b[i]在a[i]中出现的位置，即b[i] = a[c[i]]，则c序列的LIS即为a、b的LCS。例如：a = [3, 1, 2, 5, 4]，b = [4, 2, 3, 1, 5]，则c = [5, 3, 1, 2, 4]，c的LIS为[1, 2, 4]对应a，b的LCS为[3, 1, 5]。

<article class="message message-immersive is-primary">
<div class="message-body">
注意：这种转换有特殊条件，只有在b中的元素能匹配较少的a中的元素时才有效，否则时间反而更慢。
</div>
</article>

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 1e5 + 5;
int a[N], b[N], f[N];
int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        int x;
        cin >> x;
        a[x] = i;
    }
    for (int i = 1; i <= n; i++) {
        int x;
        cin >> x;
        b[i] = a[x];
    }
    int ans = 1;
    f[1] = b[1];
    for (int i = 2; i <= n; i++) {
        if (b[i] > f[ans]) {
            ans++;
            f[ans] = b[i];
        } else {
            f[lower_bound(f + 1, f + 1 + ans, b[i]) - f] = b[i];
        }
    }
    cout << ans << '\n';
    return 0;
}
```

参考：[LIS 问题与 LCS 问题可以互相转换](https://blog.csdn.net/u013200703/article/details/47302229)
[把最长公共子序列LCS问题转化为最长上升子序列LIS问题](https://blog.csdn.net/m0_37456764/article/details/82944015)
[Junior Dynamic Programming——动态规划初步·各种子序列问题](https://www.luogu.com.cn/blog/pks-LOVING/junior-dynamic-programming-dong-tai-gui-hua-chu-bu-ge-zhong-zi-xu-lie)
[LCS转为LIS](https://blog.csdn.net/u013200703/article/details/47302183)


**[UVA-10635 Prince and Princess](https://vjudge.net/problem/UVA-10635)**
和Luogu-1439差不多，代码改改就能过了。

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 250 * 250 + 5;
int a[N], b[N], f[N];
int main() {
    int T;
    cin >> T;
    for (int t = 1; t <= T; t++) {
        int n, p, q;
        cin >> n >> p >> q;
        for (int i = 1; i <= p + 1; i++) {
            int x;
            cin >> x;
            a[x] = i;
        }
        n = 0;
        for (int i = 1; i <= q + 1; i++) {
            int x;
            cin >> x;
            if (a[x]) b[++n] = a[x];
        }
        int ans = 1;
        f[1] = b[1];
        for (int i = 2; i <= n; i++) {
            if (b[i] > f[ans]) {
                ans++;
                f[ans] = b[i];
            } else {
                f[lower_bound(f + 1, f + 1 + ans, b[i]) - f] = b[i];
            }
        }
        cout << "Case " << t << ": " << ans << '\n';
    }
    return 0;
}
```

**[Luogu-4303 【AHOI2006】基因匹配](https://www.luogu.com.cn/problem/P4304)**

和上一题同样的思路，构造新序列b，数组a用来记录第一个序列中的元素出现的位置。关键在代码第19行，**for (int j = c[x] - 1; j >= 0; j--)**，这里是逆序构造的。至于为什么要逆序，可以参考[最长公共子序列是否存在低于 O(n^2) 的算法？](https://www.zhihu.com/question/21974937/answer/19968337)这个答案。简单说一下就是：之前构造的新序列c中的每一个元素对应一个b中的元素，如果有多个对应，则这些元素就形成了一个组。即**每一组只能选一个元素**，为了方便实现，直接将每一组逆序。

参考：[【AHOI2006】基因匹配 Match](https://www.cnblogs.com/Krew/p/5361594.html)

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 1e5 + 5;
int a[N][5], c[N], b[N * 5], f[N * 5];
int main() {
    int n;
    cin >> n;
    n *= 5;
    for (int i = 1; i <= n; i++) {
        int x;
        cin >> x;
        a[x][c[x]] = i;
        c[x]++;
    }
    int bn = 0;
    for (int i = 1; i <= n; i++) {
        int x;
        cin >> x;
        for (int j = c[x] - 1; j >= 0; j--) {
            bn++;
            b[bn] = a[x][j];
        }
    }
    int ans = 1;
    f[1] = b[1];
    for (int i = 2; i <= bn; i++) {
        if (b[i] > f[ans]) {
            ans++;
            f[ans] = b[i];
        } else {
            f[lower_bound(f + 1, f + 1 + ans, b[i]) - f] = b[i];
        }
    }
    cout << ans << '\n';
    return 0;
}
```

## 加权LIS
**[计蒜客 - A1288 The Heaviest Non-decreasing Subsequence Problem](https://vjudge.net/problem/计蒜客-A1288)**
在LIS的基础上引入权值，要求权值最大。

这种问题如果权值非常小的话，有一种简单的解决办法：

1. 权值小于等于0的数不要选，即使权值全部为负数，也可以一个都不选，这样总权值为0反而更大。
2. 将权值为n（正整数）的数拆分成n个数，构造一个新序列
3. 求新序列的LIS即为原序列的最大权值
4. 注意是优先长度还是优先权值

```cpp
#include <bits/stdc++.h>
using namespace std;
template <typename T, typename F>
int LIS(T first, T last, F cmp) {
    if (first == last) return 0;
    int ans = 1;
    vector<int> f(1, *first);
    for (T i = first + 1; i != last; i++) {
        if (cmp(f.back(), *i)) f.push_back(*i);
        else *lower_bound(f.begin(), f.end(), *i, cmp) = *i;
    }
    return f.size();
}
int main() {
    vector<int> a;
    int x;
    while (cin >> x) {
        if (x < 0) continue;
        if (x >= 10000) {
            x -= 10000;
            vector<int> t(5, x);
            a.insert(a.end(), t.begin(), t.end());
        } else {
            a.push_back(x);
        }
    }
    cout << LIS(a.begin(), a.end(), less_equal<int>());
    return 0;
}
```

## 二维
**[滑雪](https://vjudge.net/problem/POJ-1088)**
就是求一个二维的LIS，假设f[i][j]表示以（i，j）结尾的LIS长度，显然f[i][j]可以从四个方向中**高度更高**的地方更新答案。注意这里的更新顺序不再是方向了，而是按高度从低到高更新答案。

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
const int N = 105;
int h[N][N], f[N][N];
const int dx[]{-1, 0, 1, 0}, dy[]{0, 1, 0, -1};
struct node {
    int x, y;
};
bool cmp(node u, node v) {
    return h[u.x][u.y] < h[v.x][v.y];
}
int main() {
    int r, c;
    cin >> r >> c;
    vector<node> a;
    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) {
            cin >> h[i][j];
            node t;
            t.x = i; t.y = j;
            a.push_back(t);
        }
    }
    sort(a.begin(), a.end(), cmp);
    int ans = 1;
    for (int i = 0; i < a.size(); i++) {
        int x = a[i].x, y = a[i].y;
        f[x][y] = 1;
        for (int j = 0; j < 4; j++) {
            int xx = x + dx[j], yy = y + dy[j];
            if (h[xx][yy] < h[x][y] && f[x][y] < f[xx][yy] + 1) {
                f[x][y] = f[xx][yy] + 1;
                if (f[x][y] > ans) ans = f[x][y];
            }
        }
    }
    cout << ans << '\n';
    return 0;
}
```

## 模板
将该算法抽象成一个模板函数，不依赖外部状态，同时支持数组与容器，支持不下降（传入`less_equal<int>()`即可）。
上面部分题目用到了封装好的算法。

```cpp
template <typename T, typename F>
int LIS(T first, T last, F cmp) {
    if (first == last) return 0;
    int ans = 1;
    vector<int> f(1, *first);
    for (T i = first + 1; i != last; i++) {
        if (cmp(f.back(), *i)) f.push_back(*i);
        else *lower_bound(f.begin(), f.end(), *i, cmp) = *i;
    }
    return f.size();
}
```

使用示例：

```cpp
vector<int> a{1, 4, 2, 2, 3};
LIS(a.begin(), a.end(), less<int>()); // 3
int b[]{1, 4, 2, 2, 3};
LIS(b, b + 5, less_equal<int>()); // 4
```

## 其他
**LCS+位压缩 [HDU-2253 Longest Common Subsequence Again](https://vjudge.net/problem/HDU-2253)**
用之前的办法做了一下，MLE了，先留个坑在这里。

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 3e4 + 5;
char a[N], b[N];
int main() {
    while (cin >> a >> b) {
        int la = strlen(a), lb = strlen(b);
        vector<int> fa[26];
        for (int i = 0; i < la; i++) {
            fa[a[i] - 'A'].push_back(i + 1);
        }
        vector<int> c(1);
        for (int i = 0; i < lb; i++) {
            auto &fb = fa[b[i] - 'A'];
            for (auto j = fb.rbegin(); j != fb.rend(); j++) {
                c.push_back(*j);
            }
        }
        int ans = 1, n = c.size() - 1;
        vector<int> f(n + 1);
        f[1] = c[1];
        for (int i = 2; i <= n; i++) {
            if (c[i] > f[ans]) {
                f[++ans] = c[i];
            } else {
                f[lower_bound(f.begin() + 1, f.begin() + 1 + ans, c[i]) - f.begin()] = c[i];
            }
        }
        cout << ans << '\n';
    }
    return 0;
}
```

**贪心 [LIS](https://vjudge.net/problem/ZOJ-4028)**


**先增后减子序列 [CodeChef-GMB04 Mountain Engineering](https://vjudge.net/problem/CodeChef-GMB04)**
这题更大的难点是需要统计这种序列的个数。
