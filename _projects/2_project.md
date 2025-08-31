---
layout: page
title: Data Driven Reduced Order Modeling
description: 
img: 
importance: 2
category: Reduced Order Modeling
giscus_comments: false
---

Reduced Order Modeling (ROM) plays a pivotal role in this study. 
Often high fidelity simulations are expensive to run, and with multiple initializations (as often needed in data assimilation), computation often becomes intractatble in high dimensional setting. 
We aim to create cheap data driven ROMs to facilitate amyriad of data assimilation problem that will be incurred in this study.
In lieu of that, here are some background/initial study that has been performed till now:

## Scalable Physics-based data-driven reduced-order models
We are developing scalable, physics-based, data-driven ROMs based on Operator Inference. Our approach is designed for large-scale problems with massive datasets. To efficiently handle extremely large state dimensions, we use distributed-memory computing to process data in parallel. Recently, we also incorporated streaming capabilities to dynamically integrate new training data.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/fig1_v3.png" title="OpInf" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This shows the strong scaling of our distributed Operator Inference algorithm (without streaming), which we tested using up to 2048 compute cores on the Frontera Supercomputer at the Texas Advanced Computing Center. The application for this test was a real-world problem focused on combustion dynamics in rotating detonation rocket engines.
</div>

<br>

## Sparse grid-accelerated parametric reduced-order models
We are also developing sparse grid-accelerated parametric reduced models that embed the parametric variation of a large number of input parameters. 
The efficient construction of these models is crucial for creating digital twins in real-world applications.

Our method uses sparse grids with Leja points to generate a low-cardinality set of training parameter instances.
We then use sparse grid interpolation to make predictions for new parameter instances outside of the training set.
This approach helps overcome the curse of dimensionality that affects traditional full tensor-grids.
<div class="row">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fig2.png" title="sparse_grid_1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fig3.png" title="sparse_grid_2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure illustrates the significant reduction in the number of required training points for a sparse grid compared to a full tensor-grid. We validated our approach by applying a sparse-grid-accelerated parametric reduced model based on optimized dynamic mode decomposition to a plasma micro-instability scenario. This problem has six input parameters and shares many characteristics with jet engine dynamics. Thanks to our sparse-grid framework, we only needed 28 high-fidelity simulations to train the reduced model.
</div>

<br>

## Structure-preserving reduced models
We are developing structure-preserving reduced models (e.g., those with a Hamiltonian structure) using Operator Inference for multi-fidelity filtering problems.
The use of multi-fidelity methods to accelerate data assimilation is essential for creating digital twins in real-world problems where the forward models are computationally expensive.


