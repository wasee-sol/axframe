# axframe

Solution for Real-world Software

## Install

```shell
git clone git@github.com:axisj/axframe.git myproject
cd myproject
npm i
```

## Development

```shell
npm run dev
```

## Build

```shell
npm run build
```

- In the development mode, check the disable cache option on the network tab.

## Submodule

To use axframe, you must add an axframe-core submodule to your project.
How to manage axframe-core submodules.

### git submodule add

> $ git submodule add <repository> [path]

Manage by adding submodules to the src/@core folder.

```shell
git submodule add git@github.com:axisj/axframe-core.git src/@core
```

### git submodule remove

```shell
git submodule deinit -f src/@core
rm -rf .git/modules/src/@core
git rm -f src/@core
```
