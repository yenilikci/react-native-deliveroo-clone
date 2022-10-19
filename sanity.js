import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "54nrbysh",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-10-19"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
