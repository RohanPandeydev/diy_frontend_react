import axios from "axios";
import config from "../../config";

const BlogServices = {};

BlogServices.blogList = (query) => {
    return axios.get(`${config.apiUrl}/api/blogs${query}`);
};
BlogServices.blogBySlug = (params) => {
    if (!params?.slug) {
        return []
    }
    return axios.get(`${config.apiUrl}/api/blog/${params.slug}`);
};

export default BlogServices;
