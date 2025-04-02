import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../api";

export default function AppointmentForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    businessName: Yup.string().required("Business name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    providers: Yup.string().required("Please select number of providers"),
    message: Yup.string().required("Message is required"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    providers: "5",
    message: "",
  };

  // Custom submit handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Extract form values
      const { name, businessName, email, phoneNumber, providers, message } =
        values;

      // Assuming you're making an API call to submit the form
      const payload = {
        name,
        businessName,
        email,
        phoneNumber,
        providers,
        message,
      };

      setSubmitting(true); // To indicate submission in progress
      const response = await api.post("createConsultation", payload); // Replace with actual API call

      if (response.status === 200) {
        setSubmitting(false);
        // Manually reset the form after a short delay to ensure form reset happens after submission
        setTimeout(() => {
          resetForm(); // Reset form fields to initial values
        }, 500); // Delay reset to allow form state update
      } else {
        setSubmitting(false);
      }
    } catch (error) {
      console.log(error);
      setSubmitting(false); // Set submitting to false in case of error
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit} // Use the custom handleSubmit
    >
      {({ isSubmitting }) => (
        <Form className="row">
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Name</label>
            <Field
              type="text"
              name="name"
              className="cs_form_field"
              placeholder="David John"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">
              Business Name
            </label>
            <Field
              type="text"
              name="businessName"
              className="cs_form_field"
              placeholder="Business Name"
            />
            <ErrorMessage
              name="businessName"
              component="div"
              className="error-message"
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Email</label>
            <Field
              type="email"
              name="email"
              className="cs_form_field"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">
              Phone Number
            </label>
            <Field
              type="text"
              name="phoneNumber"
              className="cs_form_field"
              placeholder="Phone Number"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="error-message"
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-12">
            <label className="cs_input_label cs_heading_color">Providers</label>
            <Field as="select" name="providers" className="cs_form_field">
              <option value="5">1-5</option>
              <option value="10">6-10</option>
              <option value="11">10+</option>
            </Field>
            <ErrorMessage
              name="providers"
              component="div"
              className="error-message"
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-12">
            <label className="cs_input_label cs_heading_color">Message</label>
            <Field
              as="textarea"
              name="message"
              className="cs_form_field"
              placeholder="Enter your message here"
              rows="5"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="error-message"
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-12">
            <button
              type="submit"
              className="cs_btn cs_style_1"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <span
                  className="me-2 spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              <span>{isSubmitting ? "Submitting" : "Submit"}</span>
              <i>
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
              </i>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
