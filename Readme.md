# BrightSign Local Sync Pool File Extractor

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

This project aims to extract the pool files from a local-sync.json file, as found on a BrightSign device, and stage them back to a source folder structure with their original names.

## Features

- Extracts pool files from local-sync.json
- Restores files to their original folder structure
- Preserves original file names

## Prerequisites

- [BrightSign device](https://www.brightsign.biz/)
- [Local-sync.json](https://docs.brightsign.biz/display/DOC/Local+Sync) file from the BrightSign device

## Usage

Copy the "bs-restoreFromSync.js" to the root of the BrightSign card image and run.  Script will create a "Source" subfolder and copy the source media using its original filename.
