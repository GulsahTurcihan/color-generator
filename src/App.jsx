import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#76B947").all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick = {true}
        rtl={false}
        pauseOnFocusLoss
        draggable = {true}
        pauseOnHover
        theme="light"

      />
    </main>
  );
};
export default App;
