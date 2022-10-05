import React, { useEffect } from 'react'
import { db } from '../firebase/firebase.js'
import { collection, getDoc, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { useState } from 'react';

const initialForm = {
    name: '',
    lastname: '',
    age: '',
    doubts: ''
}

const Body = () => {
    const [client, setClients] = useState([])
    const [form, setForm] = useState(initialForm)

    const getClients = async () => {
        const respuesta = await getDocs(collection(db, 'clients'))
        const clients = respuesta.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setClients(clients)
        console.log(clients)
    }

    const createClient = async () => {
        const coleccion = collection(db, 'clients')
        await addDoc(coleccion, form)
        await getClients()
    }
    const updateClient = async (id) => {
        /* Colocamos los datos del campo y lo llevamos al formulario */
        const coleccion = collection(db, 'clients')
        const client = await getDoc(doc(coleccion, id))
        console.log(client.data())
        setForm(client.data())

        /* Actualizamos los datos del formulario */
        await updateDoc(doc(coleccion, id), form)
        await getClients()

    }

    const deleteClients = async (id) => {
        const coleccion = doc(db, 'clients', id)
        await deleteDoc(coleccion)
        await getClients()
    }

    useEffect(() => {
        getClients();
    }, [])

    return (
        <>
            < div className="container mt-2" > <h2>Clientes</h2>
                <hr />

                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col">
                            <div className="row">
                                <div className="col-10">
                                    <h3>Formulario</h3>
                                    <form>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Nombre"
                                            autoComplete="off"
                                            className="form-control"
                                            value={form.name}
                                            onChange={(e) => {
                                                setForm({ ...form, name: e.target.value });
                                            }}
                                        />
                                        <input
                                            id="lastname"
                                            type="text"
                                            placeholder="Apellido"
                                            autoComplete="off"
                                            className="form-control"
                                            value={form.lastname}
                                            onChange={(e) => {
                                                setForm({ ...form, lastname: e.target.value });
                                            }}
                                        />
                                        <input
                                            id="age"
                                            type="number"
                                            placeholder="Edad"
                                            autoComplete="off"
                                            className="form-control"
                                            value={form.age}
                                            onChange={(e) => {
                                                setForm({ ...form, age: e.target.value });
                                            }}
                                        />
                                        <input
                                            id="doubts"
                                            type="text"
                                            placeholder="Dudas"
                                            autoComplete="off"
                                            className="form-control"
                                            value={form.doubts}
                                            onChange={(e) => {
                                                setForm({ ...form, doubts: e.target.value });
                                            }}
                                        />
                                        <button
                                            className="btn btn-primary btn-block mt-2"
                                            onClick={async (e) => {
                                                e.preventDefault();
                                                await createClient();
                                                setForm(initialForm);
                                            }}
                                        >
                                            Agregar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="col-10">
                                <h3>Lista de Clientes</h3>
                                <ul className="list-group">
                                    {client.map((client) => (
                                        <li className="list-group-item" key={client.id}>
                                            {client.name} {client.lastname} {client.age} {client.doubts}
                                            <button
                                                className="btn btn-danger btn-sm float-end"
                                                onClick={() => deleteClients(client.id)}
                                            >
                                                Eliminar
                                            </button>
                                            <button
                                                className="btn btn-warning btn-sm float-end"
                                                onClick={() => updateClient(client.id)}
                                            >
                                                Editar
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body