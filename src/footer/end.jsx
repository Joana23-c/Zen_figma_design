import "./end.scss";
import dot from "/dot.png";

export default function End() {
  return (
    <div className="end">
      <div className="end__links">
        <p>Terms of Service</p>
        <div className="end__separator">
          <img src={dot}></img>
        </div>
        <p>Privacy Policy</p>
      </div>
      <div className="end__copyright">
        <p>&copy;️ 2024 Zen. All Rights Reserved.</p>
      </div>
    </div>
  );
}
