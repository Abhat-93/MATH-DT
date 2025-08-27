---
layout: page
title: Multi-Fidelity Particle Flow Filters
description: We combine information from a inexpensive low fidelity model to enrich our expensive full order model
img: assets/img/kdv_gif.gif
importance: 1
category: Data Assimilation
related_publications: true
---
As an initial test experiment, we investigate multifidelity filters in the Korteweg-De Vries equations which is a non-linear third order partial differential equation (**PDE**). It has advection and dispersion effect based on the initial conditions. The $1D$ equation used in this study is :

\begin{equation}\label{eq:kdv}
    u_{t} (x,t) + 6 u(x,t) u_{x}(x,t) + u_{xxx}(x,t) = 0  
\end{equation}

Taking inspiration from the works of {% cite Giles_2015_mmcm %} and {% cite mfenkf_popov %}, we try to explore this idea to particle filter. 
Particle filters have been explored extensibly because they do not have the linear Guassian assumptions, unlike the **Kalman** based filters. However, they are notoriously difficult to sclae in higher dimensions. Particle filters can also fail if the observations are far away from the prior. Particle flow filters removes the degeneracy issue by eliminating the multiplication of the likelihood and the prior, and gives us a law which guides the particles from the region of prior to the posterior. 

More results will follow. 
