module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/uheron/react-ci-cd",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
