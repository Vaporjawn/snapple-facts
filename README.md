<h1 align="center"><img src='./src/assets/Snapple_logo_(2020).png' width='50' height='30' align='center' alt='Snapple Logo' />
Snapple Facts
<img src='./src/assets/Snapple_logo_(2020).png' width='50' height='30' align='center' alt='Snapple Logo' />
</h1>

[![Installation](https://github.com/Vaporjawn/snapple-facts/actions/workflows/install.js.yml/badge.svg)](https://github.com/Vaporjawn/snapple-facts/actions/workflows/install.js.yml)
[![Build](https://github.com/Vaporjawn/snapple-facts/actions/workflows/build.js.yml/badge.svg)](https://github.com/Vaporjawn/snapple-facts/actions/workflows/build.js.yml)
[![Linting](https://github.com/Vaporjawn/snapple-facts/actions/workflows/lint.js.yml/badge.svg)](https://github.com/Vaporjawn/snapple-facts/actions/workflows/lint.js.yml)
[![Tests](https://github.com/Vaporjawn/snapple-facts/actions/workflows/tests.js.yml/badge.svg)](https://github.com/Vaporjawn/snapple-facts/actions/workflows/tests.js.yml)
[![Security Scan](https://github.com/Vaporjawn/snapple-facts/actions/workflows/securityScan.yml/badge.svg)](https://github.com/Vaporjawn/snapple-facts/actions/workflows/securityScan.yml)

[![GitHub repo forks](https://img.shields.io/github/forks/Vaporjawn/snapple-facts?style=flat&logo=github&logoColor=whitesmoke&label=Forks)](https://github.com/Vaporjawn/snapple-facts/network)&#160;[![GitHub repo stars](https://img.shields.io/github/stars/Vaporjawn/snapple-facts?style=flat&logo=github&logoColor=whitesmoke&label=Stars)](https://github.com/Vaporjawn/snapple-facts/stargazers)&#160;[![GitHub repo contributors](https://img.shields.io/github/contributors-anon/Vaporjawn/snapple-facts?style=flat&logo=github&logoColor=whitesmoke&label=Contributors)](https://github.com/Vaporjawn/snapple-facts/graphs/contributors)[![GitHub org sponsors](https://img.shields.io/github/sponsors/Vaporjawn?style=flat&logo=github&logoColor=whitesmoke&label=Sponsors)](https://github.com/sponsors/Vaporjawn)&#160;[![GitHub repo watchers](https://img.shields.io/github/watchers/Vaporjawn/snapple-facts?style=flat&logo=github&logoColor=whitesmoke&label=Watchers)](https://github.com/Vaporjawn/snapple-facts/watchers)&#160;[![GitHub repo size](https://img.shields.io/github/repo-size/Vaporjawn/snapple-facts?style=flat&logo=github&logoColor=whitesmoke&label=Repo%20Size)](https://github.com/Vaporjawn/snapple-facts/archive/refs/heads/main.zip)

[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Vaporjawn/snapple-facts/dev/typescript/main?style=flat&logo=typescript&logoColor=whitesmoke&label=TypeScript)](https://www.typescriptlang.org/)&#160;![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Vaporjawn/snapple-facts/dev/prettier/main?style=flat&logo=prettier&logoColor=whitesmoke&label=Prettier)&#160;![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Vaporjawn/snapple-facts/dev/eslint/main?style=flat&logo=eslint&logoColor=whitesmoke&label=ESLint)&#160;![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Vaporjawn/snapple-facts/dev/jest/main?style=flat&logo=jest&logoColor=whitesmoke&label=Jest)&#160;

## Usage

### Installation

```bash
npm install snapple-facts --save-dev
```

### Usage in Typescript

All the methods that you will need are available in this class

```typescript
import SnappleFacts from 'snapple-facts';

const snappleFacts = new SnappleFacts();

const randomFact: SnappleFact = snappleFacts.randomFact();

console.log(randomFact);
```

#### Available Methods

```typescript
snappleFacts.randomFact(): SnappleFact;
snappleFacts.getFacts(): SnappleFact[];
snappleFacts.listFacts(): string[];
snappleFacts.getFactByNumber(factNumber: number): SnappleFact | undefined;
```

### Functional Usage

```typescript
import { RandomFact, GetFacts, ListFacts, GetFactByNumber } from 'snapple-facts';

const randomFact: SnappleFact = RandomFact();
const facts: SnappleFact[] = GetFacts();
const factList: string[] = ListFacts();
const factByNumber: SnappleFact | undefined = GetFactByNumber(1);
```

## Technologies

<img alt="TypeScript" src="https://img.shields.io/badge/typescript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white"/><img alt="Prettier" src="https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=white"/><img alt="ESLint" src="https://img.shields.io/badge/eslint-%234B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white"/><img alt="Jest" src="https://img.shields.io/badge/jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white"/><img alt="NodeJS" src="https://img.shields.io/badge/nodejs-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white"/><img alt="NPM" src="https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>

## How To Contribute

Click on these badges to see how you might be able to help:

<div align="center" markdown="1">

[![GitHub repo Issues](https://img.shields.io/github/issues/Vaporjawn/snapple-facts?style=flat&logo=github&logoColor=red&label=Issues)](https://github.com/Vaporjawn/snapple-facts/issues)&#160;[![GitHub repo Good Issues for newbies](https://img.shields.io/github/issues/Vaporjawn/snapple-facts/good%20first%20issue?style=flat&logo=github&logoColor=green&label=Good%20First%20issues)](https://github.com/Vaporjawn/snapple-facts/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)&#160;[![GitHub Help Wanted issues](https://img.shields.io/github/issues/Vaporjawn/snapple-facts/help%20wanted?style=flat&logo=github&logoColor=b545d1&label=%22Help%20Wanted%22%20issues)](https://github.com/Vaporjawn/snapple-facts/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22)[![GitHub repo PRs](https://img.shields.io/github/issues-pr/Vaporjawn/snapple-facts?style=flat&logo=github&logoColor=orange&label=PRs)](https://github.com/Vaporjawn/snapple-facts/pulls)&#160;[![GitHub repo Merged PRs](https://img.shields.io/github/issues-search/Vaporjawn/snapple-facts?style=flat&logo=github&logoColor=green&label=Merged%20PRs&query=is%3Amerged)](https://github.com/Vaporjawn/snapple-facts/pulls?q=is%3Apr+is%3Amerged)&#160;[![GitHub Help Wanted PRs](https://img.shields.io/github/issues-pr/Vaporjawn/snapple-facts/help%20wanted?style=flat&logo=github&logoColor=b545d1&label=%22Help%20Wanted%22%20PRs)](https://github.com/Vaporjawn/snapple-facts/pulls?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22)

</div>

### Installation

[![Installation](https://github.com/Vaporjawn/snapple-facts/actions/workflows/install.js.yml/badge.svg)](https://github.com/Vaporjawn/snapple-facts/actions/workflows/install.js.yml)

```bash
npm install
```

### Running

```bash
npm start
```

or

```bash
npm run dev
```

### Testing

[![Tests](https://github.com/Vaporjawn/snapple-facts/actions/workflows/tests.js.yml/badge.svg)](https://github.com/Vaporjawn/snapple-facts/actions/workflows/tests.js.yml)

```bash
npm test
```

### Building

[![Build](https://github.com/Vaporjawn/snapple-facts/actions/workflows/build.js.yml/badge.svg)](https://github.com/Vaporjawn/snapple-facts/actions/workflows/build.js.yml)

```bash
npm run build
```

## Thanks to all Contributors 💪

- **Thank you** for considering to contribute
- Feel free to submit feature requests, UI updates, bugs as issues.
- Checkout [Contribution Guidelines](https://github.com/Vaporjawn/snapple-facts/blob/master/CONTRIBUTING.md) for more information.
- Have a feature request? Feel free to create a issue for it.

[![Contributors](https://contrib.rocks/image?repo=Vaporjawn/snapple-facts)](https://github.com/Vaporjawn/snapple-facts/graphs/contributors)

## Your Support means a lot

Give a ⭐ to show support for the project.
