import Aside from "../Aside/Aside";
import Header from "../Header/Header";


export default function Layout({ children }) {
  return (
    <div className="bg-primary  ">
      <Header />
      <div className="flex w-full">
        <Aside />
        {children}
      </div>
    </div>
  );
}
