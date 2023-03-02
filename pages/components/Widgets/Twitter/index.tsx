import { FC, useEffect } from "react";
import styles from "@/styles/Twitter.module.scss";
import { FaTwitterSquare } from "react-icons/fa";
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";
interface Props {
  TwitterHandle: string;
  TwitterBio: string;
  TwitterFollowers: number;
}

const Twitter: FC = () => {
  return (
    <div className={styles.twitterWrapper}>
      <div className={styles.contents}>
        <div className={styles.top}>
          <div className={styles.icon}>
            <FaTwitterSquare size={40} color="#00ACEE" />
          </div>

          <div className={styles.followers}>
            <p>
              Followers <span>465</span>
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.Twitterhandle}>
            <h4>Twitter</h4>
            <p>@ThilanBawantha</p>
          </div>

          <div className={styles.bio}>
            <p>
              SLIIT 👨‍🎓 | Software Engineer | Traveller | Blogger | Messi 👑 |
              Barcelona 💙❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
