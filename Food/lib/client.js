
import sanityClient from '@sanity/client';
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient ({
    projectId: "uti3i56z",
    dataset: "production",
    apiVersion: "2023-11-05",
    useCdn: true,
    token: "sk382TzaH7UIXoGH03BxKRpOo57DWdpvTsDZk38uXR7dpQueW3Wg3QWpBAIKN50V1gKEYR7qGe0d4Y7uqx9IVBqmnMk0z9YiUwEEy2NELA0euBNc3uNQqWwcDPtPtdZV1uziIvdM0nfRh5XAaR4q6UAG8w6qbVAAtEevzCTdQwni7PjtgDSX",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)

