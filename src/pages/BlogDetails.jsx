import React, { Suspense, lazy } from 'react'
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import useSeoHelmet from '../hooks/ReactHelmet';
import { Col, Container, Row } from 'reactstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ImagePath from '../assets/ImagePath';
import SeoHelmet from '../common/SeoHelmet';
import BlogServices from '../services/BlogServices';
import { useCustomQuery } from '../utils/QueryHooks';
import Swal from 'sweetalert2';
import Loader from '../utils/Loader/Loader';
import moment from 'moment';
const WaveWrapper = lazy(() => import("../common/WaveWrapper"));
const Footer = lazy(() => import("../common/Footer"));
import parse from 'html-react-parser'
import { buildQueryString } from '../utils/BuildQuery';
const BlogDetails = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    // Get By Slug
    const {
        data: blogDetails,
        isLoading,
    } = useCustomQuery({
        queryKey: ['blog-details', slug],
        service: BlogServices.blogBySlug,
        params: { slug: slug },
        enabled: !!slug,
        staleTime: 0,
        select: (data) => {
            if (!data?.data?.status) {
                Swal.fire({
                    title: "Error",
                    text: data?.data?.message,
                    icon: "error",
                });
                navigate(-1)
                return
            }
            return data?.data?.data;
        },
        errorMsg: "",
        onSuccess: (data) => {

        }
    });


    // Get By Slug
    const {
        data: relatedBlog,
        isRelatedBlogLoad,
    } = useCustomQuery({
        queryKey: ['related-blog-details', slug, isLoading],
        service: BlogServices.blogList,
        params: buildQueryString([{
            key: "page", value: 1,
        }, {
            key: "limit", value: 5
        },
        {
            key: "category_slug", value: blogDetails?.category?.slug
        },
        {
            key: "is_published", value: true
        },


        ]),
        enabled: !isLoading && !!blogDetails?.category?.id,
        staleTime: 0,
        select: (data) => {
            if (!data?.data?.status) {
                Swal.fire({
                    title: "Error",
                    text: data?.data?.message,
                    icon: "error",
                });
                navigate(-1)
                return
            }
            const res = data?.data?.data?.filter((blog) => blog.slug != blogDetails?.slug)
            return res;
        },
        errorMsg: "",
        onSuccess: (data) => {

        }
    });

    const seo = {
        title: blogDetails?.title,

    }


    return (
        <div>
            <SeoHelmet seo={seo} />

            <NavBar />

            {isLoading ? <Loader /> : <>
                <Banner
                    title={blogDetails?.title || "Blog Post Title"}
                // description={"Page: Blog & News"}
                />

                <section className="common-section blog-details">
                    <Container>
                        <Row>
                            <Col md="6" lg="9" className="mb-4">
                                <div className="blog-details-content">
                                    <h1 className="blog-title">{blogDetails?.title || "Blog Post Title"}</h1>
                                    <p className="blog-date">Published on: {blogDetails.published_at && moment(blogDetails.published_at).format("lll")}</p>
                                    <div className='blog-details-img'>
                                        <img src={ImagePath.MainSlider1} alt="Blog Post" className="img-fluid mb-4" />
                                    </div>
                                    <div className='blog-details-meta'>
                                        {/* <p className="blog-author">By: John Doe</p> | */}
                                        <Link to={"/blog-news/" + blogDetails?.category?.slug}>
                                            <p className="blog-category">Category: {blogDetails?.category?.name}</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="blog-text">
                                            {blogDetails.content && parse(blogDetails.content)
                                            }
                                        </p>

                                    </div>
                                </div>
                            </Col>
                            {!isRelatedBlogLoad && relatedBlog?.length > 0 ? <Col md="6" lg="3" className='mb-4'>
                                <div className="blog-details-sidebar">
                                    <h2 className="sidebar-title">Related Posts</h2>
                                    <ul className="related-posts-list">
                                        {
                                            relatedBlog?.map((blog) => {
                                                return <li key={blog.id}><Link to={"/blog/" + blog.slug}>{blog.title}</Link></li>

                                            })
                                        }

                                    </ul>
                                </div>
                            </Col> : null}
                        </Row>
                    </Container>
                </section>
            </>}


            <Suspense fallback={<div>Loading footer...</div>}>
                <WaveWrapper />
            </Suspense>


            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>
        </div>
    )
}

export default BlogDetails