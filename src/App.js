import { Route, Routes, useLocation } from "react-router-dom";
import Layout2 from "./components/Layout/Layout2";
import Layout3 from "./components/Layout/Layout3";
import Layout4 from "./components/Layout/Layout4";
import HomeStyle2 from "./components/Pages/HomeStyle2";
import HomeStyle3 from "./components/Pages/HomeStyle3";
import HomeStyle4 from "./components/Pages/HomeStyle4";
import About from "./components/Pages/About";
import MissionAndVision from "./components/Pages/MissionAndVision";
import Partners from "./components/Pages/Partners";
import TrainingBootcamps from "./components/Pages/TrainingBootcamps";
import BusinessGrowth from "./components/Pages/BusinessGrowth";
import HealthcareOutsourcingSolutions from "./components/Pages/HealthcareOutsourcingSolutions";
import CareManagementService from "./components/Pages/CareManagementService";
import ClinicalPharmacistServices from "./components/Pages/ClinicalPharmacistServices";
import MedicalRecordKeeping from "./components/Pages/MedicalRecordKeeping";
import Services from "./components/Pages/Services"




import Careers from "./components/Pages/Careers";
import MedicalBilling from "./components/Pages/MedicalBilling";
import MedicalCoding from "./components/Pages/MedicalCoding";
import RCMServices from "./components/Pages/RCMServices";

import Contact from "./components/Pages/Contact";
import PrivacyDataProtectionPolicy from "./components/Pages/PrivacyDataProtectionPolicy";
import Faq from "./components/Pages/FAQ";
import ProviderCredentialing from "./components/Pages/ProviderCredentialing";
import DigitalHealthMarketing from "./components/Pages/DigitalHealthMarketing";
import MedicalScribingServices from "./components/Pages/MedicalScribingServices";
import Telemedicine from "./components/Pages/Telemedicine";

import Blog from "./components/Pages/Blog";
import Appointments from "./components/Pages/Appointments";
import Departments from "./components/Pages/Departments";
import DepartmentDetails from "./components/Pages/DepartmentDetails";
import BlogDetails from "./components/Pages/BlogDetails";
import DoctorDetails from "./components/Pages/DoctorDetails";
import PricingPlan from "./components/Pages/PricingPlan";
import Gallery from "./components/Pages/Gallery";
import Timetable from "./components/Pages/Timetable";
import { useEffect } from "react";
import ErrorPage from "./components/Pages/ErrorPage";
import Layout5 from "./components/Layout/Layout5";
import HomeStyle5 from "./components/Pages/HomeStyle5";
import HomeStyle6 from "./components/Pages/HomeStyle6";

//new pages 
import ClinicalDataAnalysisAndReporting from "./components/Pages/ClinicalDataAnalysis&Reporting";

function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<Routes>
			<Route path="/" element={<Layout2 />}>
				<Route index element={<HomeStyle2 />} />
				<Route path="about" element={<About />} />
				<Route path="mission-and-vision" element={<MissionAndVision />} />
				<Route path="medical-billing" element={<MedicalBilling />} />
				<Route path="medical-coding-services" element={<MedicalCoding />} />
				<Route path="rcm-services" element={<RCMServices />} />
				<Route path="/clinical-data-analysis-and-reporting" element={<ClinicalDataAnalysisAndReporting />} />
				<Route path="/care-management-service" element={<CareManagementService />} />
				<Route path="/clinical-pharmacist-services" element={<ClinicalPharmacistServices />} />
				<Route path="/medical-record-keeping" element={<MedicalRecordKeeping />} />
				<Route path="/telemedicine" element={<Telemedicine />} />
				<Route path="/services" element={<Services />} />
				<Route path="/medical-scribing-services" element={<MedicalScribingServices />} />
				RCM Services
				<Route
					path="provider-credentialing"
					element={<ProviderCredentialing />}
				/>
				<Route
					path="digital-health-marketing"
					element={<DigitalHealthMarketing />}
				/>
				<Route path="training-bootcamps" element={<TrainingBootcamps />} />
				<Route path="business-growth" element={<BusinessGrowth />} />
				<Route
					path="healthcare-outsourcing-solutions"
					element={<HealthcareOutsourcingSolutions />}
				/>
				<Route
					path="privacy-data-protection-policy"
					element={<PrivacyDataProtectionPolicy />}
				/>
				<Route path="Partners" element={<Partners />} />
				<Route path="careers" element={<Careers />} />
				<Route path="contact" element={<Contact />} />
				<Route path="faqs" element={<Faq />} />
				<Route path="doctors/:doctorId" element={<DoctorDetails />} />
				<Route path="blog" element={<Blog />} />
				<Route path="blog/:blogId" element={<BlogDetails />} />
				<Route path="appointments" element={<Appointments />} />
				<Route path="services" element={<Departments />} />
				<Route
					path="departments/:departmentId"
					element={<DepartmentDetails />}
				/>
				<Route path="pricing-plan" element={<PricingPlan />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="timetable" element={<Timetable />} />
			</Route>
			<Route element={<Layout2 />}>
				<Route path="home-v2" element={<HomeStyle2 />} />
				<Route path="home-v6" element={<HomeStyle6 />} />
			</Route>
			<Route path="home-v3" element={<Layout3 />}>
				<Route index element={<HomeStyle3 />} />
			</Route>
			<Route path="home-v4" element={<Layout4 />}>
				<Route index element={<HomeStyle4 />} />
			</Route>
			<Route path="home-v5" element={<Layout5 />}>
				<Route index element={<HomeStyle5 />} />
			</Route>
			<Route path="*" element={<ErrorPage />} />
			
		</Routes>
	);
}

export default App;
