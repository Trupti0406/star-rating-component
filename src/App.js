import StarRating from "./StarRating";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <StarRating starCount={10} />
    </div>
  );
}
