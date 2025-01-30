import { fetchFilePathsFromGitHub } from 'nextra/fetch-filepaths-from-github'

fetchFilePathsFromGitHub({
  user: 'hichemfantar',
  repo: 'erlang-eep-fork',
  branch: 'mdx',
  docsPath: 'eeps/',
  outputPath: './src/nextra-remote-filepaths/eeps.json'
})
