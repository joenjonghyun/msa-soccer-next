
import Link from "next/link";
import style from "common/style/Nav.module.css";

export default function Nav(){
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.li}> <Link href='/'>Home</Link> </li>
        <li className={style.li}> <Link href='/admin/dashboard'>DashBoard</Link> </li>
        <li className={style.li}> <Link href='/common/basiclink'>BasicLink</Link> </li>
        <li className={style.li}> <Link href='/todo/todo-list'>TodoList</Link> </li>
        <li className={style.li}> <Link href='/common/boardlink'>BoardLink</Link> </li>
        <li className={style.li}> <Link href='/common/game-link'>GameLink</Link> </li>
        <li className={style.li}> <Link href='/common/user-link'>UserLink</Link> </li>
      </ul>
    </nav>
  );
};