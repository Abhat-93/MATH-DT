---
layout: about
title: Home
permalink: /
subtitle: <a href='https://csl.cs.vt.edu/'>CSL</a>, <a href='https://create.centers.vt.edu/'>CREATe</a> @ Virginia Tech, Blacksburg.

profile:
  align: right
  image: overview.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Generic Flow of Information in Digital Twin for a Jet Engine</p>
    <!-- <p>123 your address street</p> -->
    <!-- <p>Your City, State 12345</p> -->

# profile:
#   align: right
#   image: jet_engine_dt.png
#   image_circular: false # crops the image to make it circular


selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<!-- Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder. -->

<!-- Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically. -->

<!-- Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them. -->

A __Digital Twin__ (DT) is a virtual object that represents a specific physical asset (the physical twin), is dynamically updated with data from noisy physical measurements, and informs decisions in the physical world (often called "forecasting").

Some recent publications identify some current research gaps that affect the development of future DTs for engineering problems:
*  connecting the simulations across length scales and physical phenomena, 
*  advancing experimental design,
*  managing uncertainty propagation and quantification,
*  integrating data science and domain knowledge to enable decision-making,
*  managing massive amounts of data and applying advanced analytics,
*  developing ontologies and harmonization among the DT user community.
  
The proposed research project seeks to address current mathematical and computational gaps
and significantly advances the development of DTs for jet engines.

The research [team](/MATH-DT/people/) at VT brings together expertise from the field of Mathematics, Aerospace, Mechanical engineering and Computer Science to answer the several open questions. 

The overall research goal of this project is listed below:
* Develop high-fidelity multi-physics CFD and combustion jet engine models, with quantified uncertainties
* The high-fidelity Full Order Model (FOM) of the fluid flow in the jet engine will be done using Unsteady Reynolds-Averaged Navier-Stokes (**URANS**) equation
* Develop novel scalable Reduced-Order Models (**ROMs**) for fast, low fidelity simulations of jet engines
* Develop particle-surface interaction models to quantify the effects of erosion and deposition on engine performance. 
* Develop an array of novel hierarchical Data Assimilation (DA) algorithms using variational approaches, ensemble Kalman filters, and transport map particle filters, all in the context of a hierarchy of models
* Setup experiments to run the actual engine (we refer to this as the **Pysical Twin**) and start getting measurements from sensor that we place inside the engine
* Use innovative experimental systems to observe the location and motion of flow features, for
the JetRabbit engine using measurements made at the Virginia Tech Advanced Propulsion
and Power Laboratory.
* Calibrate the FOM and the ROM with the noisy measurements using Data Assimilation (**DA**) and Inversion
* Use the calibrated digital model to do a future forecast/predictions of Quantities of Interests (**QoIs**)

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/overview_dt_pt.png" title="overview_dt_pt" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Information transfer b/w digital and physical twin
</div>

<br>

We list our progress below and we would request our readers to refer to our [research](/MATH-DT/Research) page for further details which will be continously updated. We also list some future research direction that we seek to pursue:
* Data Assimilation---
  * Multi fidelity particle filters and smoothers
  * Application in 2 test PDEs as an intial benchmarking setup
  * This will be applied to the FOM and ROM of the jet engine simulation in the future
* Reduced Order Modeling---
  * Development of non-instrusive data driven ROMs for KdV and QG
  * This will serve as a benchmark for the development of ROMs for the jet engine
* Computational Fluid Dynamics---
  * Development of mesh for the 2d axisymmetric model of the jet rabbit engine
  * A full 3D model will be developed after the initial numerical experiments are done
* Experimental setup---
  * Setup of the experimental rig for running the actual engine and also facilitate particle injection
  * Sealing glass particles has been selected to carry out deposition experiments



