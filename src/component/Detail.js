import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
import {  useParams } from "react-router-dom";
function Detail() {
    const{id} =useParams()
    const [detail, setDetail] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3080/tuors/${id}`).then((res) => {
            setDetail(res.data);
        });
    }, {});
    return (
        <>
        <h1>Chi tiết</h1>
        <table>
            <tr><b>tuor du lịch {detail.title}</b></tr>
            <tr>giá: <b> {detail.price}</b></tr>
            <tr>giới thiệu:{detail.description}</tr>
        </table>

        </>
    )
}

export default Detail