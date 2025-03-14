# Jiggle Genius 🖱️

A simple and efficient mouse jiggler CLI tool designed to keep your computer awake. Whether you're preventing your screen from locking during a presentation or keeping your online status active, Jiggle Genius has got you covered.

## Features

- 🎯 Smooth circular mouse movement pattern
- ⚙️ Configurable duration, radius, and speed
- 🎮 Easy to use CLI interface
- 💻 Cross-platform support (Windows, macOS,Linux) 
- 🛑 Graceful shutdown with Ctrl+C

## Installation

### Global Installation (Recommended)

```bash
npm install -g jiggle-genius
```

### Local Installation

```bash
npm install jiggle-genius
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

- Node.js >= 14.0.0
- npm >= 6.0.0

## Building from Source

1. Clone the repository:
```bash
git clone https://github.com/diegodscamara/jiggle-genius.git
cd jiggle-genius
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
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
