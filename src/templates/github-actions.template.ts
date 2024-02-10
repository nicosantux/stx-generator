export const bumpVersion = `name: Bump version

on:
  workflow_dispatch:
    inputs:
      version:
        description: 'Select the type of the new version (major / minor / patch)'
        required: true
        type: choice
        options:
          - patch
          - minor
          - major

jobs:
  bump-version:
    name: 👊 Bump version
    runs-on: ubuntu-latest

    steps:
      # Use a deploy key so that when we push changes,
      # it will trigger the release workflow run
      # that runs on: tag. (Using the GitHub token would
      # not run the workflow to prevent infinite recursion)
      - name: 🎯 Checkout
        uses: actions/checkout@v4
        with:
          ssh-key: \${{ secrets.DEPLOY_KEY }}

      - name: 💻 Setup Git
        run: |
          git config user.name 'GIT_USERNAME'
          git config user.email 'GIT_EMAIL'

      - name: 👊 Bump version
        run: npm version \${{ github.event.inputs.version }}

      - name: 👌 Push latest version
        run: git push origin main --follow-tags`

export const createRelease = `name: Create Release

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    name: 🚀 Publish
    runs-on: ubuntu-latest

    steps:
      - name: 🎯 Checkout
        uses: actions/checkout@v4

      - name: 🔧 Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 8
          run_install: |
            - recursive: true
              args: [--frozen-lockfile, --strict-peer-dependencies]

      - name: 🏭 Build
        run: pnpm build

      - name: 🚀 Publish to npm
        uses: JS-DevTools/npm-publish@v3
        with:
          token: \${{ secrets.NPM_TOKEN }}

  create-github-release:
    name: 🔥 Create GitHub Release
    runs-on: ubuntu-latest
    needs: publish
    permissions:
      contents: write
    steps:
      - name: 🎯 Checkout
        uses: actions/checkout@v4

      - name: 🔥 Create Release
        run: gh release create \${{ github.ref }} --generate-notes
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}`

export const deployment = `name: Deployment

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
    types: ['opened', 'synchronize']

concurrency:
  group: \${{ github.workflow }}-\${{ github.ref }}
  cancel-in-progress: \${{ github.ref != 'refs/heads/main' }}

jobs:
  lint:
    name: 💅 Lint
    runs-on: ubuntu-latest
    steps:
      - name: 🎯 Checkout
        uses: actions/checkout@v4

      - name: 🔧 Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 8
          run_install: |
            - recursive: true
              args: [--frozen-lockfile, --strict-peer-dependencies]
      - name: 💅 Lint
        run: pnpm lint

  test:
    name: 🧪 Test
    runs-on: ubuntu-latest
    steps:
      - name: 🎯 Checkout
        uses: actions/checkout@v4

      - name: 🔧 Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 8
          run_install: |
            - recursive: true
              args: [--frozen-lockfile, --strict-peer-dependencies]
      - name: 🧪 Test
        run: pnpm test

  build:
    name: 🏭 Build
    needs: [lint, test]
    runs-on: ubuntu-latest
    steps:
      - name: 🎯 Checkout
        uses: actions/checkout@v4

      - name: 🔧 Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 8
          run_install: |
            - recursive: true
              args: [--frozen-lockfile, --strict-peer-dependencies]
      - name: 🏭 Build
        run: pnpm build`
