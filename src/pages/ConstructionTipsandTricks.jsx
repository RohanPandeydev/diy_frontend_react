import React, { Suspense, lazy, useState } from 'react'
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import useSeoHelmet from '../hooks/ReactHelmet';
import SeoHelmet from '../common/SeoHelmet';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCustomQuery } from '../utils/QueryHooks';
import BlogServices from '../services/BlogServices';
import { buildQueryString } from '../utils/BuildQuery';
import Loader from '../utils/Loader/Loader';
import NoDataFound from '../utils/NoDataFound';
import BlogCard from '../components/blogandnews/BlogCard';
import Pagination from '../utils/Pagination';
import { Row } from 'reactstrap';
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));

const ConstructionTipsandTricks = () => {
    const seo = useSeoHelmet("construction-tips-tricks"); // Fetch SEO by slug

    const navigate = useNavigate()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [limit, setLimit] = useState(10)


    // Get page from URL, default to 1
    const currentPage = parseInt(searchParams.get('page') || '1');

    const {
        data: blogList,
        isLoading: isBlogLoad,
    } = useCustomQuery({
        queryKey: ['blog-list-category', currentPage],
        service: BlogServices.blogList,
        params: buildQueryString([{
            key: "page", value: currentPage || 1,
        }, {
            key: "limit", value: limit || 10
        },
        {
            key: "category_slug", value: "construction-tips-tricks"
        },
        {
            key: "is_published", value: true
        },


        ]),
        select: (data) => {
            return data?.data;
        },
        errorMsg: "",
        onSuccess: (data) => {

        }
    });



    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />
            <Banner
                title={"Blog and News"}
                description={"Construction Tips & Tricks"}
            />
            {
                isBlogLoad ? <Loader /> : <section className="blog-listing common-section container">
                    <Row>
                        {
                            blogList?.data?.length == 0 ? <NoDataFound msg={"No Blog Found"} /> : blogList?.data.map(blog => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))
                        }
                    </Row>
                    {!isBlogLoad && <Pagination
                        pagination={blogList?.pagination}
                    />}
                </section>
            }


            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>


        </div>
    )
}

export default ConstructionTipsandTricks