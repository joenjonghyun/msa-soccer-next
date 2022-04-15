import Link from "next/link";
import style from "common/style/Nav.module.css";


export default function Basic(){
  return (
    <nav>
      <ul>
        <li className={style.li}> <Link href='/todo/todo'>Todo</Link> </li>
        <li className={style.li}> <Link href='/todo/todo-list'>TodoList</Link> </li>
      </ul>
    </nav>
    );
};