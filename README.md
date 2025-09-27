# uniqtab

Chrome extension that automatically closes old duplicate tabs when you open the same URL again, keeping only the latest one.

## Features

- Automatically closes existing tabs when you open a duplicate URL
- Works across all browser windows
- Keeps only the most recently opened tab
- Lightweight background service with minimal resource usage

## Installation

Install from [Chrome Web Store](https://chrome.google.com/webstore/detail/uniqtab/ijlcoehenbpgjeepmgnlccidiioiiack?hl=en)

## Development

### Prerequisites

- Node.js 20 or higher
- pnpm 10.17.1 or higher

### Setup

```bash
# Install dependencies
pnpm install

# Start development mode with watch
pnpm dev

# Build for production
pnpm build

# Type check
pnpm typecheck

# Format code
pnpm format

# Create release package
pnpm package
```

### Tech Stack

- **Build Tool**: Vite 7 with [@crxjs/vite-plugin](https://crxjs.dev/vite-plugin)
- **Language**: TypeScript 5
- **Package Manager**: pnpm
- **Git Hooks**: lefthook (auto-formatting on commit)

### Project Structure

```
uniqtab/
├── src/
│   ├── background.ts    # Background service worker
│   └── manifest.ts      # Chrome extension manifest
├── dist/                # Build output
└── package.zip          # Release package
```

## License

MIT
