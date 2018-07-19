# DocSearch configurations

This is the repository hosting the public [DocSearch](https://community.algolia.com/docsearch/) configurations.

DocSearch is composed of 3 different projects:
* The front-end JavaScript library: https://github.com/algolia/docsearch
* The scraper which browses & indexes web pages: https://github.com/algolia/docsearch-scraper
* The configurations for the scraper: https://github.com/algolia/docsearch-configs

If you want to run your own DocSearch instance on those configuration files, please get familiar with the [scraper setup guidelines](https://github.com/algolia/docsearch-scraper).

## Introduction

The DocSearch scraper will use a configuration file specifying:
 - the Algolia index name that will store the records resulting from the crawling
 - the URLs it needs to crawl
 - the URLs it shouldn't crawl
 - the (hierarchical) CSS selectors to use to extract the relevant content from your webpages
 - the CSS selectors to skip
 - An optional sitemap URL that will be crawled and then scraped
 - additional options you might provide to fine-tune the scraping

## How it works

Once you run the DocSearch scraper on a specific configuration, it will:
 - crawl all the URLs you specified (from the *start_urls* or the *sitemap*)
 - follow all the hyperlinks mentioned in the page, and continue the crawling there
 - stop the crawling as soon as you've reached a URL that is not specified in your configuration or affiliated to a start url
 - extract the content of every single crawled page following the logic you defined using the CSS selectors
 - push the resulting records to the Algolia index you configured


**Update** You can check [the DocSearch dedicated documentation website](https://community.algolia.com/docsearch/documentation/docsearch-scraper/config-options/) if you need more details regarding how to fine-tune your configuration.
