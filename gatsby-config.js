module.exports = {
	siteMetadata: {
		title: `Thomas Bailey`,
		name: `Thomas Bailey`,
		siteUrl: `https://noisemachines.io`,
		description: `This is my description that will be used in the meta tags and important for search results`,
		hero: {
			heading: `Welcome to Thomas. This is the place where I do the thing.`,
			maxWidth: 652
		},
		social: [
			{
				name: `twitter`,
				url: `https://twitter.com/narative`
			},
			{
				name: `github`,
				url: `https://github.com/narative`
			},
			{
				name: `instagram`,
				url: `https://instagram.com/narative.co`
			},
			{
				name: `linkedin`,
				url: `https://www.linkedin.com/company/narative/`
			},
			{
				name: `dribbble`,
				url: `https://dribbble.com/narativestudio`
			}
		]
	},
	plugins: [
		{
			resolve: '@narative/gatsby-theme-novela',
			options: {
				contentPosts: 'content/posts',
				contentAuthors: 'content/authors',
				basePath: '/',
				authorsPage: true,
				mailchimp: true,
				sources: {
					local: true
					// contentful: true,
				}
			}
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint:
					'https://thomasbailey.us10.list-manage.com/subscribe/post?u=ba4db42a0195565ed932faaf5&amp;id=4d854d6f81' // add your MC list endpoint here; see plugin repo for instructions
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Novela by Narative`,
				short_name: `Novela`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `standalone`,
				icon: `src/assets/favicon.png`
			}
		}
	]
}
