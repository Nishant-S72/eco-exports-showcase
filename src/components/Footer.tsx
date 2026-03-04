const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2 text-primary-foreground">Contact</h4>
            <p className="opacity-80">Email: nishant.sangwan@inmountglobal.com</p>
            <p className="opacity-80">Phone: +91 99115 93517</p>
            <p className="opacity-80">Address: 4477, Pahari Dhiraj, Sadar Bazaar, Delhi - 110006</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-primary-foreground">Notice</h4>
            <p className="opacity-80">Bulk Orders Only | B2B Enquiries</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-primary-foreground">About</h4>
            <p className="opacity-80">
              India-based export coordination partner for tableware and bulk
              spices, built around disciplined execution and documentation.
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Inmount Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
