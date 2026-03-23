const Contact = () => {
  return (
    <div>
      <section className="py-14 md:py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Get in Touch</p>
          <h1 className="max-w-2xl mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Ready to discuss sourcing requirements? Reach out directly.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-lg mx-auto text-center">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</p>
                <a
                  href="mailto:nishant.sangwan@inmountglobal.com"
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  nishant.sangwan@inmountglobal.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Phone / WhatsApp</p>
                <a
                  href="tel:+919911593517"
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  +91 99115 93517
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Address</p>
                <p className="text-muted-foreground">
                  4477, Pahari Dhiraj, Sadar Bazaar,<br />
                  Delhi - 110006, India
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  Bulk and institutional enquiries only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
