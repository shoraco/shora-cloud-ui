# Shora Cloud UI

[![npm version](https://img.shields.io/npm/v/@shoracloud/ui.svg?style=flat)](https://www.npmjs.com/package/@shoracloud/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-Enabled-ff4785.svg)](https://storybook.js.org/)

Beautiful, customizable UI components for [Shora Cloud Platform](https://shora.cloud) - Build modern e-commerce experiences with ease.

## 📚 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Components](#-components)
- [Theming](#-theming)
- [Contributing](#-contributing)
- [Support](#-support)

## ✨ Features

- 🎨 **Modern Design System**: Clean, professional, and customizable components
- 📱 **Responsive Components**: Mobile-first approach for all screen sizes
- 🌙 **Dark Mode Support**: Built-in dark mode and theme customization
- ♿️ **Accessibility**: WCAG 2.1 compliant components
- 🚀 **Performance Optimized**: Tree-shakeable, small bundle size
- 📦 **Easy Integration**: Simple setup with any React project
- 🎭 **Storybook Documentation**: Interactive component documentation

## 📦 Installation

```bash
# Using npm
npm install @shoracloud/ui

# Using yarn
yarn add @shoracloud/ui

# Using pnpm
pnpm add @shoracloud/ui
```

## 🔧 Usage

```jsx
import { Button, ProductCard } from '@shoracloud/ui';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Shop Now
      </Button>
      
      <ProductCard
        title="Awesome Product"
        price={99.99}
        imageUrl="/product.jpg"
        onAddToCart={() => console.log('Added to cart')}
      />
    </div>
  );
}
```

## 🎨 Components

### Core Components

- **Button**: Customizable button component with variants
- **Input**: Text input with validation
- **Select**: Dropdown selection component
- **Modal**: Accessible modal dialog
- **Toast**: Notification system

### Commerce Components

- **ProductCard**: Display product information
- **PriceTag**: Format and display prices
- **CartItem**: Shopping cart item display
- **OrderSummary**: Order details component
- **PaymentForm**: Secure payment form

### Layout Components

- **Container**: Responsive container
- **Grid**: Flexible grid system
- **Stack**: Vertical/horizontal stack
- **Divider**: Section separator

## 🎯 Theming

Customize your components with our theming system:

```jsx
import { ThemeProvider, createTheme } from '@shoracloud/ui';

const theme = createTheme({
  colors: {
    primary: '#2563eb',
    secondary: '#f3f4f6',
    // ... more colors
  },
  // ... other theme options
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/shoraco/shora-cloud-ui.git

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Build the package
npm run build
```

## 📖 Documentation

- [Component API](./docs/api.md)
- [Theming Guide](./docs/theming.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Migration Guide](./docs/migration.md)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch
3. Add or improve components
4. Submit a Pull Request

Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## 🔒 Security

- [Security Policy](SECURITY.md)
- [Best Practices](./docs/security.md)
- [Vulnerability Reporting](https://shora.cloud/security)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

- 📧 Email: support@shora.cloud
- 💬 Discord: [Join our community](https://discord.gg/shora-cloud)
- 📚 Documentation: [docs.shora.cloud](https://docs.shora.cloud)
- 🐦 Twitter: [@ShoraCloud](https://twitter.com/shoracloud)

## 🏢 About Shora Cloud

Shora Cloud is a headless, API-first commerce platform developed by Shora Technology Inc. Learn more at [shora.cloud](https://shora.cloud).
