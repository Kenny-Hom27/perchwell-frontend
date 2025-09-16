import { NO_FILES } from "../../constants";
import styles from "./FileView.module.css";

export default function FileView() {
  return <div className={styles.fileView}>{NO_FILES}</div>;
}
