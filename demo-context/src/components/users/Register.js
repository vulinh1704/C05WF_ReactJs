import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";

export function Register() {
    const navigate = useNavigate();

    const submit = async (values) => {
        try {
            console.log("Data register", values)
            let data = await baseAxios(METHOD_HTTP.POST, "/register", values);
            console.log("Data", data);
            alert(data.message);
            navigate("/login");
        } catch(e) {
            alert(e.message);
        }
       
    }
    return (
        <>
            <h1>Form Register</h1>
            <Formik
                initialValues={
                    {
                        username: '',
                        password: ''
                    }
                }
                onSubmit={submit}
            >
                <Form>
                    <Field type="text" placeholder="Username" name="username"></Field>
                    <br />
                    <Field type="password" placeholder="Password" name="password"></Field>
                    <br />
                    <Link to={"/login"}>Login now?</Link>
                    <br />
                    <br />
                    <button>Submit</button>
                </Form>
            </Formik>

        </>
    )
}