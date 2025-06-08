import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import ROUTE_PATHS from "../../routes/RoutePath";


const Dashboard = lazy(() => import("../../pages/Dashboard"));
const IntroductionToDIYPreFabSolutions = lazy(() => import("../../pages/IntroductionToDIYPreFabSolutions"));
const FeaturedProducts = lazy(() => import("../../pages/FeaturedProducts"));
const KeyBenefits = lazy(() => import("../../pages/KeyBenefits"));
const AboutUs = lazy(() => import("../../pages/AboutUs"));
const VisionMission = lazy(() => import("../../pages/VisionMission"));
const CompanyOverview = lazy(() => import("../../pages/CompanyOverview"));
const Sustainability = lazy(() => import("../../pages/Sustainability"));
const ManufacturingProcess = lazy(() => import("../../pages/ManufacturingProcess"));
const ProductandServices = lazy(() => import("../../pages/ProductandServices"));
const DiyPreFabKits = lazy(() => import("../../pages/DiyPreFabKits"));
const HomeKit = lazy(() => import("../../pages/HomeKit"));
const OfficeWorkSpace = lazy(() => import("../../pages/OfficeWorkSpace"));
const StorageWarehousing = lazy(() => import("../../pages/StorageWarehousing"));
const FarmHouseCottage = lazy(() => import("../../pages/FarmHouseCottage"));
const WallRoofingSolutions = lazy(() => import("../../pages/WallRoofingSolutions"));
const FibreCementBoards = lazy(() => import("../../pages/FibreCementBoards"));
const SandwichPanels = lazy(() => import("../../pages/SandwichPanels"));
const SteelMetalRoofing = lazy(() => import("../../pages/SteelMetalRoofing"));
const PortableStructure = lazy(() => import("../../pages/PortableStructure"));
const SiteOffice = lazy(() => import("../../pages/SiteOffice"));
const SecurityCabins = lazy(() => import("../../pages/SecurityCabins"));
const MobileHomes = lazy(() => import("../../pages/MobileHomes"));
const AccessoriesandCustomization = lazy(() => import("../../pages/AccessoriesandCustomization"));
const DoorsandWindow = lazy(() => import("../../pages/DoorsandWindow"));
const InsulationMaterials = lazy(() => import("../../pages/InsulationMaterials"));
const ElectricalPlumbingAddOns = lazy(() => import("../../pages/ElectricalPlumbingAddOns"));
const Application = lazy(() => import("../../pages/Application"));
const Residential = lazy(() => import("../../pages/Residential"));
const Industrial = lazy(() => import("../../pages/Industrial"));
const Commercial = lazy(() => import("../../pages/Commercial"));
const EducationalInstitution = lazy(() => import("../../pages/EducationalInstitution"));
const HealthcareFacilities = lazy(() => import("../../pages/HealthcareFacilities"));
const ProjectCaseandStudies = lazy(() => import("../../pages/ProjectCaseandStudies"));
const SuccssStories = lazy(() => import("../../pages/SuccssStories"));
const ClientTestimonial = lazy(() => import("../../pages/ClientTestimonial"));
const ProjectGallery = lazy(() => import("../../pages/ProjectGallery"));
const BlogandNews = lazy(() => import("../../pages/BlogandNews"));
const IndustryTrends = lazy(() => import("../../pages/IndustryTrends"));
const ConstructionTipsandTricks = lazy(() => import("../../pages/ConstructionTipsandTricks"));
const SustainbilityInPreFab = lazy(() => import("../../pages/SustainbilityInPreFab"));
const ContactUs = lazy(() => import("../../pages/ContactUs"));
const EnquiryForm = lazy(() => import("../../pages/EnquiryForm"));
const Career = lazy(() => import("../../pages/Career"));
const JobOpening = lazy(() => import("../../pages/JobOpening"));
const WorkCulture = lazy(() => import("../../pages/WorkCulture"));
const BlogDetails = lazy(() => import("../../pages/BlogDetails"));


