import { useNavigate } from "react-router-dom";
import "./Backbutton.css";

function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="back-btn-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
    </div>
  );
}

export default BackButton;
