import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom"
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";

export function Login() {
    const navigate = useNavigate();

    const submit = async (values) => {
        try {
            console.log("Data login", values)
            let data = await baseAxios(METHOD_HTTP.POST, "/login", values);
            console.log("Data", data);
            localStorage.setItem("token", data.token)
            navigate("/home");
        } catch(e) {
            alert(e.message);
        }
       
    }
    return (
        <>
            <h1>Form Login</h1>
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
                    <Link to={"/register"}>Register now?</Link>
                    <br />
                    <br />
                    <button>Submit</button>
                </Form>
            </Formik>

        </>
    )
}