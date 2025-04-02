import { Link } from "react-router-dom";
import { pageTitle } from "../../helpers/PageTitle";
import Banner from "../Section/ContactInfoSection/Banner";

export default function PrivacyDataProtectionPolicy() {
  pageTitle("Privacy Data Protection Policy");
  return (
    <>
      <Banner
        bgUrl="/images/privact-and-policy/banner.png"
        title="Privacy & Data Protection Policy"
        subTitle=""
        textColor="text-white"
      />

      <div className="container py-5">
        <h3> Your Information, Our Responsibility</h3>
        <p>
          MedicoTech Solutions LLC is a leading healthcare IT company in the
          USA, offering cutting-edge solutions in medical billing, revenue cycle
          management, AI-powered healthcare analytics, and telemedicine IT
          services. We are HIPAA-compliant and committed to protecting the
          privacy and security of patient data while leveraging advanced
          technologies like AI, blockchain, and digital health solutions.
        </p>
        <div className="cs_shape_wrap">
          <div className="cs_shape_2">
            <svg
              width={1089}
              height={1002}
              viewBox="0 0 1089 1002"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M444.57 826.314C529.104 1065.89 739.237 1008.47 834.547 949.171C981.567 843.507 997.742 626.309 999.967 542.103C1001.75 474.739 1058.26 303.318 1086.29 226.028C1115.11 -40.9119 843.814 0.833657 795.515 6.26561C747.215 11.6976 593.662 71.4673 441.083 40.606C319.02 15.917 205.529 28.8791 164.042 38.4462C-13.0065 100.952 -2.22156 200.043 3.13034 242.954C8.48234 285.864 53.2821 366.319 234.465 453.073C379.411 522.475 435.469 730.386 444.57 826.314Z"
                fill="url(#paint0_linear_5_285)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5_285"
                  x1="844.274"
                  y1="950.214"
                  x2="424.319"
                  y2="-69.4782"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#86BBF1" offset={0} />
                  <stop offset={1} stopColor="#D2EAEF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="container">
            <div className="row align-items-center cs_gap_y_40">
              <div className="col-lg-6">
                <p>
                  For the purposes of this Privacy Policy, ‘Personal Data’
                  refers to any information by which an individual can be
                  personally identified, including, but not limited to, name,
                  address, email address, phone number, online identifiers,
                  location data, or any other information classified as personal
                  data under applicable laws, including the Texas Business and
                  Commerce Code, Chapter 521 on data protection and privacy
                  rights.
                </p>
                <p>
                  This Privacy Policy applies to all visitors and users of the
                  MedicoTech Solutions LLC website (“You” or, where appropriate,
                  “Your”) whose personal data is collected or processed by
                  MedicoTech Solutions LLC. It is designed to inform you about
                  how MedicoTech Solutions LLC, one of the leading healthcare IT
                  companies in America, collects, processes, and securely
                  handles personal data, in compliance with the Texas Business
                  and Commerce Code, Chapter 521, HIPAA regulations, and other
                  applicable data privacy laws and regulations in the USA and
                  Texas.
                </p>
              </div>
              <div className="col-lg-5 offset-lg-1 text-center">
                <img
                  src="/images/privact-and-policy/hipaa.png"
                  alt="Appointment"
                  className="cs_radius_30"
                />
              </div>
            </div>
          </div>
        </div>
        <h3>HIPAA Compliance & De-Identified Data</h3>
        <p>
          MedicoTech Solutions LLC is a HIPAA-certified company dedicated to
          protecting Protected Health Information (PHI) in strict compliance
          with HIPAA standards. Our policies and practices ensure the security
          and confidentiality of sensitive health information, reinforcing our
          commitment to privacy and data protection in the healthcare industry.{" "}
        </p>
        <p>
          For customers covered under HIPAA, we handle PHI in accordance with
          federal regulations, offering data aggregation services and generating
          de-identified data per HIPAA guidelines (45 CFR 164.514(a)-(c)).
          MedicoTech Solutions LLC retains full ownership of de-identified data
          derived from PHI and may utilize it for research, analytics, and
          service enhancement.
        </p>
        {/* List # 1 */}
        <h2>1. Key Terms Used in This Privacy Policy</h2>
        <div>
          <p>
            We collect personal, professional, and business-related information
            to provide secure and efficient services.include:
          </p>
          <ul
            className="list-unstyled ms-2"
            style={{
              color: "#274760",
            }}
          >
            <li>A. Information You Provide</li>
            <p>include:</p>
          </ul>
          <ul className="ms-4">
            <li>Full name, email, phone number</li>
            <li>Business/mailing address</li>
            <li>NPI (National Provider Identifier), if applicable</li>
            <li>Billing and payment details (secured and encrypted)</li>
          </ul>
          <p className="ms-4">
            <span style={{ color: "#274760" }}>
              <b> For Telemedicine & Digital Health Clients:</b> Additional
              compliance requirements apply per state and federal telehealth
              regulations.
            </span>
          </p>
        </div>
        <div>
          <ul
            className="list-unstyled ms-2"
            style={{
              color: "#274760",
            }}
          >
            <li>B. Information Collected Automatically</li>
            <p>include:</p>
          </ul>
          <ul className="ms-4">
            <li>IP address & device information</li>
            <li>Website usage & session tracking</li>
            <li>Cookies & analytics data</li>
          </ul>
          <p className="ms-4">
            <span style={{ color: "#274760" }}>
              <b> AI-Powered Analytics & Machine Learning:</b> We use
              de-identified data for predictive modeling, claim optimization,
              and revenue cycle enhancement.
            </span>
          </p>
        </div>
        {/* List # 2 */}
        <h2>2. SMS Communication Disclosure</h2>
        <p>
          By consenting to receive SMS notifications from MedicoTech Solutions
          LLC, you agree to receive messages related to company updates,
          services, and support.
        </p>
        <ul>
          <li>Message frequency may vary based on your interactions.</li>
          <li>
            You can opt-out anytime by replying STOP or get assistance by
            replying HELP.
          </li>
          <li>We do not share or sell your phone number to third parties.</li>
        </ul>
        {/* List # 3 */}
        <h2>3. Handling and Usage of Information</h2>
        <p>We use the collected data strictly for the following purposes:</p>
        <ul>
          <li>To provide and manage our services</li>
          <li>To process transactions and invoices securely</li>
          <li>To communicate service updates and marketing promotions</li>
          <li>To analyze and improve website performance</li>
          <li>To ensure compliance with applicable laws and regulations</li>
        </ul>
        <h4 className="ms-2">Data Protection Commitment</h4>
        <ul>
          <li>We DO NOT sell or rent your personal data to third parties.</li>
          <li>
            If we share data with third parties (e.g., service providers), it
            will be anonymized whenever possible.
          </li>
          <li>
            Affiliates, partners, or entities with an ownership interest in
            MedicoTech Solutions LLC may access your information only under this
            Privacy Policy or with your explicit consent.
          </li>
        </ul>
        {/* List # 4 */}
        <h2>4. Conditions for Disclosure</h2>
        <p>
          Your personal data will not be disclosed unless required under the
          following circumstances:
        </p>
        <ul>
          <li>
            <span style={{ color: "#274760" }}>
              <b> Legal Obligations:</b>
            </span>{" "}
            If legally required for investigations, law enforcement requests, or
            compliance with regulatory mandates.
          </li>
          <li>
            <span style={{ color: "#274760" }}>
              <b>Security and Protection:</b>
            </span>{" "}
            To safeguard MedicoTech Solutions LLC's assets, enforce agreements,
            or protect our legal rights.
          </li>
          <li>
            <span style={{ color: "#274760" }}>
              <b>Business Transfers:</b>
            </span>{" "}
            If MedicoTech Solutions LLC undergoes a merger, acquisition, or
            asset sale, user information may be transferred.
          </li>
        </ul>
        <p>
          We are committed to notifying users of any legal demands for their
          data unless legally restricted from doing so.
        </p>
        {/* List # 5 */}
        <h2>5. Your Rights & Choices</h2>
        <ul
          className="list-unstyled ms-2"
          style={{
            color: "#274760",
          }}
        >
          <li>A. Access & Correction</li>
        </ul>
        <p>
          You have the right to access, update, or correct your personal
          information by contacting us.
        </p>
        <ul
          className="list-unstyled ms-2"
          style={{
            color: "#274760",
          }}
        >
          <li>B. Opt-Out of Communications</li>
        </ul>
        <p>
          You can unsubscribe from promotional emails by clicking the
          "Unsubscribe" link at the bottom of our emails.
        </p>
        <ul
          className="list-unstyled ms-2"
          style={{
            color: "#274760",
          }}
        >
          <li>C. Data Deletion</li>
        </ul>
        <p>
          You may request deletion of your personal data, subject to regulatory
          compliance requirements.
        </p>
        <ul
          className="list-unstyled ms-2"
          style={{
            color: "#274760",
          }}
        >
          <li>D. Data Portability & Withdrawal of Consent</li>
        </ul>
        <ul className="ms-2">
          <li>
            You have the right to know what information we collect and how it is
            used.
          </li>
          <li>
            You may withdraw consent at any time, preventing further use of your
            personal data.
          </li>
        </ul>
        {/* List # 6 */}
        <h2>6. HIPAA, AI, Blockchain & Telemedicine Compliance</h2>
        <p>
          MedicoTech Solutions LLC operates under strict compliance regulations,
          including:
        </p>
        <ul>
          <li>HIPAA (Health Insurance Portability & Accountability Act)</li>
          <li>HITRUST-certified security framework</li>
          <li>GDPR (for international clients handling EU patient data)</li>
          <li>State-Specific Telehealth Compliance</li>
        </ul>
        <h4>AI & Machine Learning in Healthcare</h4>
        <ul>
          <li>
            Used for denial management automation, claim optimization, and fraud
            detection
          </li>
          <li>
            No AI-based decision impacts patient care without human oversight
          </li>
          <li>
            AI models are audited for bias prevention & regulatory compliance
          </li>
        </ul>
        <h4>Blockchain for Medical Billing & EHR</h4>
        <ul>
          <li>Ensures tamper-proof record-keeping</li>
          <li>Smart contracts automate claim submissions</li>
          <li>Enhances data security in healthcare transactions</li>
        </ul>
        <h4>Telemedicine & Digital Health Regulations</h4>
        <ul>
          <li>
            Compliance with CMS (Centers for Medicare & Medicaid Services)
            reimbursement policies
          </li>
          <li>State-wise parity laws for remote consultations & billing</li>
          <li>Data encryption and authentication per FTC & HHS guidelines</li>
        </ul>
        <p>
          <span style={{ color: "#274760" }}>
            <b> Future-Ready Compliance:</b>
          </span>{" "}
          As AI, blockchain and digital health evolve, we will continuously
          update policies to reflect new healthcare IT regulations.
        </p>
        {/* List # 7 */}
        <h2>7. Data Protection & Cybersecurity Strategy</h2>
        <h4>Multi-Layered Cybersecurity Approach</h4>
        <ul>
          <li>256-bit encryption for data transmission</li>
          <li>SOC 2 Type II compliance for cloud storage</li>
          <li>Multi-factor authentication (MFA) for client portals</li>
          <li>Real-time intrusion detection & AI-driven security monitoring</li>
        </ul>
        <h4>Proactive Risk Management</h4>
        <ul>
          <li>Quarterly penetration testing & security audits</li>
          <li>Zero-trust architecture to prevent unauthorized access</li>
          <li>
            AI-driven anomaly detection to predict & prevent cyber threats
          </li>
        </ul>
        <p>
          <span style={{ color: "#274760" }}>
            <b> Breach Notification Policy:</b>
          </span>{" "}
          In case of a data breach, clients will be notified per HIPAA & FTC
          breach notification rules.
        </p>
        {/* List # 8 */}
        <h2>8. Handling & Usage of Data</h2>.
        <ul>
          <li>We DO NOT sell or rent personal data.</li>
          <li>
            We share de-identified data for research, training, and AI model
            improvements.
          </li>
          <li>
            Affiliates, partners, or investors with an ownership interest in
            MedicoTech Solutions LLC may access data only under strict privacy
            agreements.
          </li>
        </ul>
        {/* List # 9 */}
        <h2>9. Your Rights & Compliance with Data Protection Laws</h2>
        <ul>
          <li>Right to Access – Review your stored data anytime</li>
          <li>Right to Correction – Request changes to inaccurate data</li>
          <li>
            Right to Data Portability – Obtain copies of your data for personal
            use
          </li>
          <li>
            Right to Withdraw Consent – Opt out of marketing & data analytics
          </li>
          <li>
            Right to Erasure – Request deletion of personal information (subject
            to HIPAA exceptions)
          </li>
        </ul>
        <p>
          <span style={{ color: "#274760" }}>
            <b> State-Specific Privacy Laws:</b>
          </span>{" "}
          If you are a resident of California (CCPA), Texas, or New York,
          additional consumer data rights may apply.
        </p>
        {/* List # 10 */}
        <h2>10. Cookies & Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to:</p>
        <ul>
          <li>Identify returning visitors.</li>
          <li>Customize content and preferences.</li>
          <li>Improve website performance.</li>
        </ul>
        <p>
          You can control or disable cookies via your browser settings. However,
          doing so may impact website functionality.
        </p>
        {/* List # 11 */}
        <h2>11. Third-Party Links & External Websites</h2>
        <p>
          Our website may contain links to third-party websites. MedicoTech
          Solutions LLC is not responsible for its privacy practices. We
          encourage users to review third-party privacy policies before sharing
          personal data.
        </p>
        {/* List # 12 */}
        <h2>12. Referral Services</h2>
        <p>
          If you refer someone to our website, we may collect their name and
          email to send an invitation. If the recipient wishes to remove their
          details, they may contact us at info@medicotechsolutions.com.
        </p>
        {/* List # 13 */}
        <h2>13. Policy Updates & Contact Information</h2>
        <p>
          As healthcare technology & regulations evolve, MedicoTech Solutions
          LLC will update its policies periodically. Any changes will be posted
          on this page with an updated "Effective Date." Clients will be
          notified of major policy changes via email or website announcements.
        </p>
        <p>For inquiries, contact us at:</p>
        <ul>
          <li>
            Email:{" "}
            <Link
              to="mailto:info@medicotechsolutions.com"
              style={{ color: "#307bc4" }}
            >
              info@medicotechsolutions.com
            </Link>
          </li>
          <li>
            Website:{" "}
            <Link
              to="https://medicotechsolutions.com"
              style={{ color: "#307bc4" }}
            >
              www.medicotechsolutions.com
            </Link>
          </li>
          <li>Address: 5900 Balcones Drive, #18270, Austin, TX</li>
        </ul>
      </div>
    </>
  );
}
