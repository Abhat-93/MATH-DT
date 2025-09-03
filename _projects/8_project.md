---
layout: page
title: Experiments 
description: 
img: assets/img/Rabbit-Turbine.png
importance: 2
category: Experimental Design
giscus_comments: false
related_publications: false
---

Physical experiments with the jet engne will be carried out at Virginia Tech Advanced Propulsion and Power Lab ([VTAPPL](https://www.aoe.vt.edu/research/multidisciplinary-centers-labs/appl.html)). 
Several measurements will be recorded and used to calibrate our Digital Twin using Data Assimilation.
Particle injection to study the erosion and deposition rate will be carried out here.

As an intial step for carrying out these experiments, we have made the following progress:
* The Rabbit 100 SE microjet engine has been acquired to serve as the physical twin for different experiments and data collection
* A customized sand feeder has been designed and integrated with the engine to enable controlled particle ingestion through the inlet (as shown below)

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rig_cartoon.png" title="rig_c" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rig_actual.png" title="rig_a" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The left image shows a conceptual cartoon of the test rig that the experimental team designed. The right image is the current tet rig we have at VTAPPL.  
</div>

* A dedicated test rig has been constructed for the Rabbit engine, instrumented with temperature and pressure sensors at critical locations, along with load cells for direct thrust measurement
* Sealing glass particles have been selected for ingestion studies to investigate deposition phenomena within the engine. The resulting measurements will be assimilated into the Digital Twin framework to assess its predictive capability for performance degradation and failure onset
