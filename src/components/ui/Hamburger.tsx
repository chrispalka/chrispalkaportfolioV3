import "../../styles/hamburgers.css";
import clsx from "clsx";

export default function Hamburger({ isOpen }: { isOpen: boolean }) {
  return (
    <button
      className={clsx("hamburger hamburger--emphatic", isOpen && "is-active")}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
