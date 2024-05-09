import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as fasHeart, // Import solid heart
  faComment as farComment,
  faPaperPlane as farPaperPlane,
  faBookmark as farBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH as fasEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasHeartSolid } from "@fortawesome/free-solid-svg-icons"; // Import for solid heart

const InstagramPost = ({ posts }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-josefin">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            style={{ minWidth: "300px", width: "100%" }}
          >
            <div className="flex justify-between items-center p-2 bg-white">
              <div className="flex items-center">
                <div className="relative w-10 h-10">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    className="absolute top-0 left-0"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#grad1)"
                      strokeWidth="5"
                    />
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{
                            stopColor: "rgb(253,185,39)",
                            stopOpacity: 1,
                          }}
                        />
                        <stop
                          offset="100%"
                          style={{
                            stopColor: "rgb(193,53,132)",
                            stopOpacity: 1,
                          }}
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Image
                    src="/Logo7.png"
                    alt="Logo"
                    width={64}
                    height={64}
                    layout="responsive"
                    objectFit="cover"
                    className="relative z-10 rounded-full"
                  />
                </div>
                <span className="ml-1 font-bold text-sm font-semibold text-gray-800">
                  willa_poprad
                </span>
              </div>
              <FontAwesomeIcon
                icon={fasEllipsisH}
                className="text-gray-600 cursor-pointer hover:text-black"
              />
            </div>

            <div
              className="relative w-full"
              style={{ height: "0px", paddingBottom: "100%" }}
            >
              <Image
                src={post.image.src}
                alt={post.image.alt}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center text-gray-700">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon
                    icon={fasHeartSolid}
                    className="cursor-pointer hover:text-red-500"
                    style={{ color: "#00abd7" }} // Set solid heart icon color to blue
                  />
                  <FontAwesomeIcon
                    icon={farComment}
                    className="cursor-pointer hover:text-blue-500"
                  />
                  <FontAwesomeIcon
                    icon={farPaperPlane}
                    className="cursor-pointer hover:text-green-500"
                  />
                </div>
                <FontAwesomeIcon
                  icon={farBookmark}
                  className="cursor-pointer hover:text-yellow-500"
                />
              </div>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">willa_poprad </span>
                {post.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramPost;
