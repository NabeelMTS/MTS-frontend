'use client';



export default function Contact() {

    useEffect(() => {
    document.title = "Contact - MedicoTech Solutions";
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      {/* Add contact form here */}
    </div>
  );
}
