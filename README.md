# Jiggle Genius 🖱️

[![npm version](https://img.shields.io/npm/v/jiggle-genius.svg)](https://www.npmjs.com/package/jiggle-genius)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-18.20.7-brightgreen.svg)](https://nodejs.org/en/)
[![Downloads](https://img.shields.io/npm/dm/jiggle-genius.svg)](https://www.npmjs.com/package/jiggle-genius)

A simple and efficient mouse jiggler CLI tool designed to keep your computer awake. Whether you're preventing your screen from locking during a presentation or keeping your online status active, Jiggle Genius has got you covered.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [Global Installation](#global-installation-recommended)
  - [Local Installation](#local-installation)
- [Usage](#usage)
  - [Command Line Interface](#command-line-interface)
  - [Examples](#examples)
  - [Programmatic Usage](#programmatic-usage)
- [Requirements](#requirements)
- [Building from Source](#building-from-source)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Support](#support)

## Features

- 🎯 Smooth circular mouse movement pattern
- ⚙️ Configurable duration, radius, and speed
- 🎮 Easy to use CLI interface
- 💻 Cross-platform support (Windows, macOS, Linux) 
- 🛑 Graceful shutdown with Ctrl+C

## Installation

### Global Installation (Recommended)

Using pnpm (recommended):
```bash
# First ensure you're using Node.js v18
nvm use 18

# Then install globally
pnpm add -g jiggle-genius
```

Using npm:
```bash
nvm use 18  # Required for robotjs compatibility
npm install -g jiggle-genius
```

Using yarn:
```bash
nvm use 18  # Required for robotjs compatibility
yarn global add jiggle-genius
```

### Local Installation

Using npm:
```bash
npm install jiggle-genius
```

Using yarn:
```bash
yarn add jiggle-genius
```

Using pnpm:
```bash
pnpm add jiggle-genius
```

## Usage

### Command Line Interface

```bash
jiggle [options]
```

#### Options:

- `-d, --duration`: Duration in minutes (default: 30)
- `-r, --radius`: Radius of the circular movement in pixels (default: 10)
- `-s, --speed`: Movement speed from 1-10 (default: 2)
- `-h, --help`: Show help
- `-v, --version`: Show version number

### Examples

```bash
# Run with default settings (30 minutes)
jiggle

# Run for 2 hours
jiggle -d 120

# Run with custom radius and speed
jiggle -d 60 -r 20 -s 5

# Show help
jiggle --help
```

### Programmatic Usage

You can also use Jiggle Genius in your Node.js applications:

```typescript
import jiggleGenius from 'jiggle-genius';

// Run with default settings
jiggleGenius();

// Run with custom configuration
jiggleGenius({
  duration: 60,  // 60 minutes
  radius: 20,    // 20 pixels
  speed: 5       // Speed 5
});
```

## Requirements

- Node.js v18.20.7 (required for robotjs compatibility)
  ```bash
  # Using nvm (recommended)
  nvm install 18
  nvm use 18
  
  # Verify version
  node -v  # Should show v18.20.7
  ```
- One of the following package managers:
  - pnpm >= 10.5.0 (recommended)
  - npm >= 6.0.0
  - yarn >= 1.22.0

## Building from Source

1. Clone the repository:
```bash
git clone https://github.com/diegodscamara/jiggle-genius.git
cd jiggle-genius
```

2. Install dependencies (choose one):
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm (recommended)
pnpm install
```

3. Build the project:
```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm (recommended)
pnpm build
```

## Troubleshooting

### Common Issues

#### Node.js Version Mismatch

If you see errors related to `robotjs` or native dependencies:
```bash
Error: The module was compiled against a different Node.js version
```

Solution:
1. Switch to Node.js v18.20.7:
```bash
nvm install 18.20.7
nvm use 18.20.7
```
2. Reinstall the package:
```bash
npm uninstall -g jiggle-genius
npm install -g jiggle-genius
```

#### Permission Issues (Linux/macOS)

If you encounter permission errors:
```bash
Error: EACCES: permission denied
```

Solution:
```bash
# Using npm
sudo npm install -g jiggle-genius

# Using pnpm
sudo pnpm add -g jiggle-genius
```

#### Other Issues

- Make sure you have the latest version of your package manager
- Clear your package manager's cache if needed:
  ```bash
  npm cache clean --force
  # or
  pnpm store prune
  ```
- Check the [GitHub issues](https://github.com/diegodscamara/jiggle-genius/issues) for similar problems and solutions

## Contributing

We welcome contributions to Jiggle Genius! Here's how you can help:

### Bug Reports & Feature Requests

- Use the [GitHub issue tracker](https://github.com/diegodscamara/jiggle-genius/issues) to report bugs or suggest features.
- Before creating a new issue, please check if a similar issue already exists.
- When reporting bugs, include:
  - Node.js version (`node -v`)
  - Operating system and version
  - Steps to reproduce the issue
  - Expected vs actual behavior

### Pull Requests

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests: `pnpm test`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Keep commits atomic and write clear commit messages
- Ensure all tests pass before submitting a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Diego Camara ([@diegodscamara](https://github.com/diegodscamara))

## Support

### Getting Help

- **Issues**: If you encounter any issues or have questions, please [open an issue](https://github.com/diegodscamara/jiggle-genius/issues) on GitHub.
- **Discussions**: For general questions and discussions, use the [GitHub Discussions](https://github.com/diegodscamara/jiggle-genius/discussions) tab.
- **Documentation**: Check out our [Wiki](https://github.com/diegodscamara/jiggle-genius/wiki) for additional documentation.

### Stay Updated

- Star the repository to show your support and stay updated
- Watch the repository for release notifications
- Follow [@diegodscamara](https://github.com/diegodscamara) for project updates

**Keep your computer awake with Jiggle Genius!** 🖱️✨
