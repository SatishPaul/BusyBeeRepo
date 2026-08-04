# Contributing to BusyBee

Thank you for your interest in contributing to BusyBee! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive. We're all here to build something amazing together.

## Ways to Contribute

### 1. Submit an Asset

The easiest way to contribute is by submitting your own skills, prompts, workflows, or agents.

**Requirements:**
- Production-ready or clearly marked as beta/draft
- Clear documentation with examples
- Specified license (preferably MIT, Apache 2.0, or GPL)
- Original work or properly attributed
- Tested and verified to work

**Process:**
1. Go to https://busybee.dev/submit
2. Fill in asset details and description
3. Add your content and examples
4. Submit for review
5. Our team reviews within 48 hours
6. Once approved, your asset goes live!

### 2. Report Bugs

Found an issue? Help us fix it!

**Report a bug:**
1. Check [existing issues](https://github.com/busybee/busybee/issues)
2. [Open a new issue](https://github.com/busybee/busybee/issues/new)
3. Include clear steps to reproduce
4. Add screenshots if relevant

### 3. Request Features

Have an idea to improve BusyBee?

1. [Open a discussion](https://github.com/busybee/busybee/discussions)
2. Describe the feature and use case
3. Get community feedback
4. We'll prioritize based on demand

### 4. Contribute Code

Want to improve the platform itself?

**Before starting:**
- Check [open issues](https://github.com/busybee/busybee/issues) for work in progress
- Comment on an issue to claim it
- Discuss major changes first

**Setup development environment:**
```bash
git clone https://github.com/busybee/busybee.git
cd busybee
npm install
npm run dev
```

**Development workflow:**
```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes
# Write tests for new code
npm run test

# Lint and format
npm run lint
npm run format

# Commit with conventional message
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/your-feature-name
```

**Commit conventions:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `test:` Tests
- `refactor:` Code refactoring
- `perf:` Performance improvement
- `chore:` Maintenance

## Pull Request Guidelines

### Before Submitting

1. **Fork the repository** and create your branch from `develop`
2. **Write tests** for new functionality
3. **Update documentation** if needed
4. **Run tests locally**: `npm run test && npm run e2e`
5. **Format code**: `npm run format`
6. **Check types**: `npm run type-check`

### PR Description

Use the [PR template](.github/pull_request_template.md) and include:

- ✅ Type of change (bug fix, feature, etc.)
- ✅ Description of changes
- ✅ Testing performed
- ✅ Screenshots for UI changes
- ✅ Checklist items completed
- ✅ Related issues/discussions

### Review Process

1. At least one maintainer review required
2. All checks must pass (lint, tests, build)
3. No merge conflicts
4. Accessibility compliance verified
5. Performance impact assessed

### After Approval

1. Squash commits if requested
2. Maintainers merge to `develop`
3. Included in next release

## Asset Submission Checklist

### Before Submitting Your Asset

- [ ] Code is production-ready (or clearly marked as beta)
- [ ] Clear, descriptive title (3-100 characters)
- [ ] Comprehensive description
- [ ] Version number in semver format (e.g., 1.0.0)
- [ ] License specified (MIT, Apache 2.0, GPL, etc.)
- [ ] At least 3 relevant tags
- [ ] Code examples or usage instructions
- [ ] Tested and verified to work
- [ ] No hardcoded secrets or credentials
- [ ] Proper attribution to original authors

### Asset Quality Standards

**Minimum Requirements:**
- ⭐ Working implementation (not just idea)
- ⭐ Clear documentation
- ⭐ Valid open-source license
- ⭐ Tested functionality

**Best Practices:**
- 🌟 Well-commented code
- 🌟 Error handling
- 🌟 Input validation
- 🌟 Unit tests
- 🌟 Performance optimized
- 🌟 Accessibility compliant (if applicable)

## Development Standards

### Code Style

- **Language**: TypeScript (strict mode)
- **Framework**: React 18, Next.js 14
- **Styling**: Tailwind CSS
- **Formatter**: Prettier
- **Linter**: ESLint

### Testing Requirements

- **Unit Tests**: Jest (60%+ coverage required)
- **Integration Tests**: Included for APIs
- **E2E Tests**: Critical user flows
- **Accessibility**: WCAG 2.2 AA compliance

### Documentation

- JSDoc comments for functions
- README for non-obvious features
- API documentation for new endpoints
- Migration guides for breaking changes

## Getting Help

- 📚 Check [existing docs](Docs/)
- 💬 Ask in [Discussions](https://github.com/busybee/busybee/discussions)
- 🐛 Search [issues](https://github.com/busybee/busybee/issues)
- 💌 Email hello@busybee.dev
- 🔗 Join [Discord](https://discord.gg/busybee)

## Recognition

Contributors are recognized via:
- GitHub profile in [CONTRIBUTORS.md](CONTRIBUTORS.md)
- Monthly featured contributor spotlight
- Verified contributor badge (10+ accepted submissions)
- Contributor tier in Discord server

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for making BusyBee better! 🐝**
