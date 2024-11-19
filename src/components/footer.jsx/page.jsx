import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-100 py-8'>
    <footer className=" max-w-[1200px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
         
          <div className="col-span-1">
            <img src='\img\image-removebg-preview.png' alt='logo' className=''></img>
            <p className="text-gray-500 mt-2 ml-5">&copy; 2024 Swiggy Limited</p>
          </div>

          
          <div>
            <h3 className="text-black font-bold mb-2">Company</h3>
            <ul className="text-gray-500 space-y-1">
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Swiggy Genie</li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-black font-bold mb-2">Contact Us</h3>
            <ul className="text-gray-500 space-y-1">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-black font-bold mb-2">Available in:</h3>
            <ul className="text-gray-500 space-y-1">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
              <li>679 cities</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-black font-bold mb-2">Life at Swiggy</h3>
            <ul className="text-gray-500 space-y-1">
              <li>Explore with Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>
          </div>
        </div>

      
        <div className="mt-8 border-t border-gray-200 pt-4">
          <div className="flex flex-col md:flex-row md:justify-between text-gray-500">
            <div className="flex flex-wrap space-x-4">
              <a href="#terms">Terms & Conditions</a>
              <a href="#cookie">Cookie Policy</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#investor">Investor Relations</a>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-black font-medium">Social Links:</span>
              <ul className="inline-flex space-x-4 ml-2">
                <li>
                  <a href="#linkedin" className="hover:text-gray-700">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#instagram" className="hover:text-gray-700">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#facebook" className="hover:text-gray-700">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#pinterest" className="hover:text-gray-700">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="#twitter" className="hover:text-gray-700">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
