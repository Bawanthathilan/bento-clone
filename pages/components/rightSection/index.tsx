import { FC } from "react";
import styles from "@/styles/Right.module.scss";
import Twitter from "../Widgets/Twitter";

const RightSection: FC = () => {
  return (
    <div className={styles.right}>
      <div>
        <Twitter />
      </div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
      <div>Six</div>
      <div>Seven</div>
      <div>Eight</div>
      <div>Nine</div>
      <div>Ten</div>
      <div>Eleven</div>
      <div>Twelve</div>
    </div>
  );
};

export default RightSection;
