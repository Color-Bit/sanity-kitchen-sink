export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f985727d062b2012c6b2069',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y2rpfr4y',
                  apiId: '32f9714c-f915-42da-948b-92495ef9519c'
                },
                {
                  buildHookId: '5f985728f3a4a800ea87bb2a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-v62fwhiv',
                  apiId: '57a6fcc9-12a8-41f5-afc7-d234e6d3fd6e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Color-Bit/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-v62fwhiv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
