import DataFamily from "../../components/Data-family";
import NaveBar from "../../components/Navbar";
import SeachBarHome from "./Seach";
import BodyPage from "./body";

export default function HomePage() {
  return (
    <>
      <NaveBar />
      <DataFamily />
      <SeachBarHome />
      <BodyPage />
    </>
  );
}
