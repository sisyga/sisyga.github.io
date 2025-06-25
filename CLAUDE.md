# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an academic personal homepage built using Jekyll and the Academic Pages theme. It's a static site hosted on GitHub Pages for showcasing academic work, publications, talks, and teaching materials.

## Site Architecture

### Content Structure
- `_pages/`: Main site pages (about, CV, publications, etc.)
- `_posts/`: Blog posts in markdown format
- `_publications/`: Academic publications (auto-generated from TSV)
- `_talks/`: Conference talks and presentations
- `_teaching/`: Teaching materials and courses
- `_portfolio/`: Portfolio items
- `files/`: Static files (PDFs, slides, papers)

### Layout System
- `_layouts/`: Jekyll layout templates
- `_includes/`: Reusable HTML components
- `_sass/`: SCSS stylesheets
- `assets/`: Compiled CSS and JavaScript

### Data Management
- `_data/`: YAML configuration files
  - `navigation.yml`: Site navigation structure
  - `authors.yml`: Author information
  - `ui-text.yml`: UI text translations

### Content Generation
- `markdown_generator/`: Python scripts and Jupyter notebooks
  - Convert TSV files to markdown posts
  - `publications.tsv` → `_publications/*.md`
  - `talks.tsv` → `_talks/*.md`

## Key Configuration

### Site Configuration (`_config.yml`)
- Author profile and social links
- Jekyll collections setup
- Plugin configuration
- Site metadata and SEO settings

### Content Categories
- Publications: books, manuscripts, conferences
- Collections: teaching, publications, portfolio, talks
- Each collection has specific permalink structure

## Development Notes

- Site uses GitHub Pages compatible plugins only
- JavaScript is minified using UglifyJS
- SCSS is compiled by Jekyll
- Images stored in `/images/` directory
- Static files served from `/files/` directory
- Talkmap functionality uses Leaflet for geographic visualization