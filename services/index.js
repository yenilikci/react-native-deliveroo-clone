import sanityClient from "../sanity";

export default {
    GetCategory() {
        return sanityClient.fetch(`
           *[_type == "category"]
        `);
    },

    GetFeaturedCategories() {
        return sanityClient.fetch(`
            *[_type == "featured"] {
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->
                }
            }
     `);
    },

    GetFeaturedRow(id) {
        return sanityClient.fetch(`
            *[_type == "featured" && _id== $id] {
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->,
                    type-> {
                       name
                    }
                 },
              }[0]
        `, {id});
    }
};
