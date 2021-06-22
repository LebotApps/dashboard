
import Dashboard from "./components/Dashboard";
import Number from "./components/Number";
import './App.css';
import AverageRating from "./components/AverageRating";
import SentimentAnalysis from "./components/SentimentAnalysis";



function App() {
  return (
    <div>
   <Dashboard />
   <div className="reviewsBox">
   <Number />
   </div>
   <div className="reviewsBox">
     <AverageRating />
   </div>
   <div className="reviewsBox">
     <SentimentAnalysis />
   </div>
   </div>
  );
}

export default App;
