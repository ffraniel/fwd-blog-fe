const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'cx7chxi9',
  dataset: 'blog',
  useCdn: true // `false` if you want to ensure fresh data
});

export default client;