import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import ROUTE_PATHS from "../../routes/RoutePath";

// Preload critical components (non-lazy for instant loading)
import Dashboard from "../../pages/Dashboard";

// Group related components for better chunk splitting
const HomeComponents = {
  IntroductionToDIYPreFabSolutions: lazy(() => 
    import("../../pages/IntroductionToDIYPreFabSolutions")
  ),
  FeaturedProducts: lazy(() => 
    import("../../pages/FeaturedProducts")
  ),
  KeyBenefits: lazy(() => 
    import("../../pages/KeyBenefits")
  ),
};

const AboutComponents = {
  AboutUs: lazy(() => import("../../pages/AboutUs")),
  VisionMission: lazy(() => import("../../pages/VisionMission")),
  CompanyOverview: lazy(() => import("../../pages/CompanyOverview")),
  Sustainability: lazy(() => import("../../pages/Sustainability")),
  ManufacturingProcess: lazy(() => import("../../pages/ManufacturingProcess")),
};

const ProductComponents = {
  ProductandServices: lazy(() => import("../../pages/ProductandServices")),
  DiyPreFabKits: lazy(() => import("../../pages/DiyPreFabKits")),
  HomeKit: lazy(() => import("../../pages/HomeKit")),
  OfficeWorkSpace: lazy(() => import("../../pages/OfficeWorkSpace")),
  StorageWarehousing: lazy(() => import("../../pages/StorageWarehousing")),
  FarmHouseCottage: lazy(() => import("../../pages/FarmHouseCottage")),
};

const SolutionsComponents = {
  WallRoofingSolutions: lazy(() => import("../../pages/WallRoofingSolutions")),
  FibreCementBoards: lazy(() => import("../../pages/FibreCementBoards")),
  SandwichPanels: lazy(() => import("../../pages/SandwichPanels")),
  SteelMetalRoofing: lazy(() => import("../../pages/SteelMetalRoofing")),
};

const PortableComponents = {
  PortableStructure: lazy(() => import("../../pages/PortableStructure")),
  SiteOffice: lazy(() => import("../../pages/SiteOffice")),
  SecurityCabins: lazy(() => import("../../pages/SecurityCabins")),
  MobileHomes: lazy(() => import("../../pages/MobileHomes")),
};

const AccessoryComponents = {
  AccessoriesandCustomization: lazy(() => import("../../pages/AccessoriesandCustomization")),
  DoorsandWindow: lazy(() => import("../../pages/DoorsandWindow")),
  InsulationMaterials: lazy(() => import("../../pages/InsulationMaterials")),
  ElectricalPlumbingAddOns: lazy(() => import("../../pages/ElectricalPlumbingAddOns")),
};

const ApplicationComponents = {
  Application: lazy(() => import("../../pages/Application")),
  Residential: lazy(() => import("../../pages/Residential")),
  Industrial: lazy(() => import("../../pages/Industrial")),
  Commercial: lazy(() => import("../../pages/Commercial")),
  EducationalInstitution: lazy(() => import("../../pages/EducationalInstitution")),
  HealthcareFacilities: lazy(() => import("../../pages/HealthcareFacilities")),
};

const ProjectComponents = {
  ProjectCaseandStudies: lazy(() => import("../../pages/ProjectCaseandStudies")),
  SuccssStories: lazy(() => import("../../pages/SuccssStories")),
  ClientTestimonial: lazy(() => import("../../pages/ClientTestimonial")),
  ProjectGallery: lazy(() => import("../../pages/ProjectGallery")),
};

const BlogComponents = {
  BlogandNews: lazy(() => import("../../pages/BlogandNews")),
  IndustryTrends: lazy(() => import("../../pages/IndustryTrends")),
  ConstructionTipsandTricks: lazy(() => import("../../pages/ConstructionTipsandTricks")),
  SustainbilityInPreFab: lazy(() => import("../../pages/SustainbilityInPreFab")),
  BlogDetails: lazy(() => import("../../pages/BlogDetails")),
};

