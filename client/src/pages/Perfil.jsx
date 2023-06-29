

import Title from "../components/Title";
import Sidebar from "../components/SidebarC";
import Helmet from "../components/Helmet/Helmet";

const Perfil = () => {
 
  return (
    <>
      <Helmet title={"Perfil"}>
        <Sidebar />
        <div className=" p-4 sm:ml-64 mt-28 flex justify-center">
          <div className=" container1    ">
            <div className="text-3xl flex justify-center mb-10">
              <Title h1=" PERFIL" />
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="flex justify-center">
               
              </div>
              <div className="">
              
              </div>
            </div>
           
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default Perfil;
