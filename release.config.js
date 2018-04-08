const script = script => ({
  path: './scripts/lifecycle',
  script,
})

module.exports = {
  branch: 'dev',
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  prepare: [
    script('preversion'),
    script('prepublishOnly'),
    script('prepack'),
    '@semantic-release/changelog',
    script('version'),
    '@semantic-release/npm',
    {
      path: '@semantic-release/git',
      assets: ['package.json', 'CHANGELOG.md', 'README.md', 'docs'],
    },
    script('postversion'),
    script('postpack'),
  ],
  publish: [
    '@semantic-release/npm',
    '@semantic-release/github',
    script('postpublish'),
  ],
}
