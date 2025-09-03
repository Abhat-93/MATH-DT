---
layout: page
title: CFD Simulations
description: 
img: assets/img/4.jpg
importance: 1
category: Computational Fluid Dynamics
related_publications: false
---

Our application is a multi-physics simulation that includes combustion, high speed flow
with features, particulate dynamics, particle-surface interaction and resulting damage, and heat
damage.
The physical parameters, boundary conditions, and loads are constantly evolving.
Owning to the complicated physics involved, we aim to bulid the CFD simulations steadily starting from a $2D$ setting. 

The intial progress is reported below:
* A two-dimensional axisymmetric geometry of the Rabbit engine has been developed based on manual measurements of the hardware.Subsequently, a structured mesh has been generated in ANSYS ICEM CFD for the same (shown below)
 
<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/mesh.png" title="qg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Structured mesh generated in ANSYS ICEM CFD. This will be subsequently used to carry out $2$D experiments in Ansys Fluent.
</div>

* The 2D CFD simulations is being set up in ANSYS Fluent to perform baseline simulations of engine operation 
* The next step will involve implementing a deposition model within the 2D framework to study particle accumulation and its effects on performance of the jet engine
* Future work will extend the setup to a full 3D engine model, followed by unsteady RANS (URANS) simulations to capture the transient flow physics and provide high-fidelity data for Digital Twin development
