# Development Guide

## Code Quality Tools

This project uses several tools to maintain code quality and enforce consistent standards:

### Pre-commit Hooks (Husky + lint-staged)

Before each commit, the following tools will automatically run:

- **ESLint**: Checks and fixes JavaScript/TypeScript code issues
- **Prettier**: Formats code according to project standards

These tools only run on **staged files** to keep commits fast.

### Commit Message Linting (Commitlint)

All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

#### Valid commit message format:

```
<type>[optional scope]: <description>.

[optional body]

[optional footer(s)]
```

**Important formatting rules:**

- **Must end with a period (.)**
- **Subject must start with lowercase letter** after the colon
- **Must have a space after the colon** before the description

#### Allowed types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

#### Examples of valid commit messages:

```bash
feat: add user authentication.
fix: resolve login button styling issue.
docs: update API documentation.
refactor: extract utility functions.
feat(auth): implement OAuth2 integration.
```

#### Examples of invalid commit messages:

```bash
"fixed a bug"                    # Missing type
"add new feature"                # Missing type
"Fix: Login Issue"               # Wrong case (should be lowercase)
"feat: Add New Feature."         # Subject should start with lowercase
"feat:missing space after colon." # Missing space after colon
"feat: valid message"            # Missing period at the end
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Run ESLint and fix issues
- `yarn format` - Format all files with Prettier
- `yarn format:check` - Check if files are formatted correctly

## Development Workflow

1. Make your changes
2. Stage files with `git add`
3. Commit with a conventional commit message: `git commit -m "feat: add new feature"`
4. The pre-commit hook will automatically:
   - Run ESLint on staged files
   - Format code with Prettier
   - Check your commit message format

If any of these steps fail, the commit will be rejected and you'll need to fix the issues before trying again.
