import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title:
    "TechVision - Your Gateway to Digital Innovation",
  description:
    "Exploring the latest in technology, digital transformation, and future innovations.",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    "title": "SEO Tools & Enhancements",
    "slug": "seo-essentials",
    "tools": [
      {
        "title": "Meta Tag Checker",
        "desc": "Analyze and optimize your website's meta tags for enhanced search visibility and improved rankings.",
        "href": "https://tools360s.com/meta-tags-analyzer/"
      },
      {
        "title": "Google Index Status",
        "desc": "Verify if your URLs are indexed on Google, ensuring your site's visibility on search engines.",
        "href": "https://tools360s.com/google-index-checker/"
      },
      {
        "title": "Link Redirect Validator",
        "desc": "Check redirection paths of URLs to avoid SEO issues from broken links or incorrect redirects.",
        "href": "https://tools360s.com/redirect-checker"
      },
      {
        "title": "Secure Browsing Test",
        "desc": "Identify security vulnerabilities on your website to protect against malware and hacking threats.",
        "href": "https://tools360s.com/safe-browsing"
      },
      {
        "title": "Backlink Generator",
        "desc": "Build quality backlinks to improve your SEO performance and site authority in search results.",
        "href": "https://tools360s.com/backlink-maker"
      },
      {
        "title": "Cache Viewer",
        "desc": "View Google's cached version of your site to check how your content appears in the search index.",
        "href": "https://tools360s.com/google-cache-checker/"
      }
    ]
  },
  {
    "title": "Image Tools & Utilities",
    "slug": "image-utilities",
    "tools": [
      {
        "title": "Convert Image Format",
        "desc": "Switch between formats like JPEG, PNG, WebP effortlessly to meet your website's image needs.",
        "href": "https://review360.info/image-converter"
      },
      {
        "title": "Add Image Watermark",
        "desc": "Apply a watermark to your images to secure branding and protect copyrights.",
        "href": "https://review360.info/insert-logo"
      },
      {
        "title": "Image Resizer",
        "desc": "Resize images quickly to fit your blog, website, or social media dimensions.",
        "href": "https://review360.info/image-resizer"
      },
      {
        "title": "Upload to Cloud",
        "desc": "Upload images to cloud storage for better access and faster delivery worldwide.",
        "href": "https://review360.info/upload-image"
      },
      {
        "title": "Image Crop Tool",
        "desc": "Crop images to the exact dimensions or aspect ratio to fit your design or content needs.",
        "href": "https://review360.info/image-crop"
      },
      {
        "title": "Image Compression",
        "desc": "Reduce file sizes without losing quality to ensure faster load times.",
        "href": "https://review360.info"
      }
    ]
  },
  {
    "title": "Text Analysis & Comparison",
    "slug": "text-utilities",
    "tools": [
      {
        "title": "Text Comparator",
        "desc": "Compare two texts side-by-side to find differences and track changes in revisions.",
        "href": "https://tools360s.com/text-compare"
      },
      {
        "title": "Word Count Tool",
        "desc": "Calculate the number of words, characters, and sentences in text for meeting length guidelines.",
        "href": "https://tools360s.com/word-counter"
      }
    ]
  },
  {
    "title": "General Utilities",
    "slug": "general-tools",
    "tools": [
      {
        "title": "IP Address Finder",
        "desc": "Identify your public IP address in IPv4 and IPv6 formats for network configurations.",
        "href": "https://tools360s.com/what-is-my-ip"
      },
      {
        "title": "Password Generator",
        "desc": "Generate strong, unique passwords to enhance your online security.",
        "href": "https://tools360s.com/password-generator/"
      },
      {
        "title": "Invoice Maker",
        "desc": "Create professional invoices with client details, service breakdowns, and payment terms.",
        "href": "https://tools360s.com/invoice-generator"
      },
      {
        "title": "Code Formatter",
        "desc": "Format HTML, CSS, JavaScript, or JSON code for better readability and organization.",
        "href": "https://tools360s.com/code-formatter"
      },
      {
        "title": "Browser Update Checker",
        "desc": "Ensure your browser is updated for optimal performance and security.",
        "href": "https://tools360s.com/browser-update/"
      }
    ]
  },
  {
    "title": "Link & URL Tools",
    "slug": "link-management",
    "tools": [
      {
        "title": "Shorten URL",
        "desc": "Turn long URLs into short, shareable links that are easy to manage and track.",
        "href": "https://free-url.short360s.com/"
      },
      {
        "title": "QR Code Creator",
        "desc": "Generate QR codes for URLs, making sharing links convenient via mobile.",
        "href": "https://free-url.short360s.com/qr-code-generator/"
      },
      {
        "title": "Link Analytics",
        "desc": "Analyze the performance and traffic data of your shortened links.",
        "href": "https://free-url.short360s.com/stats"
      }
    ]
  }
];
