# SpotLinkIO Client

A modern React TypeScript frontend application for SpotLinkIO - Smart Parking Solutions platform that revolutionizes parking management through IoT technology.

## 🚀 Features

- **QR Code Entry** - Quick, touchless gate access with unique QR codes
- **Live Spot Guidance** - Real-time parking spot assignment and navigation
- **99% Availability** - Guaranteed parking spots with smart allocation
- **Effortless Payments** - Seamless in-app payment system
- **Responsive Design** - Optimized for desktop and mobile devices
- **Modern UI** - Built with Radix UI and TailwindCSS

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with Radix UI components
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM v7
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Icons**: Lucide React, React Icons
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/SpotLinkIO-frontend.git
cd SpotLinkIO-frontend
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code with Prettier |
| `pnpm check-format` | Check code formatting |

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, inputs, etc.)
│   └── layout/         # Layout components (header, footer, etc.)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
└── styles/             # Global styles and Tailwind config
```

## 🎨 Design System

This project uses a modern design system built with:

- **TailwindCSS** for utility-first styling
- **Radix UI** for accessible, unstyled components
- **Custom color palette** focused on blue tones for parking industry
- **Responsive breakpoints** for mobile-first design

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:4000/api
VITE_APP_NAME=SpotLinkIO
```

### Tailwind Configuration

The project includes custom Tailwind configuration for:
- Custom color schemes
- Animation utilities
- Component variants
- Responsive design tokens

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Development**: Modern React TypeScript application
- **UI/UX Design**: Responsive and accessible design system
- **Integration**: RESTful API integration with React Query

## 🆘 Support

For support, email support@spotlinkio.com or join our Slack channel.

## 🗺️ Roadmap

- [ ] PWA support for mobile app-like experience
- [ ] Real-time notifications
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Advanced analytics dashboard
- [ ] Integration with payment gateways

---

Made with ❤️ by the SpotLinkIO team