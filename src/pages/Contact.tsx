const Contact = () => {
  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold mb-8">Contact</h1>

        <div className="space-y-6 text-sm">
          <div>
            <p className="font-medium mb-1">Email</p>
            <a
              href="mailto:nishant.sangwan@inmountglobal.com"
              className="text-primary hover:underline"
            >
              nishant.sangwan@inmountglobal.com
            </a>
          </div>

          <div>
            <p className="font-medium mb-1">Phone</p>
            <a
              href="tel:+919911593517"
              className="text-primary hover:underline"
            >
              +91 99115 93517
            </a>
          </div>

          <p className="text-muted-foreground pt-4 border-t border-border">
            Bulk and institutional enquiries only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
