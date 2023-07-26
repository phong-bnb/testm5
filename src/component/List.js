import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Add from "./Add";

function List() {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3080/tuors").then((res) => {
            setList(res.data);
        });
    }, []);
    const loadedTour = () => {
        axios.get('http://localhost:3080/tuors')
            .then(response => {
                setList(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi gọi API:', error);
            });
    }
    const deleteTour = (id) => {
        axios.delete("http://localhost:3080/tuors/" + id)
            .then(r  =>{
                loadedTour()
            })
            .catch((err) => {
                console.log(err);
            });
    }


    useEffect(() => {
        // Gọi API để lấy dữ liệu
        loadedTour()
    }, []);
    return (
        <div>
            <Link to="/add"><button>Add</button></Link>

            <table
                className="table table-striped table-bordered table-hover text-center align-middle"
                style={{border: '1px'}}
            >
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Infomation</th>
                    <th scope="col">Price</th>
                    <th scope="col">Option</th>
                </tr>
                </thead>
                <tbody>
                {list &&
                    list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={()=>{deleteTour(item.id)}} type="button" className="btn btn-outline-danger">Delete</button>
                            </td>

                                <br/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default List