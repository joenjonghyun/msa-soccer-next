
import Link from "next/link";
import style from "common/style/Nav.module.css";


export default function Basic(){
  return (
    <nav>
      <ul>
        <li className={style.li}> <Link href='/board/board-form'>Board</Link> </li>
        <li className={style.li}> <Link href='/board/board-list'>BoardList</Link> </li>
      </ul>
    </nav>
    );
};