import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop.jsx";
import HomePageOne from "./pages/HomePageOne";
import AboutPage from "./pages/AboutPage.jsx";
import AboutFourPage from "./pages/AboutFourPage.jsx";
import AboutThreePage from "./pages/AboutThreePage.jsx";
import AboutTwoPage from "./pages/AboutTwoPage.jsx";
import ApplyAdmissionPage from "./pages/ApplyAdmissionPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogClassicPage from "./pages/BlogClassicPage.jsx";
import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";
import BlogListPage from "./pages/BlogListPage.jsx";
import BookOnlineClassPage from "./pages/BookOnlineClassPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import CourseDetailsPage from "./pages/CourseDetailsPage.jsx";
import CourseListViewPage from "./pages/CourseListViewPage.jsx";
import EventDetailsPage from "./pages/EventDetailsPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import FavoriteCoursePage from "./pages/FavoriteCoursePage.jsx";
import FindTutorsPage from "./pages/FindTutorsPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import HomePageTwo from "./pages/HomePageTwo.jsx";
import HomePageThree from "./pages/HomePageThree.jsx";
import HomePageFour from "./pages/HomePageFour.jsx";
import InstructorPage from "./pages/InstructorPage.jsx";
import InstructorDetailsPage from "./pages/InstructorDetailsPage.jsx";
import InstructorTwoPage from "./pages/InstructorTwoPage.jsx";
import LessonDetailsPage from "./pages/LessonDetailsPage.jsx";
import PricingPlanPage from "./pages/PricingPlanPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import TuitionJobsPage from "./pages/TuitionJobsPage.jsx";
import TutorPage from "./pages/TutorPage.jsx";
import TutorDetailsPage from "./pages/TutorDetailsPage.jsx";
import HomePageFive from "./pages/HomePageFive.jsx";
import HomePageSix from "./pages/HomePageSix.jsx";
import Anaesthesiology from "./pages/department/Anaesthesiology.jsx";
import Dentistry from "./pages/department/Dentistry.jsx";
import Dermatology from "./pages/department/Dermatology.jsx";
import Diagnostics from "./pages/department/Diagnostics.jsx";
import GeneralMedicine from "./pages/department/GeneralMedicine.jsx";
import Obstetrics from "./pages/department/Obstetrics.jsx";
import Ophthalmology from "./pages/department/Ophthalmology.jsx";
import Orthopedics from "./pages/department/Orthopedics.jsx";
import Otorhinolaryngology from "./pages/department/Otorhinolaryngology.jsx";
import Pediatrics from "./pages/department/Pediatrics.jsx";
import Psychiatry from "./pages/department/Psychiatry.jsx";
import DeanDetails from "./components/dean/DeanDetails.jsx";
import PharmacovigilanceCommittee from "./pages/committee/PharmacovigilanceCommittee.jsx";
import AntiRagging from "./pages/committee/AntiRagging.jsx";
import CurriculumCommittee from "./pages/committee/CurriculumCommittee.jsx";
import GenderHarassment from "./pages/committee/GenderHarassment.jsx";
import HospitalInfection from "./pages/committee/HospitalInfection.jsx";
import CollegeInfoTable from "./components/CollegeInfoTable.jsx";
import ForensicMedicine from "./pages/department/ForensicMedicine.jsx";
import Anatomy from "./pages/department/Anatomy.jsx";
import Biochemistry from "./pages/department/Biochemistry.jsx";
import Pathology from "./pages/department/Pathology.jsx";
import Pharmacology from "./pages/department/Pharmacology.jsx";
import Physiology from "./pages/department/Physiology.jsx";
import MsiDetail from "./components/msi/MsiDetail.jsx";
import Hospital from "./pages/hospital/Hospital.jsx";
import MainLayout from "./MainLayout.jsx";
import GeneralSurgery from "./pages/department/general surgery.jsx";
import PhysicalMedicine from "./pages/department/PhysicalMedicine.jsx";
import RadioDiagnosis from "./pages/department/RadioDiagnosis.jsx";
import RadioTherapy from "./pages/department/RadioTherapy.jsx";
import ClinicalFaculty from "./pages/faculty/ClinicalFaculty.jsx";
import NonClinicalFaculty from "./pages/faculty/NonClinicalFaculty.jsx";
import HostelFee from "./components/HostelFee.jsx";
import TuitionFee from "./components/TuitionFee.jsx";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <MainLayout>
      <Routes>
        <Route exact path='/' element={<HomePageThree />} />
        <Route exact path='/index-2' element={<HomePageTwo />} />
        <Route exact path='/index-3' element={<HomePageThree />} />
        <Route exact path='/index-4' element={<HomePageFour />} />
        <Route exact path='/index-5' element={<HomePageFive />} />
        <Route exact path='/index-6' element={<HomePageSix />} />
        <Route exact path='/about-us' element={<AboutPage />} />
        <Route exact path='/about-two' element={<AboutTwoPage />} />
        <Route exact path='/about-three' element={<AboutThreePage />} />
        <Route exact path='/about-four' element={<AboutFourPage />} />
        <Route exact path='/apply-admission' element={<ApplyAdmissionPage />} />
        <Route exact path='/blog' element={<BlogPage />} />
        <Route exact path='/blog-classic' element={<BlogClassicPage />} />
        <Route exact path='/blog-details' element={<BlogDetailsPage />} />
        <Route exact path='/blog-list' element={<BlogListPage />} />
        <Route
          exact
          path='/book-online-class'
          element={<BookOnlineClassPage />}
        />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        <Route exact path='/contact-us' element={<ContactPage />} />
        <Route exact path='/course' element={<CoursePage />} />
        <Route exact path='/course-details' element={<CourseDetailsPage />} />
        <Route
          exact
          path='/course-list-view'
          element={<CourseListViewPage />}
        />
        <Route exact path='/event-details' element={<EventDetailsPage />} />
        <Route exact path='/events' element={<EventsPage />} />
        <Route exact path='/faq' element={<FaqPage />} />
        <Route exact path='/favorite-course' element={<FavoriteCoursePage />} />
        <Route exact path='/find-tutors' element={<FindTutorsPage />} />
        <Route exact path='/gallery' element={<GalleryPage title='Gallery' />} />
        <Route exact path='/instructor' element={<InstructorPage />} />
        <Route
          exact
          path='/instructor-details'
          element={<InstructorDetailsPage />}
        />
        <Route exact path='/instructor-two' element={<InstructorTwoPage />} />
        <Route exact path='/lesson-details' element={<LessonDetailsPage />} />
        <Route exact path='/pricing-plan' element={<PricingPlanPage />} />
        <Route exact path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route exact path='/product' element={<ProductPage />} />
        <Route exact path='/product-details' element={<ProductDetailsPage />} />
        <Route exact path='/sign-in' element={<SignInPage />} />
        <Route exact path='/sign-up' element={<SignUpPage />} />
        <Route exact path='/tuition-jobs' element={<TuitionJobsPage />} />
        <Route exact path='/tutor' element={<TutorPage />} />
        <Route exact path='/tutor-details' element={<TutorDetailsPage />} />


        {/* //deptData */}
        <Route exact path='/department/anaesthesiology' element={<Anaesthesiology />} />
        <Route exact path='/department/dentistry' element={<Dentistry />} />
        <Route exact path='/department/dermatology' element={<Dermatology />} />
        <Route exact path='/department/diagnostics' element={<Diagnostics />} />
        <Route exact path='/department/general-medicine' element={<GeneralMedicine />} />
        <Route exact path='/department/obstetrics' element={<Obstetrics />} />
        <Route exact path='/department/ophthalmology' element={<Ophthalmology/>} />
        <Route exact path='/department/orthopedics' element={<Orthopedics />} />
        <Route exact path='/department/otorhinolaryngology' element={<Otorhinolaryngology />} />
        <Route exact path='/department/pediatrics' element={<Pediatrics />} />
        <Route exact path='/department/psychiatry' element={<Psychiatry/>} />
        <Route exact path='/department/radio-therapy' element={<RadioTherapy />} />
        <Route exact path='/department/forensic-medicine' element={<ForensicMedicine />} />
        <Route exact path='/department/anatomy' element={<Anatomy />} />
        <Route exact path='/department/bio-chemistry' element={<Biochemistry />} />
        <Route exact path='/department/pathology' element={<Pathology />} />
        <Route exact path='/department/pharmacology' element={<Pharmacology />} />
        <Route exact path='/department/physiology' element={<Physiology />} />
        <Route exact path='/department/general-surgery' element={<GeneralSurgery />} />
        <Route exact path='/department/physical-medicine-rehabilitation' element={<PhysicalMedicine/>} />
        <Route exact path='/department/radio-diagnosis' element={<RadioDiagnosis/>} />
        



        <Route exact path='/dean' element={<DeanDetails/>} />


        <Route exact path='/committee/Pharmacovigilance' element={<PharmacovigilanceCommittee />} />
        <Route exact path='/committee/anti-ragging' element={<AntiRagging />} />
        <Route exact path='/committee/curriculum-committee' element={<CurriculumCommittee />} />
        <Route exact path='/committee/hospital-infection-control' element={<HospitalInfection />} />
        <Route exact path='/committee/gender-harasement' element={<GenderHarassment />} />

        <Route exact path='/pro-fomra' element={<CollegeInfoTable />} />


        <Route exact path='/mci-detail' element={<MsiDetail/>} />


        <Route exact path='/hospital' element={<Hospital/>} />
        <Route exact path='/clinical-faculty' element={<ClinicalFaculty/>} />
        <Route exact path='/non-clinical-faculty' element={<NonClinicalFaculty/>} />
        <Route exact path='/infrastructure' element={<GalleryPage title='Infrastructure'/>} />

        {/* fees structure */}


        <Route exact path='/fee/hostel-fee' element={<HostelFee/>} />
        <Route exact path='/fee/tuition-fee' element={<TuitionFee/>} />
        



      </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
