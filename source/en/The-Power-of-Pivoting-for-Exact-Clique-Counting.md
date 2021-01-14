---
title: The Power of Pivoting for Exact Clique Counting
toc: true
tags:
  - clique
  - algorithm
categories:
  - Reprint
reprint:
  author: Shweta Jain, C. Seshadhri
  link: 'https://arxiv.org/abs/2001.06784'
  date: 2020-01-19
lang: en
date: 2021-01-14 20:43:51
updated: 2021-01-14 20:43:51
cite: true
---

## Info

### Abstract

Clique counting is a fundamental task in network analysis, and even the simplest setting of $3$-cliques (triangles) has been the center of much recent research. Getting the count of $k$-cliques for larger $k$ is algorithmically challenging, due to the exponential blowup in the search space of large cliques. But a number of recent applications (especially for community detection or clustering) use larger clique counts. Moreover, one often desires *local* counts, the number of $k$-cliques per vertex/edge.

Our main result is PIVOTER, an algorithm that obtains exact global and local $k$-clique counts *for all values of $k$*. It is surprisingly effective in practice, and is able to get clique counts of graphs that were beyond the reach of previous work. For example, PIVOTER gets all clique counts in a social network with a 100M edges within two hours on a commodity machine. Previous parallel algorithms do not terminate in days. PIVOTER can also feasibly get local per-vertex and per-edge $k$-clique counts (for all $k$) for many public data sets with tens of millions of edges. To the best of our knowledge, this is the first algorithm that achieves such results.

The main insight is the construction of a Succinct Clique Tree (SCT) that stores a compressed unique representation of all cliques in an input graph. It is built using a technique called *pivoting*, a classic approach by Bron-Kerbosch to reduce the recursion tree of backtracking algorithms for maximal cliques. Remarkably, the SCT can be built without actually enumerating all cliques, and provides a succinct data structure from which exact clique statistics ($k$-clique counts, local counts) can be read off efficiently.

### CCS CONCEPTS

* Theory of computation → Graph algorithms analysis
* Theory of computation → Social networks
* Information systems → Data mining

### KEYWORDS

Social network analysis; clique counting; local clique counting

### ACM Reference Format

Shweta Jain and C. Seshadhri. 2020. The Power of Pivoting for Exact Clique Counting. In The Thirteenth ACM International Conference on Web Search and Data Mining (WSDM ’20), February 3–7, 2020, Houston, TX, USA. ACM, New York, NY, USA, 10 pages.

## INTRODUCTION

{% label sec:related %}

Subgraph counting (also known as motif counting, graphlet counting) is a fundamental algorithmic problem in network analysis, widely applied in domains such as social network analysis, bioinformatics, cybersecurity, and physics (refer to tutorial {% cite SeTi19 %} and references within). One of the most important cases is that of **clique counting**. A $k$-clique is a complete subgraph on $k$ vertices, and has great significance in network analysis (Chap. 11 of {% cite HR05 %} and Chap. 2 of {% cite J10 %}). Indeed, just the special case of $k=3$ (triangle counting) has a rich history in modern network science. General clique counting has received much attention in recent times {% cite JhSePi15,MarcusS10,AhNe+15,Escape,JS17,FFF15,DBS18 %}. There is a line of recent work on exploiting clique counts for community detection and dense subgraph discovery {% cite SaSePi14,Ts15,BeGlLe16,TPM17,lu2018community,YiBiKe19 %}.

### Problem Statement

We are given an undirected, simple graph $G(V,E)$. For $k \geq 3$, a $k$-clique is a set of $k$ vertices that induce a complete subgraph (it contains all edges among the $k$ vertices). We will denote the number of $k$-cliques as $C_k$. For a vertex $v \in V$, we use $c_k(v)$ to denote the number of $k$-cliques that $v$ participates in. Analogously, we define $c_k(e)$ for edge $e \in E$.

We focus on the following problems, in increasing order of difficulty. We stress that $k$ is *not* part of the input, and we want results for all values of $k$.

* Global clique counts: Output, $\forall k \geq 3$, $C_k$.
* Per-vertex clique counts: Output, $\forall k$, $\forall v \in V$, the value $c_k(v)$.
* Per-edge clique counts: Output, $\forall k$, $\forall e \in E$, the value $c_k(e)$.

The per-vertex and per-edge counts are sometimes called *local counts*. In clustering applications, the local counts are used as vertex or edge weights, and are therefore even more useful than global counts {% cite SaSePi14,Ts15,BeGlLe16,TPM17,lu2018community,YiBiKe19 %}.

**Challenges:** Even the simplest problem of getting global clique counts subsumes a number of recent results on clique counting {% cite FFF15,JS17,DBS18 %}. The main challenge is combinatorial explosion: for example, the *web-Stanford* web graph with 2M edges has *3000 trillion* $15$-cliques. These numbers are even more astronomical for larger graphs. Any method that tries to enumerate is doomed to failure. 

Amazingly, recent work by Danisch-Balalau-Sozio uses parallel algorithms to count beyond trillions of cliques. But even their algorithm fails to get all global clique counts for a number of datasets. Randomized methods have been used with some success, but even they cannot estimate all clique counts {% cite FFF15,JS17 %}.

Local counting, for all $k$, is even harder, especially given the sheer size of the output. Parallel methods would eventually need to store local counts for every subproblem, which would increase the overall memory footprint. For local counts, sampling would require far too many random variables, each of which need to be sampled many times for convergence. (We give more explanation in {% sec related %}.)

This raises the main question:

*Is there a scalable, exact algorithm for getting all global and local cliques counts, on real-world graphs with millions of edges?* 

To the best of our knowedge, there is no previous algorithm that can solve these problems
on even moderate-sized graphs with a few million edges. 

