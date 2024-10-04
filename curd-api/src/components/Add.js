import "../css/Add.css";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Add() {
    const navigate = useNavigate();

    const add = (data) => {
        axios.post("http://localhost:3000/students", data).then(() => {
            navigate("/home/list");
        })
    }

    return (
        <>
            {/* <h1>Add Studentt</h1>
            <Formik
                initialValues={ // giá trị khởi tạo mặc định cho các ô input
                    {
                        name: '',
                        action: '',
                        description: '',
                        score: ''
                    }
                }
                onSubmit={ // chứa hàm xử lý khi người dùng submit
                    (values) => {
                        add(values);
                    }
                }
            >
                <Form>
                    <Field name="name" type="text" placeholder="Name"></Field>
                    <Field name="action" type="text" placeholder="Action"></Field>
                    <Field name="description" type="text" placeholder="Description"></Field>
                    <Field name="score" type="number" placeholder="Score"></Field>
                    <button>Submit</button>
                </Form>
            </Formik> */}

            <div className="add">
                <div className="title">Add Student</div>
                <Formik
                    initialValues={ // giá trị khởi tạo mặc định cho các ô input
                        {
                            name: '',
                            action: '',
                            description: '',
                            score: ''
                        }
                    }
                    onSubmit={ // chứa hàm xử lý khi người dùng submit
                        (values) => {
                            add(values);
                        }
                    }
                >
                    <Form>
                        <div className="form-data">
                            <Field type="text" name="name"/>
                            <Field type="text" name="action" />
                            <Field type="text" name="description"/>
                            <Field type="text" name="score"/>
                            <button>Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </>
    )
}

// Formik: là form sử dụng trong React
// Form: Sử dụng để nhận 1 tập dữ liệu từ người

// a => Link