const RoutesPath = () => {
    return (<>
        <Route path="/" element={<Dashboard />} />
        {/* Home */}
        <Route path={ROUTE_PATHS.INTRODUCTION_TO_D_I_Y_PREFAB_SOLUTIONS} element={<IntroductionToDIYPreFabSolutions />} />
        <Route path={ROUTE_PATHS.FEATURED_PROJECTS} element={<FeaturedProducts />} />
        <Route path={ROUTE_PATHS.KEY_BENEFITS_OF_PREFAB_CONSTRUCTION} element={<KeyBenefits />} />

        {/* About */}
        <Route path={ROUTE_PATHS.ABOUT_US} element={<AboutUs />} />
        <Route path={ROUTE_PATHS.OUR_VISION_MISSION} element={<VisionMission />} />
        <Route path={ROUTE_PATHS.COMPANY_OVERVIEW} element={<CompanyOverview />} />
        <Route path={ROUTE_PATHS.SUSTAINABILITY_ECO_FRIENDLY_INITIATIVES} element={<Sustainability />} />
        <Route path={ROUTE_PATHS.MANUFACTURING_PROCESS} element={<ManufacturingProcess />} />

        {/* Product and Services */}
        <Route path={ROUTE_PATHS.PRODUCT_SERVICES} element={<ProductandServices />} />
        <Route path={ROUTE_PATHS.D_I_Y_PREFAB_KITS} element={<DiyPreFabKits />} />
        <Route path={ROUTE_PATHS.HOME_KIT} element={<HomeKit />} />
        <Route path={ROUTE_PATHS.OFFICE_WORKSPACES} element={<OfficeWorkSpace />} />
        <Route path={ROUTE_PATHS.STORAGE_WAREHOUSING} element={<StorageWarehousing />} />
        <Route path={ROUTE_PATHS.FARMHOUSES_COTTAGES} element={<FarmHouseCottage />} />
        <Route path={ROUTE_PATHS.WALL_ROOFING_SOLUTIONS} element={<WallRoofingSolutions />} />
        <Route path={ROUTE_PATHS.FIBER_CEMENT_BOARDS} element={<FibreCementBoards />} />
        <Route path={ROUTE_PATHS.SANDWICH_PANELS} element={<SandwichPanels />} />
        <Route path={ROUTE_PATHS.STEEL_METAL_ROOFING} element={<SteelMetalRoofing />} />
        <Route path={ROUTE_PATHS.PORTABLE_STRUCTURES} element={<PortableStructure />} />
        <Route path={ROUTE_PATHS.SITE_OFFICE} element={<SiteOffice />} />
        <Route path={ROUTE_PATHS.SECURITY_CABINS} element={<SecurityCabins />} />
        <Route path={ROUTE_PATHS.MOBILE_HOMES} element={<MobileHomes />} />
        <Route path={ROUTE_PATHS.ACCESSORIES_CUSTOMIZATION} element={<AccessoriesandCustomization />} />
        <Route path={ROUTE_PATHS.DOORS_WINDOWS} element={<DoorsandWindow />} />
        <Route path={ROUTE_PATHS.INSULATION_MATERIALS} element={<InsulationMaterials />} />
        <Route path={ROUTE_PATHS.ELECTRICAL_PLUMBING_ADD_ONS} element={<ElectricalPlumbingAddOns />} />

        {/* Application */}
        <Route path={ROUTE_PATHS.APPLICATIONS} element={<Application />} />
        <Route path={ROUTE_PATHS.RESIDENTIAL} element={<Residential />} />
        <Route path={ROUTE_PATHS.COMMERCIAL} element={<Commercial />} />
        <Route path={ROUTE_PATHS.INDUSTRIAL} element={<Industrial />} />
        <Route path={ROUTE_PATHS.EDUCATIONAL_INSTITUTIONS} element={<EducationalInstitution />} />
        <Route path={ROUTE_PATHS.HEALTHCARE_FACILITIES} element={<HealthcareFacilities />} />

        {/* Project and Case Studies */}
        <Route path={ROUTE_PATHS.PROJECT_CASE_STUDIES} element={<ProjectCaseandStudies />} />
        <Route path={ROUTE_PATHS.SUCCESS_STORIES} element={<SuccssStories />} />
        <Route path={ROUTE_PATHS.CLIENT_TESTIMONIALS} element={<ClientTestimonial />} />
        <Route path={ROUTE_PATHS.PROJECT_GALLERY} element={<ProjectGallery />} />

        {/* Blog and News */}
        <Route path={ROUTE_PATHS.BLOG_NEWS} element={<BlogandNews />} />
        <Route path={ROUTE_PATHS.BLOG_DETAILS} element={<BlogDetails />} />
        <Route path={ROUTE_PATHS.INDUSTRY_TRENDS} element={<IndustryTrends />} />
        <Route path={ROUTE_PATHS.CONSTRUCTION_TIPS_TRICKS} element={<ConstructionTipsandTricks />} />
        <Route path={ROUTE_PATHS.SUSTAINABILITY_IN_PREFAB} element={<SustainbilityInPreFab />} />

        {/* Career */}
        <Route path={ROUTE_PATHS.CAREERS} element={<Career />} />
        <Route path={ROUTE_PATHS.JOB_OPENINGS} element={<JobOpening />} />
        <Route path={ROUTE_PATHS.WORK_CULTURE} element={<WorkCulture />} />



        {/* Contact Us */}
        <Route path={ROUTE_PATHS.CONTACT_US} element={<ContactUs />} />
        <Route path={ROUTE_PATHS.INQUIRY_FORM} element={<EnquiryForm />} />
    </>
    );
};

export default RoutesPath;
