import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import $ from "jquery";
import "select2/dist/css/select2.min.css";
import "select2/dist/js/select2.full.min.js";
import "select2";

const HeaderOne = () => {
  let { pathname } = useLocation();
  const [scroll, setScroll] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("select2").then(() => {
        const selectElement = $(".js-example-basic-single");
        if (selectElement.length > 0) {
          selectElement.select2(); // Initialize Select2
        }
      });
    }

    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      document.body.classList.add("scroll-hide-sm");
    } else {
      document.body.classList.remove("scroll-hide-sm");
    }
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    document.body.classList.remove("scroll-hide-sm");
  };

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmenuClick = (index) => {
    if (windowWidth < 992) {
      setActiveSubmenu((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const menuItems = [
    {
      label: "Home",

    },
    {
      label: "About us",
      // links: [
      //   { to: "/course", label: "Course Grid View" },
      //   { to: "/course-list-view", label: "Course List View" },
      //   { to: "/course-details", label: "Course Details" },
      //   { to: "/lesson-details", label: "Lesson Details" },
      // ],
    },
    // {
    //   label: "Pages",
    //   links: [
    //     { to: "/about", label: "About" },
    //     { to: "/about-two", label: "About Two" },
    //     { to: "/about-three", label: "About Three" },
    //     { to: "/about-four", label: "About Four" },
    //     { to: "/product", label: "Product" },
    //     { to: "/product-details", label: "Product Details" },
    //     { to: "/cart", label: "Cart" },
    //     { to: "/checkout", label: "Checkout" },
    //     { to: "/pricing-plan", label: "Pricing Plan" },
    //     { to: "/instructor", label: "Instructor" },
    //     { to: "/instructor-two", label: "Instructor Two" },
    //     { to: "/instructor-details", label: "Instructor Details" },
    //     { to: "/tutor", label: "Premium Tutors" },
    //     { to: "/tutor-details", label: "Premium Tutors Details" },
    //     { to: "/faq", label: "FAQ" },
    //     { to: "/tuition-jobs", label: "Tuition Jobs" },
    //     { to: "/events", label: "Events" },
    //     { to: "/event-details", label: "Event Details" },
    //     { to: "/apply-admission", label: "Apply Admission" },
    //     { to: "/gallery", label: "Gallery" },
    //     { to: "/privacy-policy", label: "Privacy Policy" },
    //     { to: "/favorite-course", label: "Favorite Course" },
    //     { to: "/find-tutors", label: "Find Best Tutors" },
    //     { to: "/book-online-class", label: "Book Online Class" },
    //   ],
    // },
 {
      label: "Academics",
      links: [
        { label: "/blog", label: "Community cell" },
      ],
    },
    {
      label: "Infrastructure",
      // links: [
      //   { to: "/blog", label: "Blog Grid" },
      //   { to: "/blog-list", label: "Blog List" },
      //   { to: "/blog-classic", label: "Blog Classic" },
      //   { to: "/blog-details", label: "Blog Details" },
      // ],
    },
      {
      label: "Courses",
      // links: [
      //   { to: "/blog", label: "Blog Grid" },
      //   { to: "/blog-list", label: "Blog List" },
      //   { to: "/blog-classic", label: "Blog Classic" },
      //   { to: "/blog-details", label: "Blog Details" },
      // ],
    }, {
      label: "Research",
      // links: [
      //   { to: "/blog", label: "Blog Grid" },
      //   { to: "/blog-list", label: "Blog List" },
      //   { to: "/blog-classic", label: "Blog Classic" },
      //   { to: "/blog-details", label: "Blog Details" },
      // ],
    },
     {
      label: "Departments",
      links: [
        { to: "/blog", label: "Pre clinical" },
        { to: "/blog-list", label: "para clinical" },
        { to: "/blog-classic", label: "clinical" }
      ]
    },
    {
      label: "Admin & Faculty Details",
      links: [
        { to: "/blog", label: "Pre clinical" },
        { to: "/blog-list", label: "para clinical" },
        { to: "/blog-classic", label: "clinical" }
      ]
    },
    // { to: "/contact", label: "Contact" },
   
  ];

  return (
    <>
      <div className={` ${isMenuActive ? "show" : ""}`}></div>
      <header className={`header ${scroll ? "fixed-header" : "fixed-header"}`}>
        <div className='container container--xl'>
          <nav className='header-inner flex-between gap-8'>
            <div className='header-content-wrapper flex-align flex-grow-1'>
              {/* Logo Start */}
              <div className='logo'>
                <Link to='/' className='link'>
                  <img src='https://takshashilauniv.ac.in/wp-content/uploads/2025/01/logo-new.png' alt='Logo' />
                </Link>
              </div>
              {/* Logo End  */}
              {/* Select Start */}
              {/* <div className='d-sm-block d-none'>
                <div className='header-select border border-neutral-30 bg-main-25 rounded-pill position-relative'>
                  <span className='select-icon position-absolute top-50 translate-middle-y inset-inline-start-0 z-1 ms-lg-4 ms-12 text-xl pointer-event-none d-flex'>
                    <i className='ph-bold ph-squares-four' />
                  </span>
                  <select
                    className='js-example-basic-single border-0'
                    name='state'
                    defaultValue='categories'
                  >
                    <option value={"Categories"}>Categories</option>
                    <option value={"Design"}>Design</option>
                    <option value={"Development"}>Development</option>
                    <option value={"Architecture"}>Architecture</option>
                    <option value={"Life Style"}>Life Style</option>
                    <option value={"Data Science"}>Data Science</option>
                    <option value={"Marketing"}>Marketing</option>
                    <option value={"Music"}>Music</option>
                    <option value={"Typography"}>Typography</option>
                    <option value={"Finance"}>Finance</option>
                    <option value={"Motivation"}>Motivation</option>
                  </select>
                </div>
              </div> */}
              {/* Select End */}
              {/* Menu Start  */}
              <div className='header-menu d-lg-block d-none'>
                <ul className='nav-menu flex-align'>
                  {menuItems.map((item, index) =>
                    item.links ? (
                      <li
                        key={`menu-item-${index}`}
                        className='nav-menu__item has-submenu'
                      >
                        <span to='#' className='nav-menu__link'>
                          {item.label}
                        </span>
                        <ul className={`nav-submenu scroll-sm`}>
                          {item.links.map((link, linkIndex) => (
                            <li
                              key={`submenu-item-${linkIndex}`}
                              className={`nav-submenu__item ${
                                pathname === link.to && "activePage"
                              }`}
                            >
                              <Link
                                to={link.to}
                                className='nav-submenu__link hover-bg-neutral-30'
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li
                        key={`menu-contact-${index}`}
                        className={`nav-menu__item ${
                          pathname === item.to && "activePage"
                        }`}
                      >
                        <Link to={item.to} className='nav-menu__link'>
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* Menu End  */}
            </div>
            {/* Header Right start */}
            {/* <div className='header-right flex-align'>
              <form
                action='#'
                className='search-form position-relative d-xl-block d-none'
              >
                <input
                  type='text'
                  className='common-input rounded-pill bg-main-25 pe-48 border-neutral-30'
                  placeholder='Search...'
                />
                <button
                  type='submit'
                  className='w-36 h-36 bg-main-600 hover-bg-main-700 rounded-circle flex-center text-md text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
                >
                  <i className='ph-bold ph-magnifying-glass' />
                </button>
              </form>
              <Link
                to='/sign-in'
                className='info-action w-52 h-52 bg-main-25 hover-bg-main-600 border border-neutral-30 rounded-circle flex-center text-2xl text-neutral-500 hover-text-white hover-border-main-600'
              >
                <i className='ph ph-user-circle' />
              </Link>
              <button
                type='button'
                className='toggle-mobileMenu d-lg-none text-neutral-200 flex-center'
                onClick={toggleMenu}
              >
                <i className='ph ph-list' />
              </button>
            </div> */}
            {/* Header Right End  */}
          </nav>
        </div>
      </header>

     
    </>
  );
};

export default HeaderOne;
