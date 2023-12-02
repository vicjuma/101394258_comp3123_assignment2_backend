import React from 'react'

type Employees = {
    showEdit: (target: string) => void,
    viewEmployee: (target: string) => void,
    employees: {
        id: string,
        firstName: string,
        lastName: string,
        emailId: string
    }[],
    requestToDelete: (target: string) => void
}

 const Tabel: React.FC<Employees> = ({showEdit, viewEmployee, employees, requestToDelete}) => {
    
    const editData = (i: string) => {
        showEdit(i)
    }

    const deleteData = (i: any) => {
        requestToDelete(i)
    }

    const viewData = (i: string) => {
        viewEmployee(i);
    };

    return (
        <div>
        <table className="table" style={styles.tableStyles}>
            <thead>
                <tr>
                    <th scope="col" style={styles.headerStyle}>ID</th>
                    <th scope="col" style={styles.headerStyle}>Employee's First Name</th>
                    <th scope="col" style={styles.headerStyle}>Employee's Last Name</th>
                    <th scope="col" style={styles.headerStyle}>Employee's Email ID</th>
                    <th scope="col" style={styles.headerStyle}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((item: any, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row" style={styles.headerStyle}>{index + 1}</th>
                                <td style={styles.rowStyle}>{item.firstName}</td>
                                <td style={styles.rowStyle}>{item.lastName}</td>
                                <td style={styles.rowStyle}>{item.emailId}</td>
                                <td style={styles.rowStyle}>
                                    <button onClick={() => editData(item)} className="btn mx-2" style={styles.btnEditStyles}>Edit</button>
                                    <button className="btn mx-2" onClick={() => deleteData(item)}style={styles.btnDangerStyles}>Delete</button>
                                    <button className="btn" onClick={() => viewData(item)} style={styles.btnCreateStyles}>View</button>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    </div>
    )
}

const styles = {
    tableStyles: {
        color: '#333',
        backgroundColor: 'white',
        border: '1px solid grey',
        fontSize: '12pt',
    },
    btnEditStyles: {
        color: 'green'
    },
    btnDangerStyles: {
        color: 'red'
    },
    btnCreateStyles: {
        color: 'blue'
    },
    headerStyle: {
        color: 'white',
        backgroundColor: 'black'
    },
    rowStyle: {
        color: 'black',
        backgroundColor: '#ccc'
    }
};

export default Tabel