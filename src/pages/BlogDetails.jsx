import React, { Suspense, lazy, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Banner from "../common/Banner";
import NavBar from "../common/NavBar";
import SeoHelmet from '../common/SeoHelmet';
import BlogServices from '../services/BlogServices';
import { useCustomQuery } from '../utils/QueryHooks';
import Swal from 'sweetalert2';
import Loader from '../utils/Loader/Loader';
import moment from 'moment';
import parse from 'html-react-parser';
import { buildQueryString } from '../utils/BuildQuery';
import ImagePath from '../assets/ImagePath';

// Lazy-loaded components with error handling
const WaveWrapper = lazy(() =>
  import("../common/WaveWrapper").catch(() => ({ default: () => <div>Failed to load WaveWrapper</div> }))
);

const Footer = lazy(() =>
  import("../common/Footer").catch(() => ({ default: () => <div>Failed to load footer</div> }))
);

// Loading component
const LoadingSpinner = ({ message = "Loading..." }) => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
    <span className="text-gray-600">{message}</span>
  </div>
);

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Memoized query parameters for blog details
  const blogDetailsParams = useMemo(() => ({ slug }), [slug]);

  // Fetch blog details
  const {
    data: blogDetails,
    isLoading: isBlogDetailsLoading,
  } = useCustomQuery({
    queryKey: ['blog-details', slug],
    service: BlogServices.blogBySlug,
    params: blogDetailsParams,
    enabled: !!slug,
    staleTime: 0,
    select: (data) => {
      if (!data?.data?.status) {
        Swal.fire({
          title: "Error",
          text: data?.data?.message,
          icon: "error",
        });
        navigate(-1);
        return;
      }
      return data?.data?.data;
    },
    onSuccess: (data) => {
      // Optional: Analytics or other side effects
    }
  });

  // Memoized query parameters for related blogs
  const relatedBlogParams = useMemo(() => buildQueryString([
    { key: "page", value: 1 },
    { key: "limit", value: 5 },
    { key: "category_slug", value: blogDetails?.category?.slug },
    { key: "is_published", value: true },
  ]), [blogDetails?.category?.slug]);

  // Fetch related blogs
  const {
    data: relatedBlog,
    isLoading: isRelatedBlogLoad,
  } = useCustomQuery({
    queryKey: ['related-blog-details', slug, isBlogDetailsLoading],
    service: BlogServices.blogList,
    params: relatedBlogParams,
    enabled: !isBlogDetailsLoading && !!blogDetails?.category?.id,
    staleTime: 0,
    select: (data) => {
      if (!data?.data?.status) {
        Swal.fire({
          title: "Error",
          text: data?.data?.message,
          icon: "error",
        });
        navigate(-1);
        return;
      }
      return data?.data?.data?.filter((blog) => blog.slug !== blogDetails?.slug);
    },
  });

  // Memoized SEO data
  const seo = useMemo(() => ({
    title: blogDetails?.title,
  }), [blogDetails?.title]);

  return (
    <div>
      <SeoHelmet seo={seo} />
      <NavBar />
      {isBlogDetailsLoading ? (
        <Loader />
      ) : (
        <>
          <Banner title={blogDetails?.title || "Blog Post Title"} />
          <section className="common-section blog-details">
            <Container>
              <Row>
                <Col md="6" lg="9" className="mb-4">
                  <div className="blog-details-content">
                    <h1 className="blog-title">{blogDetails?.title || "Blog Post Title"}</h1>
                    <p className="blog-date">
                      Published on: {blogDetails.published_at && moment(blogDetails.published_at).format("lll")}
                    </p>
                    <div className="blog-details-img">
                      <img src={ImagePath.MainSlider1} alt="Blog Post" className="img-fluid mb-4" />
                    </div>
                    <div className="blog-details-meta">
                      <Link to={"/blog-news/" + blogDetails?.category?.slug}>
                        <p className="blog-category">Category: {blogDetails?.category?.name}</p>
                      </Link>
                    </div>
                    <div>
                      <p className="blog-text">
                        {blogDetails.content && parse(blogDetails.content)}
                      </p>
                    </div>
                  </div>
                </Col>
                {!isRelatedBlogLoad && relatedBlog?.length > 0 && (
                  <Col md="6" lg="3" className="mb-4">
                    <div className="blog-details-sidebar">
                      <h2 className="sidebar-title">Related Posts</h2>
                      <ul className="related-posts-list">
                        {relatedBlog?.map((blog) => (
                          <li key={blog.id}>
                            <Link to={"/blog/" + blog.slug}>{blog.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                )}
              </Row>
            </Container>
          </section>
        </>
      )}

      <Suspense fallback={<LoadingSpinner message="Loading WaveWrapper..." />}>
        <WaveWrapper />
      </Suspense>

      <Suspense fallback={<LoadingSpinner message="Loading footer..." />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default BlogDetails;
