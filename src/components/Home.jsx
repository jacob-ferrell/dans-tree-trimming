import "../styles/Home.css";
import { Link } from "react-router-dom";
import GalleryCarousel from "./GalleryCarousel";
import messageIcon from "../assets/images/icons/email.png";

const Home = (props) => {
  return (
    <div className="content" id="home">
      <div className="home-top">
        <h2>Dan's Tree Trimming</h2>
        <div>Transform Your Landscape with Dan's Tree Trimming!</div>
        <GalleryCarousel />
      </div>
      <div className="h-100 btn-container">
        <Link to="/services">
          <button className="btn text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>palm-tree</title>
              <path d="M12 9C13.59 16.61 10 22 10 22H13C14.88 16.2 14 12.09 13.5 10M15.66 7.16C15.83 7.37 16 7.59 16.13 7.82C17.84 10.53 17.5 13.95 15.5 16.26C16.34 14.21 16.22 11.79 14.95 9.77C14.87 9.64 14.78 9.53 14.7 9.41C14.11 8.58 13.36 7.92 12.54 7.43C9.66 8.35 7.58 11.04 7.58 14.22C7.58 14.96 7.69 15.67 7.89 16.33C7.05 15.16 6.56 13.73 6.56 12.19C6.56 9.84 7.7 7.76 9.45 6.46C8 6.35 6.46 6.67 5.12 7.5C4.5 7.91 3.96 8.38 3.5 8.91C4.05 7.58 5 6.39 6.3 5.57C7.8 4.63 9.5 4.32 11.14 4.56C10.73 4 10.23 3.47 9.63 3C9.05 2.58 8.42 2.24 7.76 2C9.2 2.04 10.64 2.5 11.87 3.43C12.5 3.9 13 4.47 13.4 5.07C13.5 5.07 13.59 5.06 13.69 5.06C16.89 5.06 19.6 7.17 20.5 10.08C19.38 8.5 17.65 7.43 15.66 7.16Z" />
            </svg>
            View Our Services
          </button>
        </Link>
        <a href="tel:999-999-9999">
          <button className="btn text-white">
            <svg
              id="phone"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>phone-outline</title>
              <path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
            </svg>
            Call For A Free Estimate
          </button>
        </a>
        <Link to="/contact">
          <button className="btn text-white">
            <img src={messageIcon} />
            Questions? Send Us A Message
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
