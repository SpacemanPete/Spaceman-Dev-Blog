export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f397469d56b5b6f22b42196',
                  title: 'Sanity Studio',
                  name: 'spaceman-dev-blog-studio',
                  apiId: 'f0abc059-a8f7-496c-be10-5e7d2bd8dccd'
                },
                {
                  buildHookId: '5f39746ac3f45fc04de0d92d',
                  title: 'Blog Website',
                  name: 'spaceman-dev-blog',
                  apiId: '00362700-53a4-4ee4-8921-6d7f193c5aa8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SpacemanPete/Spaceman-Dev-Blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://spaceman-dev-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
