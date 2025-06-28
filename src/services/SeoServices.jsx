import axios from "axios";
import config from "../../config";

const SeoServices = {};

SeoServices.seoList = () => {
    return axios.get(`${config.apiUrl}/api/seo`);
};
SeoServices.seoBySlug = (params) => {
    if (!params?.slug) {
        return []
    }
    return axios.get(`${config.apiUrl}/api/seo/${params.slug}`);
};
SeoServices.addSeo = (formdata) => {
    return axios.post(`${config.apiUrl}/api/admin/seo`, formdata, HttpHeaders.getAuthHeader());
};
SeoServices.updateSeoBySlug = (formdata) => {
    return axios.put(`${config.apiUrl}/api/admin/seo/${formdata?.get("slugId")}`, formdata, HttpHeaders.getAuthHeader());
};

SeoServices.deleteSeo = (formdata) => {
    return axios.delete(`${config.apiUrl}/api/admin/seo/${formdata?.id}`, HttpHeaders.getAuthHeader());
};

export default SeoServices;
