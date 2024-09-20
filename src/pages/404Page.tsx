import { useNavigate } from "react-router";

import Button from "components/InteractiveReused/Button/Button";

function Page404() {
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate("/");
  };
  return (
    <>
      <div className="fixed rounded-r-[5px] border-[2px] border-l-[0px] border-dark-theme-ligth-blue bg-dark-theme-main-blue p-3 shadow-lg shadow-black">
        <Button variant={"blueButton"} size={"md"} onClick={navigateToHomepage}>
          Back
        </Button>
      </div>
      <div className="flex w-[100%] flex-col items-center justify-center pt-20 text-[24px] font-bold text-white lg:text-[32px]">
        COIN NOT FOUND...
      </div>
    </>
  );
}

export default Page404;
