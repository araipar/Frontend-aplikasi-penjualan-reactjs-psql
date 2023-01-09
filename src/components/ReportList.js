import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ReportList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions();
    }, []);

    const getTransactions = async () => {
        const response = await axios.get("http://localhost:5000/getReportSales");
        console.log(response.data[0])
        setTransactions(response.data[0]);
    };



    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`/`} className="button is-success">
                    Belanja Lagi
                </Link>
                <br /><br />
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>Transaction</th>
                            <th>User</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transactions, index) => (
                            <tr>
                                <td>{transactions.document_code + "-" + transactions.document_number}</td>
                                <td>{transactions.user}</td>
                                <td>{transactions.total}</td>
                                <td>{transactions.createdAt}</td>
                                <td>{transactions.product_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportList;
