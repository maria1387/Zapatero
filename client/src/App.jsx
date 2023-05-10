import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import ClipLoader from "react-spinners/ClipLoader";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center justify-items-center">
          <ClipLoader
            color={"#80128a"}
            loading={loading}
            className="spinner spinner-margen  flex justify-items-center"
            size={150}
            // aria-label="Loading Spinner"
            // data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Layout />
        </>
      )}
    </>
  );
}

export default App;
