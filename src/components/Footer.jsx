import React from "react";

const Footer = () => {
  return (
    <footer class="bg-[#4343a9] text-white pt-10 pb-24 lg:py-10">
      <div class="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">About Us</h2>
          <p class="text-sm">
            Dedicated to the conservation and protection of wildlife, our
            reserve is a sanctuary for endangered species and a place to
            experience nature's beauty.
          </p>
          <a href="/about" class="text-green-400 hover:underline">
            Learn More
          </a>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl font-bold">Quick Links</h2>
          <ul class="space-y-2">
            <li>
              <a href="/visit" class="hover:text-green-400">
                Plan Your Visit
              </a>
            </li>
            <li>
              <a href="/volunteer" class="hover:text-green-400">
                Volunteer
              </a>
            </li>
            <li>
              <a href="/donate" class="hover:text-green-400">
                Make a Donation
              </a>
            </li>
            <li>
              <a href="/events" class="hover:text-green-400">
                Upcoming Events
              </a>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl font-bold">Contact Us</h2>
          <p class="text-sm">
            <strong>Address:</strong> 123 Wildlife Avenue, Nature City, Earth
            <strong>Email:</strong> contact@wildlifereserve.com
            <strong>Phone:</strong> +123 456 7890
          </p>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-green-400">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="hover:text-green-400">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="hover:text-green-400">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center text-sm border-t border-green-700 pt-4">
        <p>&copy; 2024 Wildlife Reserve. All Rights Reserved.</p>
        <a href="/privacy-policy" class="hover:underline text-green-400">
          Privacy Policy
        </a>{" "}
        |
        <a href="/terms-of-service" class="hover:underline text-green-400">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