const ContactComponents = {
  ContactUs: lazy(() => import("../../pages/ContactUs")),
  EnquiryForm: lazy(() => import("../../pages/EnquiryForm")),
};

const CareerComponents = {
  Career: lazy(() => import("../../pages/Career")),
  JobOpening: lazy(() => import("../../pages/JobOpening")),
  WorkCulture: lazy(() => import("../../pages/WorkCulture")),
};

// Optimized loading component with better UX
const LoadingFallback = ({ message = "Loading..." }) => (
  <div 
    className="loading-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '200px',
      fontSize: '16px',
      color: '#666'
    }}
    role="status"
    aria-label={message}
  >
    <div className="loading-spinner" style={{
      width: '20px',
      height: '20px',
      border: '2px solid #f3f3f3',
      borderTop: '2px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '10px'
    }} />
    {message}
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// Preload critical routes on user interaction
const preloadCriticalRoutes = () => {
  // Preload most visited pages
  import("../../pages/AboutUs");
  import("../../pages/ProductandServices");
  import("../../pages/ContactUs");
};

// Add intersection observer for route preloading
const useRoutePreloading = () => {
  React.useEffect(() => {
    // Preload on idle or user interaction
    const preloadOnIdle = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(preloadCriticalRoutes);
      } else {
        setTimeout(preloadCriticalRoutes, 100);
      }
    };

    // Preload on first user interaction
    const events = ['mousedown', 'touchstart', 'keydown'];
    const preloadOnce = () => {
      preloadCriticalRoutes();
      events.forEach(event => 
        document.removeEventListener(event, preloadOnce)
      );
    };

    events.forEach(event => 
      document.addEventListener(event, preloadOnce, { passive: true })
    );

    // Fallback preload after 2 seconds
    const fallbackTimer = setTimeout(preloadOnIdle, 2000);

    return () => {
      clearTimeout(fallbackTimer);
      events.forEach(event => 
        document.removeEventListener(event, preloadOnce)
      );
    };
  }, []);
};

