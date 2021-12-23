const ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/ludchieng/LiNote.git',
    user: {
      name: 'ludchieng',
      email: 'ludwig.chieng@gmail.com'
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)
