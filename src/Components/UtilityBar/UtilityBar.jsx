import { useLocation } from "react-router-dom";
import "./UtilityBar.css";

const UtilityBar = () => {
  const location = useLocation();
  const excludePaths = ["/admin"];
  if (excludePaths.includes(location.pathname)) {
    return null;
  }
  return (
    <div className='utility-bar color-scheme-bd4e0e84-6ad3-4213-8f0b-ea0b779379d2 gradient utility-bar--bottom-border'>
      <div className='page-width utility-bar__grid'>
        <div className='announcement-bar' role='region' aria-label='Announcement'>
          <p className='announcement-bar__message h5'>
            <span>Bienvenido a nuestra tienda</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
