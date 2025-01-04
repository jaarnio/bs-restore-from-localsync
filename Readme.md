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

1. Clone this repository:

   ```shell
   git clone https://github.com/your-username/your-repo.git
   ```

2. Place the local-sync.json file in the root directory of the cloned repository.

3. Run the extraction script:

   ```shell
   python extract.py
   ```

4. The extracted files will be staged in the `output` directory, preserving their original folder structure and names.

## License

This project is licensed under the [MIT License](LICENSE).
