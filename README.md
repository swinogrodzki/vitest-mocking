# vitest-mocking
Debugging Vitest mocking

This demo actually works... :)

Known issue:

When run in Windows 10/11 in `cmd.exe` as Admin:
`npm run test-run` results in a test without mocking (`vi.mock` never gets triggered),
which results in 1 failed test (where mocking is required).

Running `npm run test-run` in `cmd.exe` as a local user or Git Bash results in success.

Running `vitest --run` directly in IDE also results in success.

## Install

```shell
npm install
```

## Run

```shell
npm run dev
```

## Test

```shell
npm test
```
(runs a hot reload server)

or

```shell
npm run test
```

or

```shell
npm run test-run
```
(runs once)
