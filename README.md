# Cursor Agent for VSCode

A VSCode extension that provides quick access to launch cursor-agent in a terminal with keyboard shortcuts and smart terminal management.

## Features

- **Quick Launch**: Start cursor-agent with a simple keyboard shortcut
- **Editor Integration**: Toolbar button for easy access

## Requirements

- VSCode 1.85.0 or higher
- **Cursor CLI**: You must install Cursor CLI first from [https://cursor.com/cli](https://cursor.com/cli)
- cursor-agent command available in your PATH (installed with Cursor CLI)

## Installation

### From VSCode Marketplace
1. Open VSCode
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Cursor Agent for VSCode"
4. Click Install

### Manual Installation
1. Download the `.vsix` file from releases
2. Open VSCode
3. Run `Extensions: Install from VSIX...` command
4. Select the downloaded `.vsix` file

## Usage

### Keyboard Shortcut
- **Default**: `Cmd+G C` (Mac) / `Ctrl+G C` (Windows/Linux)
- Press `Cmd+G` (or `Ctrl+G`), then press `C` to launch cursor-agent

### Toolbar Button
- Click the Cursor icon in the editor toolbar when viewing any file

### Command Palette
- Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
- Type "Open Cursor Agent" and press Enter

## Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/minazukie/cursor-agent-for-vscode.git
cd cursor-agent-for-vscode

# Install dependencies
pnpm install

# Compile TypeScript
pnpm run compile

# Package the extension
pnpm run package
```

### Development Scripts

- `pnpm run compile` - Compile TypeScript files
- `pnpm run watch` - Watch and compile TypeScript files
- `pnpm run package` - Create .vsix package
- `pnpm run deploy` - Publish to VSCode Marketplace

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/minazukie/cursor-agent-for-vscode/issues) on GitHub.