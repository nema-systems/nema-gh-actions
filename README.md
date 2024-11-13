# GitHub Actions for Interacting with Nema

## Usage

To push an updated version of code to Nema, use the following steps:

```yaml
name: Push to Nema

on:
  push:
    branches:
      - main

jobs:
  push:
    runs-on: ubuntu-latest
    permissions:
      id-token: write # Needed for authentication
      contents: read # To read the file to be pushed

    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Push To Nema
        uses: nema-systems/nema-gh-actions/push-function@v1
        with:
          file: 'src/app.py'
          project: 'nema/default/tutorial'
          id: '2'
```
