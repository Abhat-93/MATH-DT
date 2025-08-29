---
layout: page
title: Multi-Fidelity Filters
description: We combine information from a inexpensive low fidelity model to enrich our expensive full order model
img: assets/img/kdv_gif.gif
importance: 1
category: Data Assimilation
related_publications: true
---
We start with models with two fidelities. One model is an expensive Full Order Model (FOM) and the other one is an inexpensive Reduced Order Model (ROM). We seek to run multiple runs (ensembles) of ROMs and use that information to make our FOM estimation better. The picture below gives a big picture idea of what we aim to do: 

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/big_picture_mf.jpg" title="big picture idea of multifidelity" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of the Multi Fidelity Filtering process. Time "t" denotes the time stamp of the simulation. The control variate is the projection of the FOM particles onto the ROM space
</div>

Taking inspiration from the works of {% cite Giles_2015_mmcm %} and {% cite mfenkf_popov %}, we try to explore this idea to particle filter. 
In data assimilation, particle filters have been explored extensibly because they do not have the linear Guassian assumptions, unlike the **Kalman** based filters.
However, they are notoriously difficult to sclae in higher dimensions and lead to particle degeneracy.
Particle filters can also fail if the observations are far away from the prior.
Particle flow filters removes the degeneracy issue by eliminating the multiplication of the likelihood and the prior, and gives us a law (probability flow) which guides the particles from the region of prior to the posterior. 

<br> 
## Problem1: KdV

We investigate multifidelity filters in the toy problem of Korteweg-De Vries equations which is a non-linear third order partial differential equation (**PDE**). It has advection and dispersion effect based on the initial conditions. The $1D$ equation used in this study is :

\begin{equation}\label{eq:kdv}
    u_{t} (x,t) + 6 u(x,t) u_{x}(x,t) + u_{xxx}(x,t) = 0  
\end{equation}

We create a instrusive Galerkin rom for this problem and investigate multifidelity flow filters. The plot below shows some initial results:
<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/kdv_website.png" title="kdv" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Considering all parameters otherwise the same, multi fidelity enkf and gromov filter seems to outperform the standalone enkf. 
</div>

The possible next steps include:
* Explore inflation and localization and see how it impacts the simulations
* Use data driven roms to replace the galerkin rom and see the forecasting power of such non-intrusive roms

<br> 
## Problem2: QG
Next, we investigate the Quasi-Geostrophic equation (**QG**) which is based on barotopic voticity equation and is an excellent test problem for data assimilation. The PDE is defined as:

$$\begin{eqnarray} 
\omega_{t} + J(\psi , \omega) - R_{0}^{-1} \psi_{x} &=& Re^{-1} \delta \omega  + Ro^{-1} F ,     \nonumber \\
J(\psi, \omega) &=& \psi_{y} \omega_{x} - \psi_{x} \omega_{y} , \nonumber
\end{eqnarray}$$

where $\omega$ is the vorticity, $\psi$ is the streamfunction, $Re$ is the Reynolds number, $Ro$ is the Rossby number and $F$ is a forcing term. The forcing term is a symmetric double gyres $F = \sin(\pi(y-1))$ {% cite mfenkf_popov %} with homogeneous boundary conditions. The domain of interest is $\Omega = [0,1] \times [0,2]$ and the constants are $Re = 450$ and $Ro = 0.0036$. 

We create a Galerkin ROM using only 50 pod modes and run several simulations. For a comparison, the dimension of our FOM is $8001$. The figure below represents spatio-temporal root mean square error (rmse) plot for some experiments

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/qg_website.png" title="qg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Considering all parameters otherwise the same, multi fidelity enkf and gromov filter seems to outperform the standalone enkf. The enkf shown here is for reference with particles $N=50$. With $N=20$, standalone EnKF fails.  
</div>
