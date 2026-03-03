import { useState, FormEvent } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company details */}
          <div className="text-sm space-y-4">
            <div>
              <p className="font-medium">Company Name</p>
              <p className="text-muted-foreground">[COMPANY_NAME]</p>
            </div>
            <div>
              <p className="font-medium">Registered Address</p>
              <p className="text-muted-foreground">[REGISTERED_ADDRESS]</p>
            </div>
            <div>
              <p className="font-medium">Factory Address</p>
              <p className="text-muted-foreground">[FACTORY_ADDRESS]</p>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">[EMAIL_ADDRESS]</p>
            </div>
            <div>
              <p className="font-medium">Phone / WhatsApp</p>
              <p className="text-muted-foreground">[PHONE_NUMBER]</p>
            </div>
          </div>

          {/* Inquiry form */}
          <div>
            {submitted ? (
              <div className="bg-accent border border-border rounded p-8 text-center">
                <p className="text-accent-foreground font-medium">
                  Thank you for your enquiry. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Name", type: "text" },
                  { name: "company", label: "Company", type: "text" },
                  { name: "country", label: "Country", type: "text" },
                  { name: "product", label: "Product Interested", type: "text" },
                  { name: "quantity", label: "Quantity Required", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required
                      className="w-full border border-input rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full border border-input rounded px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded hover:opacity-90"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
