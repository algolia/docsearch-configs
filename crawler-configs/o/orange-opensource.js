new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://orange-opensource.github.io/casskop/docs/1_concepts/1_introduction",
    "https://orange-opensource.github.io/",
    "https://orange-opensource.github.io/casskop/docs/1_concepts/2_features",
    "https://orange-opensource.github.io/casskop/docs/1_concepts/3_design_principes",
    "https://orange-opensource.github.io/casskop/docs/1_concepts/4_roadmap",
    "https://orange-opensource.github.io/casskop/docs/2_setup/1_getting_started",
    "https://orange-opensource.github.io/casskop/docs/2_setup/2_install_plugin",
    "https://orange-opensource.github.io/casskop/docs/2_setup/3_multi_casskop",
    "https://orange-opensource.github.io/casskop/docs/2_setup/2_platform_setup/1_gke",
    "https://orange-opensource.github.io/casskop/docs/2_setup/2_platform_setup/2_minikube",
    "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/1_customizable_install_with_helm",
    "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/2_cassandra_cluster",
    "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/3_storage",
    "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/4_cluster_topology",
    "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/2_cassandra_configuration",
    "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/5_sidecars",
    "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/9_advanced_configuration",
    "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/10_nodes_management",
    "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/11_cassandra_cluster_status",
    "https://orange-opensource.github.io/casskop/docs/5_operations/0_implementation_architecture",
    "https://orange-opensource.github.io/casskop/docs/5_operations/1_cluster_operations",
    "https://orange-opensource.github.io/casskop/docs/5_operations/2_pods_operations",
    "https://orange-opensource.github.io/casskop/docs/5_operations/3_multi_casskop",
    "https://orange-opensource.github.io/casskop/docs/5_operations/3_5_backup_restore",
    "https://orange-opensource.github.io/casskop/docs/5_operations/4_upgrade_operator",
    "https://orange-opensource.github.io/casskop/docs/5_operations/5_upgrade_bootstrap_image",
    "https://orange-opensource.github.io/casskop/docs/5_operations/6_uninstall_casskop",
    "https://orange-opensource.github.io/casskop/docs/6_references/1_cassandra_cluster",
    "https://orange-opensource.github.io/casskop/docs/6_references/2_topology",
    "https://orange-opensource.github.io/casskop/docs/6_references/3_cassandra_cluster_status",
    "https://orange-opensource.github.io/casskop/docs/6_references/4_multicasskop",
    "https://orange-opensource.github.io/casskop/docs/7_troubleshooting/1_operations_issues",
    "https://orange-opensource.github.io/casskop/docs/7_troubleshooting/2_gke_issues",
    "https://orange-opensource.github.io/casskop/docs/8_contributing/1_developer_guide",
    "https://orange-opensource.github.io/casskop/docs/8_contributing/2_release_guide",
    "https://orange-opensource.github.io/casskop/docs/8_contributing/3_reporting_bugs",
    "https://orange-opensource.github.io/casskop/docs/8_contributing/4_credits",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://orange-opensource.github.io/**"],
  schedule: "at 20:40 on Thursday",
  actions: [
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/1_concepts/1_introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/1_concepts/2_features**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/1_concepts/3_design_principes**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/1_concepts/4_roadmap**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/2_setup/1_getting_started**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/2_setup/2_install_plugin**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/2_setup/3_multi_casskop**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/2_setup/2_platform_setup/1_gke**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/2_setup/2_platform_setup/2_minikube**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/1_customizable_install_with_helm**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/2_cassandra_cluster**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/3_storage**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/4_cluster_topology**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/2_cassandra_configuration**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/5_sidecars**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/9_advanced_configuration**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/10_nodes_management**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/3_configuration_deployment/11_cassandra_cluster_status**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/5_operations/0_implementation_architecture**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/5_operations/1_cluster_operations**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/5_operations/2_pods_operations**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/5_operations/3_multi_casskop**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/5_operations/3_5_backup_restore**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/5_operations/4_upgrade_operator**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/5_operations/5_upgrade_bootstrap_image**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/5_operations/6_uninstall_casskop**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/6_references/1_cassandra_cluster**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/6_references/2_topology**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/6_references/3_cassandra_cluster_status**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/6_references/4_multicasskop**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/7_troubleshooting/1_operations_issues**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/7_troubleshooting/2_gke_issues**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/8_contributing/1_developer_guide**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/8_contributing/2_release_guide**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/8_contributing/3_reporting_bugs**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "orange-opensource",
      pathsToMatch: [
        "https://orange-opensource.github.io/casskop/docs/8_contributing/4_credits**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "orange-opensource": {
      attributesForFaceting: ["type", "lang", "language", "version"],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
      ],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
      separatorsToIndex: "_",
    },
  },
});