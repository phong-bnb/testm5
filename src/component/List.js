import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function List() {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/tuors").then((res) => {
            setList(res.data);
        });
    }, []);
    return (
        <div>
            <button><Link>Add</Link></button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Giá</th>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map((item, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <button type="submit" class="btn btn-primary"><Link style={{ textDecoration: "none", color: "inherit" }} to={"/detail/"+item.id}>Detail</Link></button>
                            <td><button>Delete</button></td>
                            <td><button>Update</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default List