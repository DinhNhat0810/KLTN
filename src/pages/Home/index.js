import Footer from "../Footer";
import Header from "../Header";
import View from "../View";
import { BackTop } from "antd";

const Home = () => {
  return (
    <>
      <BackTop style={{ right: "30px", bottom: "30px" }} />
      <Header />
      <View />
      <Footer />
    </>
  );
};

export default Home;
