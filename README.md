# Jiggle Genius 🖱️

A simple and efficient mouse jiggler CLI tool designed to keep your computer awake. Whether you're preventing your screen from locking during a presentation or keeping your online status active, Jiggle Genius has got you covered.

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Diego Camara ([@diegodscamara](https://github.com/diegodscamara))

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/diegodscamara/jiggle-genius/issues) on GitHub.

**Keep your computer awake with Jiggle Genius!**
