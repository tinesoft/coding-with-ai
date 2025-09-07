# Contributing Guidelines

We would love for you to contribute to this project and help make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:

- [Code of Conduct](#code-of-conduct)
- [Issues and Bugs](#found-a-bug)
- [Feature Requests](#missing-a-feature)
- [Submission Guidelines](#submission-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)

## Code of Conduct

Help us keep this project open and inclusive. Please read and follow our [Code of Conduct](https://github.com/sfeir-open-source/code-of-conduct/blob/master/CODE_OF_CONDUCT.md).

## Found a Bug?

If you find a bug in the project, you can help us by [submitting an issue](https://github.com/sfeir-open-source/sfeir-school-coding-with-ai/issues/new) to our [GitHub Repository](https://github.com/sfeir-open-source/sfeir-school-coding-with-ai). Even better, you can submit a Pull Request with a fix.

## Missing a Feature?

You can request a new feature by submitting an issue to our GitHub repository.

If you would like to implement a new feature, please submit an issue with a proposal for your work FIRST, to be sure that we can use it. Please consider what kind of change it is:

- For a Major Feature, first open an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.
- Small Features can be crafted and directly submitted as a Pull Request.

## Submission Guidelines

### Submitting an Issue

Before you submit an issue, please search the [issue tracker](https://github.com/sfeir-open-source/sfeir-school-coding-with-ai/issues), maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

### Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search [GitHub](https://github.com/sfeir-open-source/sfeir-school-coding-with-ai/pulls) for an open or closed PR that relates to your submission. You don't want to duplicate effort.
2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add. Discussing the design up front helps to ensure that we're ready to accept your work.
3. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) the repository.
4. [Clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) the repository locally
5. Make your changes in a new git branch:

   ```shell
   git checkout -b my-fix-branch main
   ```

6. Create your patch.
7. Commit your changes using a descriptive commit message that follows our commit message conventions.
8. Push your branch to GitHub:

   ```shell
   git push origin my-fix-branch
   ```

9. In GitHub, [send a pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

- If we suggest changes then:
  - Make the required updates.
  - Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase main -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the master (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```shell
  git push origin --delete my-fix-branch
  ```

- Check out the main branch:

  ```shell
  git checkout main -f
  ```

- Delete the local branch:

  ```shell
  git branch -D my-fix-branch
  ```

- Update your main branch with the latest upstream version:

  ```shell
  git pull --ff upstream main
  ```

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to more readable messages that are easy to follow when looking through the project history.

### Commit Message Format

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The header is mandatory and the scope of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples:

```
docs(changelog): update changelog to beta.5
```

```
fix(release): need to depend on latest ng-lib

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Type

Must be one of the following:

- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix

### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

- specs
- project

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.

Breaking Changes should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

Samples:

```
Close #394
```

```
BREAKING CHANGE:
change login route to /users/login
```
