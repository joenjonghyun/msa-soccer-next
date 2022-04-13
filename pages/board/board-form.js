import React,{useState} from 'react'
import style from "board/style/board-form.module.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addTask} from '../../redux/reducers/board.reducer'

export default function BoardhtmlForm(){
    const [inputs, setInputs] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        const {inputs, name} = e.target
        setInputs({
            ...inputs,
            [name] : inputs
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        alert('value?' +inputs)
        if(inputs) dispatch(addTask({task: inputs}))
        axios.post('http://localhost:5000/api/board/write', inputs)
        .then(res => {
            alert(JSON.stringify(res.data))
        }) 
        .catch (err => alert(err))
    }
    return (<>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <htmlForm action="">
            <div className={style.row}>
                <div className={style.col-25}>
                <label className={style.label} htmlFor="passengerId">글 제목</label>
                </div>
                <div className={style.col-75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="title" name="title" placeholder="글 제목 입력"/>
                </div>
            </div>
            {/**
            <div className={style.row}>
                <div className={style.col-25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={style.col-75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="name" name="name" placeholder="게시글 작성자 이름 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col-25}>
                <label htmlFor="team">응원팀</label>
                </div>
                <div className={style.col-75}>
                <select id="teamId" onChange={handleChange} name="teamId">
                    <option value="">응원팀 선택</option>
                    <option value="K09">Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col-25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={style.col-75}>
                <input type="textarea"  onChange={handleChange} id="subject" name="subject" style={{height:200 + "px"}}></input>
                </div>
            </div>
            <br/>
            */}
            <div className={style.row}>
                <input type="submit" onClick={handleSubmit} className={style.inputSubmit}
                value="Submit"/>
            </div>
            </htmlForm>
            </div>
    </>)
}
