import { useState } from "react"

export function Student() {
    let [list, setList] = useState([ // #02re
        {
            id: 1,
            name: "Linh",
            age: 26
        },
        {
            id: 2,
            name: "Nhân",
            age: 27
        },
        {
            id: 3,
            name: "Phúc",
            age: 28
        }
    ]);
    const [idInput, setIdInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [ageInput, setAgeInput] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [indexEdit, setIndexEdit] = useState(-1);

    const changeInputId = (event) => {
        let newId = event.target.value;
        setIdInput(newId);
    }
    const changeInputName = (event) => {
        let newName = event.target.value;
        setNameInput(newName);
    }
    const changeInputAge = (event) => {
        let newAge = event.target.value;
        setAgeInput(newAge);
    }
    const add = () => {
        console.log(idInput, nameInput, ageInput);
        let newStudent = {
            id: idInput,
            name: nameInput,
            age: ageInput
        };
        // list.push(newStudent); // #02re
        let newList = [...list, newStudent]; // #123f
        setList(newList);
    }
    const remove = (index) => {
        let isConfirm = window.confirm("Are you sure?");
        if (isConfirm) {
            let newList = [...list];
            newList.splice(index, 1);
            setList(newList);
        }
    }

    const showDataEdit = (index) => {
        let oldStudent = list[index];
        setIdInput(oldStudent.id);
        setNameInput(oldStudent.name);
        setAgeInput(oldStudent.age);
        setIsEdit(true);
        setIndexEdit(index);
    }

    const edit = () => {
        let index = indexEdit;
        let newStudent = {
            id: idInput,
            name: nameInput,
            age: ageInput
        }
        let newList = [...list];
        newList[index] = newStudent;
        setList(newList);
        setAgeInput('');
        setNameInput('');        
        setIdInput('');        
        setIsEdit(false);
        setIndexEdit(-1);
    }

    return (
        <>
            <h1>Thêm dữ liệu</h1>
            <input type="number" placeholder="Id" value={idInput} onChange={changeInputId} />
            <input type="text" placeholder="Name" value={nameInput} onChange={changeInputName} />
            <input type="number" placeholder="Age" value={ageInput} onChange={changeInputAge} />
            {isEdit ? < button onClick={edit}>Sửa</button> : < button onClick={() => { add() }}>Thêm</button>}

            <h1>Danh sách học viên</h1>
            <table border={1}>
                <tr>
                    <td>#</td>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td colSpan={2}>Action</td>
                </tr>
                {
                    list.map((item, index) => (
                        <>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td><button onClick={() => { remove(index) }}>Delete</button></td>
                                <td><button onClick={() => { showDataEdit(index) }}>Edit</button></td>
                            </tr>
                        </>
                    ))
                }
            </table>
        </>
    )
}