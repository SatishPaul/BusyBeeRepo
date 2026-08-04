# BusyBee - AI Skills & Prompts Marketplace

A community-driven marketplace for discovering, sharing, and collaborating on AI skills, prompts, workflows, and agents.

## 🎯 Mission

Empower developers and AI enthusiasts to discover and share reusable AI solutions. Build faster with proven community contributions.

## ✨ Features

- 🔍 **Smart Search**: Full-text and semantic search across 1000+ assets
- 🏷️ **Rich Categorization**: Filter by type (Prompt, Skill, Agent, Workflow, Plugin, Template)
- ⭐ **Community Ratings**: Rate and review contributions
- 💾 **Save & Collections**: Bookmark favorites and create custom collections
- 🔗 **GitHub Integration**: Auto-import from GitHub repositories
- 👥 **Verified Contributors**: Badges for trusted community members
- 📊 **Analytics**: Track usage, downloads, and impact
- 🌍 **Open Source**: MIT licensed, community-driven

## 🚀 Quick Start

### Prerequisites

- Node.js >=18.0.0
- npm >=9.0.0
- Supabase account (free tier works)

### Installation

```bash
# Clone the repository
git clone https://github.com/busybee/busybee.git
cd busybee

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Initialize database
npm run db:setup

# Seed initial data
npm run db:seed

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## 📁 Project Structure

```
busybee/
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
├── lib/                    # Utility functions and helpers
├── sql/                    # Database schema and migrations
├── scripts/                # Utility scripts (db setup, seeding)
├── styles/                 # Global CSS and Tailwind config
├── public/                 # Static assets
├── tests/                  # Test files (Jest + Playwright)
└── docs/                   # Documentation
    ├── ARCHITECTURE.md     # System design
    ├── CONTENT_MODEL.md    # Asset structure
    └── IMPLEMENTATION_PLAN.md # Development roadmap
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Run production server

# Testing
npm run test             # Run unit/integration tests
npm run test:coverage    # Generate coverage report
npm run e2e              # Run E2E tests
npm run e2e:debug        # Debug E2E tests in UI mode

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format with Prettier
npm run type-check       # Check TypeScript types

# Database
npm run db:setup         # Initialize schema
npm run db:seed          # Populate seed data
npm run db:migrate       # Run migrations

# Pre-commit
npm run prepare           # Set up Husky hooks
```

## 🗄️ Database Schema

### Core Tables

- `users`: User profiles with GitHub integration
- `assets`: Main catalog of skills, prompts, workflows, etc.
- `categories`: Asset categorization
- `collections`: User-curated collections
- `ratings`: Community feedback and reviews
- `saves`: Bookmarks and favorites
- `follows`: Social connections between users

### Search Indexes

- Full-text search on asset titles and descriptions
- JSONB indexing for flexible metadata
- GIN indexes on array fields (tags, industries, frameworks)

## 🔐 Security

- **Authentication**: Supabase Auth with JWT tokens
- **Authorization**: Row-level security (RLS) policies
- **Input Validation**: Server-side validation on all mutations
- **Rate Limiting**: API endpoint protection
- **HTTPS Only**: Enforced in production
- **CORS**: Properly configured for security

## ♿ Accessibility

- WCAG 2.2 AA compliance
- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Color contrast compliance
- Screen reader tested

## 📊 Performance

- **Lighthouse Scores**: Target ≥90 across all categories
- **Core Web Vitals**: LCP, FID, CLS optimization
- **CDN**: Static assets served via Vercel Edge Network
- **Caching**: Smart cache strategies for API responses
- **Code Splitting**: Automatic with Next.js

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Submission Process

1. **Create Account**: Sign up on BusyBee
2. **Submit Asset**: Fill in metadata and description
3. **Review**: Community review and moderation
4. **Publish**: Make asset available to all users
5. **Monitor**: Track usage and ratings

### Asset Guidelines

- **Quality**: Must be production-ready or clearly marked as beta
- **Documentation**: Clear instructions and examples required
- **License**: Must specify open-source license
- **Attribution**: Original authors clearly credited
- **Testing**: Tested and verified before submission

## 📚 Documentation

- [Architecture Guide](Docs/ARCHITECTURE.md)
- [Content Model](Docs/CONTENT_MODEL.md)
- [Implementation Plan](Docs/IMPLEMENTATION_PLAN.md)
- [API Documentation](docs/api.md) (Coming soon)
- [Contribution Guidelines](CONTRIBUTING.md)

## 🐛 Reporting Issues

Found a bug? Please [open an issue](https://github.com/busybee/busybee/issues/new) with:

- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment (OS, browser, Node version)

## 💬 Community

- **Discussions**: [GitHub Discussions](https://github.com/busybee/busybee/discussions)
- **Discord**: [Join our community](https://discord.gg/busybee)
- **Twitter**: [@BusyBeeAI](https://twitter.com/BusyBeeAI)
- **Email**: hello@busybee.dev

## 📈 Roadmap

### Phase 1 (Weeks 1-2)
- ✅ Core UI and search functionality
- ✅ Database schema
- ✅ Asset catalog (100+ starter assets)

### Phase 2 (Weeks 2-4)
- 🚀 User authentication and profiles
- 🚀 Submission and moderation workflow
- 🚀 GitHub synchronization

### Phase 3 (Weeks 4-6)
- 📋 Community features (ratings, comments)
- 📋 Advanced search and filtering
- 📋 Analytics dashboard

### Phase 4 (Weeks 6-8)
- 🔄 Mobile optimization
- 🔄 API v1.0
- 🔄 Public beta launch

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

## 🙏 Acknowledgments

- Community contributors
- Inspired by awesome-* repositories
- Powered by Supabase, Next.js, and React

## 📞 Support

Need help? 

- Check [FAQ](docs/faq.md)
- Search [existing issues](https://github.com/busybee/busybee/issues)
- Ask in [Discussions](https://github.com/busybee/busybee/discussions)
- Email support@busybee.dev

---

Made with 🐝 by the BusyBee Community
