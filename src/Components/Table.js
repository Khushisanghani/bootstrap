function Table() {
    return (
        <>
            <div className="container mt-3">
                <h2>Basic Table</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Khushi</td>
                            <td>Sanghani</td>
                            <td>khushi@email.com</td>
                        </tr>
                        <tr>
                            <td>Keshvi</td>
                            <td>Patel</td>
                            <td>keshvi@email.com</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className="container mt-3">
                <h2>Striped Rows</h2>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Khushi</td>
                            <td>Sanghani</td>
                            <td>khushi@email.com</td>
                        </tr>
                        <tr>
                            <td>Keshvi</td>
                            <td>Patel</td>
                            <td>keshvi@email.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container mt-3">
                <h2>Striped Rows</h2>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Khushi</td>
                            <td>Sanghani</td>
                            <td>khushi@email.com</td>
                        </tr>
                        <tr>
                            <td>Keshvi</td>
                            <td>Patel</td>
                            <td>keshvi@email.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container mt-3">
                <h2>Striped Rows</h2>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Khushi</td>
                            <td>Sanghani</td>
                            <td>khushi@email.com</td>
                        </tr>
                        <tr>
                            <td>Keshvi</td>
                            <td>Patel</td>
                            <td>keshvi@email.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Table;