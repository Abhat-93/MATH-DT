// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/MATH-DT/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "There are several research going on. Feel free to explore more below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MATH-DT/research/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Project Members",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MATH-DT/people/";
          },
        },{id: "projects-multi-fidelity-filters",
          title: 'Multi-Fidelity Filters',
          description: "We combine information from a inexpensive low fidelity model to enrich our expensive full order model",
          section: "Projects",handler: () => {
              window.location.href = "/MATH-DT/projects/1_project/";
            },},{id: "projects-data-driven-reduced-order-modeling",
          title: 'Data Driven Reduced Order Modeling',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/MATH-DT/projects/2_project/";
            },},{id: "projects-cfd-simulations",
          title: 'CFD Simulations',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/MATH-DT/projects/7_project/";
            },},{id: "projects-experiments",
          title: 'Experiments',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/MATH-DT/projects/8_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
