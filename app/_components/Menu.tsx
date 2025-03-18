"use client";
import Offcanvas from "@/app/_components/Offcanvas";
import Bars from "@/app/_components/_icons/Bars";
import Close from "@/app/_components/_icons/Close";

function Menu() {
  return (
    <>
      <div className="md:hidden">
        <Offcanvas>
          <Offcanvas.Open>
            <button type="button">
              <Bars />
            </button>
          </Offcanvas.Open>
          <Offcanvas.Window right={true}>
            <WindowMenuMobile close={() => {}} />
          </Offcanvas.Window>
        </Offcanvas>
      </div>
    </>
  );
}

function WindowMenuMobile({ close }: { close: () => void }) {
  return (
    <div className="w-full h-screen py-3 px-5">
      <div className="flex justify-between pb-4 border-b border-b-gray-300 dark:border-b-gray-700 mb-4">
        <button type="button" onClick={close}>
          <Close itemShop={false} />
        </button>
        <h3 className="dark:text-gray-50">منو</h3>
      </div>
    </div>
  );
}

export default Menu;
