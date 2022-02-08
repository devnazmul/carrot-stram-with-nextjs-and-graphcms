import Aside from "../Aside/Aside";
import Header from "../Header/Header";


export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      <div className="flex">
        <Aside />
        {children}
      </div>
    </div>
  );
}
