import React, { useState, useEffect } from 'react'
import Tabel from '../../components/TableComponent'
import axios from 'axios';


const Home = () => {
    const [formMode, setFormMode] = useState<string>("");
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [emailId, setEmailId] = useState<string>("");
    const [ids, setIds] = useState<string>("");

    const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

    const viewEmployee = async (i: any) => {
        setSelectedEmployee(i);
    };


    useEffect(() => {
        _get()

        return () => {

        }
    }, [])


    const _get = async () => {
        axios.get("http://localhost:5000/employee")
            .then((res) => {
                setData(res.data)
            }).catch((e) => { console.log(e.response.data); })
    }

    async function submitForm(e: any) {
        e.preventDefault()
        console.log(firstName, lastName);


        if (formMode === "create") {

            const formData = new URLSearchParams()
            formData.append("firstName", firstName)
            formData.append("lastName", lastName)
            formData.append("emailId", emailId)

            await axios({
                method: 'POST',
                data: formData,
                url: 'http://localhost:5000/employee',
            })
                .then((res) => {
                    setFirstName("")
                    setLastName("")
                    setFormMode("")
                    setEmailId("")
                    _get()

                }).catch((e) => {
                    console.log(e.response);
                })
        }

        if (formMode === "edit") {

            const formData = new URLSearchParams()
            formData.append("firstName", firstName)
            formData.append("lastName", lastName)
            formData.append("emailId", emailId)

            await axios({
                method: 'PUT',
                data: formData,
                url: 'http://localhost:5000/employee/update/' + ids,
            })
                .then((res) => {
                    setFirstName("")
                    setLastName("")
                    setEmailId("")
                    setIds("")
                    setFormMode("")
                    _get()
                }).catch((e) => {
                    console.log(e.response);
                })
        }
    }

    const requestToDelete = async (i: any) => {
        await axios.delete("http://localhost:5000/employee/delete/" + i._id)
        .then((res) => {
            _get()
        }).catch((e) => {
            console.log(e.response);
        })
    }

    const showForm = () => {
        setFormMode("create")
    }

    const showEditForm = (i: any) => {
        setFormMode("edit")
        setFirstName(i.firstName)
        setLastName(i.lastName)
        setEmailId(i.emailId)
        setIds(i._id)
    }

    const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }

    const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value)
    }

    const onChangeEmailId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailId(e.target.value)
    }

    return (
        <div className='container'>
            <button onClick={showForm} className="btn btn-sm mt-3 btn-info my-2">
                Add an Employee
            </button>

            {
                formMode === "create" && (
                    <div id="form" style={styles.formStyles}>
                        <div className="card-body">
                            <form onSubmit={submitForm} className='justify-content-center d-flex flex-column align-items-center'>
                                <h4>Create An Employee Form</h4>
                                <div className="col-4 mb-5">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control mx-2" name='firstName' value={firstName} onChange={onChangeFirstName} required style={styles.inputStyle} autoComplete="on" />
                                </div>
                                <div className="col-4 mb-5">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control mx-2" name='lastName' value={lastName} onChange={onChangeLastName} required style={styles.inputStyle} autoComplete="on" />
                                </div>
                                <div className="col-4 mb-5">
                                    <label className="form-label">Email ID</label>
                                    <input type="text" className="form-control mx-2" name='emailId' value={emailId} onChange={onChangeEmailId} required style={styles.inputStyle} autoComplete="on" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                )
            }

            {
                formMode === "edit" && (
                    <div id="form" style={styles.formStyles}>
                    <div className="card-body">
                        <form onSubmit={submitForm} className='justify-content-center d-flex flex-column align-items-center'>
                            <h4>Create An Employee Form</h4>
                            <div className="col-4 mb-3">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control mx-2" name='firstName' value={firstName} onChange={onChangeFirstName} required style={styles.inputStyle}/>
                            </div>
                            <div className="col-4 mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control mx-2" name='lastName' value={lastName} onChange={onChangeLastName} required style={styles.inputStyle}/>
                            </div>
                            <div className="col-4 mb-3">
                                <label className="form-label">Email ID</label>
                                <input type="text" className="form-control mx-2" name='emailId' value={emailId} onChange={onChangeEmailId} required style={styles.inputStyle}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                )
            }
            

            <Tabel showEdit={showEditForm} employees={data} requestToDelete={requestToDelete} viewEmployee={viewEmployee}/>
            {selectedEmployee && (
                <div>
                    <h2 style={styles.heading}>Employee Details</h2>
                    <p style={styles.detail}><strong>First Name:</strong> {selectedEmployee.firstName}</p>
                    <p style={styles.detail}><strong>Last Name:</strong> {selectedEmployee.lastName}</p>
                    <p style={styles.detail}><strong>Email ID:</strong> {selectedEmployee.emailId}</p>
                    {/* Add more fields as needed */}
                </div>
            )}
        </div>
    )
}

const styles = {
    formStyles: {
        margin: '20px auto',
        padding: '20px 20px',
    },
    employeeDetails: {
        marginTop: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    heading: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    detail: {
        marginBottom: '8px',
    },
    inputStyle: {
        border: "black",
        backgroundColor: "#ccc"
    }
};

export default Home