const RoutesPath = () => {
  useRoutePreloading();

  return (
    <>
      {/* Critical route - no lazy loading */}
      <Route path="/" element={<Dashboard />} />
      
      {/* Home Routes */}
      <Route 
        path={ROUTE_PATHS.INTRODUCTION_TO_D_I_Y_PREFAB_SOLUTIONS} 
        element={
          <Suspense fallback={<LoadingFallback message="Loading Introduction..." />}>
            <HomeComponents.IntroductionToDIYPreFabSolutions />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.FEATURED_PROJECTS} 
        element={
          <Suspense fallback={<LoadingFallback message="Loading Featured Projects..." />}>
            <HomeComponents.FeaturedProducts />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.KEY_BENEFITS_OF_PREFAB_CONSTRUCTION} 
        element={
          <Suspense fallback={<LoadingFallback message="Loading Benefits..." />}>
            <HomeComponents.KeyBenefits />
          </Suspense>
        } 
      />

      {/* About Routes */}
      <Route 
        path={ROUTE_PATHS.ABOUT_US} 
        element={
          <Suspense fallback={<LoadingFallback message="Loading About Us..." />}>
            <AboutComponents.AboutUs />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.OUR_VISION_MISSION} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AboutComponents.VisionMission />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.COMPANY_OVERVIEW} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AboutComponents.CompanyOverview />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.SUSTAINABILITY_ECO_FRIENDLY_INITIATIVES} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AboutComponents.Sustainability />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.MANUFACTURING_PROCESS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AboutComponents.ManufacturingProcess />
          </Suspense>
        } 
      />

      {/* Product and Services Routes */}
      <Route 
        path={ROUTE_PATHS.PRODUCT_SERVICES} 
        element={
          <Suspense fallback={<LoadingFallback message="Loading Products..." />}>
            <ProductComponents.ProductandServices />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.D_I_Y_PREFAB_KITS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ProductComponents.DiyPreFabKits />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.HOME_KIT} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ProductComponents.HomeKit />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.OFFICE_WORKSPACES} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ProductComponents.OfficeWorkSpace />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.STORAGE_WAREHOUSING} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ProductComponents.StorageWarehousing />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.FARMHOUSES_COTTAGES} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ProductComponents.FarmHouseCottage />
          </Suspense>
        } 
      />

      {/* Solutions Routes */}
      <Route 
        path={ROUTE_PATHS.WALL_ROOFING_SOLUTIONS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <SolutionsComponents.WallRoofingSolutions />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.FIBER_CEMENT_BOARDS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <SolutionsComponents.FibreCementBoards />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.SANDWICH_PANELS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <SolutionsComponents.SandwichPanels />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.STEEL_METAL_ROOFING} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <SolutionsComponents.SteelMetalRoofing />
          </Suspense>
        } 
      />

      {/* Portable Structure Routes */}
      <Route 
        path={ROUTE_PATHS.PORTABLE_STRUCTURES} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <PortableComponents.PortableStructure />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.SITE_OFFICE} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <PortableComponents.SiteOffice />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.SECURITY_CABINS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <PortableComponents.SecurityCabins />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.MOBILE_HOMES} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <PortableComponents.MobileHomes />
          </Suspense>
        } 
      />

      {/* Accessories Routes */}
      <Route 
        path={ROUTE_PATHS.ACCESSORIES_CUSTOMIZATION} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AccessoryComponents.AccessoriesandCustomization />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.DOORS_WINDOWS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AccessoryComponents.DoorsandWindow />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.INSULATION_MATERIALS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AccessoryComponents.InsulationMaterials />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.ELECTRICAL_PLUMBING_ADD_ONS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AccessoryComponents.ElectricalPlumbingAddOns />
          </Suspense>
        } 
      />

      {/* Application Routes */}
      <Route 
        path={ROUTE_PATHS.APPLICATIONS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ApplicationComponents.Application />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.RESIDENTIAL} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ApplicationComponents.Residential />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.COMMERCIAL} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ApplicationComponents.Commercial />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.INDUSTRIAL} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ApplicationComponents.Industrial />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.EDUCATIONAL_INSTITUTIONS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ApplicationComponents.EducationalInstitution />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.HEALTHCARE_FACILITIES} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ApplicationComponents.HealthcareFacilities />
          </Suspense>
        } 
      />

      {/* Project Routes */}
      <Route 
        path={ROUTE_PATHS.PROJECT_CASE_STUDIES} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ProjectComponents.ProjectCaseandStudies />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.SUCCESS_STORIES} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ProjectComponents.SuccssStories />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.CLIENT_TESTIMONIALS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ProjectComponents.ClientTestimonial />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.PROJECT_GALLERY} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ProjectComponents.ProjectGallery />
          </Suspense>
        } 
      />

      {/* Blog Routes */}
      <Route 
        path={ROUTE_PATHS.BLOG_NEWS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BlogComponents.BlogandNews />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.BLOG_DETAILS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BlogComponents.BlogDetails />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.INDUSTRY_TRENDS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BlogComponents.IndustryTrends />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.CONSTRUCTION_TIPS_TRICKS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BlogComponents.ConstructionTipsandTricks />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.SUSTAINABILITY_IN_PREFAB} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BlogComponents.SustainbilityInPreFab />
          </Suspense>
        } 
      />

      {/* Career Routes */}
      <Route 
        path={ROUTE_PATHS.CAREERS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <CareerComponents.Career />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.JOB_OPENINGS} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <CareerComponents.JobOpening />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.WORK_CULTURE} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <CareerComponents.WorkCulture />
          </Suspense>
        } 
      />

      {/* Contact Routes */}
      <Route 
        path={ROUTE_PATHS.CONTACT_US} 
        element={
          <Suspense fallback={<LoadingFallback message="Loading Contact..." />}>
            <ContactComponents.ContactUs />
          </Suspense>
        } 
      />
      <Route 
        path={ROUTE_PATHS.INQUIRY_FORM} 
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ContactComponents.EnquiryForm />
          </Suspense>
        } 
      />
    </>
  );
};

export default RoutesPath;