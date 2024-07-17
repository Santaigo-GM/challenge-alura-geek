import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import styled from 'styled-components';

const Inicio = () => {

    //ESTADOS PARA LOS DATOS Y END POINT 
    const endpoint = 'http://localhost:3000/imagen';
    const [productos, setProductos] = useState([]);

    //VALORES GLOBALES Y VALORES EN EL REGISTRO
    const [values, setValues] = useState({
        nombre: "",
        precio: "",
        imagen: ""
    });
    const handleInputChange = (event) => {
        setValues({...values,
        [event.target.name] : event.target.value,
        });
    };

    //LISTAR USUARIOS
    const listarProducto = async() =>{
        try {
          const response = await axios.get(`${endpoint}`);
            setProductos(response.data);
            console.log(response.data);
            console.log(productos);
      } catch (error) {
          console.log("Error al listar productos", error);
      }
    }

    // REGISTRAR PRODUCTO
    const registrarProducto = async (event) => {
        try {
            event.preventDefault(); 

            console.log('Valores a enviar al servidor:', values); 
            
            const response = await axios.post(endpoint, values);
            
            if (response.status === 201) {
                Swal.fire({
                    text: "¡Producto registrado exitosamente!",
                    icon: 'success'
                });
                listarProducto();
            } else {
                Swal.fire({
                    text: "Error al registrar el producto",
                    icon: 'error'
                });
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                text: error.response || 'Hubo un error al procesar la solicitud.',
                icon: 'error'
            });
        }
    };

    // FUNCION DE ELIMINAR PRODUCTO
    const eliminarProducto = async (id) => {
        try {
            const response = await axios.delete(`${endpoint}/${id}`);
            if (response.status === 200) {
                listarProducto();
                Swal.fire({
                    text: "¡Producto eliminado exitosamente!",
                    icon: 'success'
                });
            }
        } catch (error) {
            Swal.fire({
                text: error.response || 'Hubo un error al procesar la solicitud.',
                icon: 'error'
            });
        }
    };
    
    //LIMPIAR FOMULARIO N° 1 & 2
    const limpiarForm = ()  => {
        setValues({
            nombre: "",
            precio: "",
            imagen: ""
        })
    };

    // FUNCIONES QUE SON CONSTANTES
    useEffect(()=>{
        listarProducto();
    }, []);
        
   return (
    <Contenedor>
    <div className='navbar'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
        </svg>
        <p>SHANTI GEEK</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
        </svg>
    </div>

    <div className='contenido'>
        
    <div className='izquierda'>
            <div className="titulo">
                <h1>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                    </svg> 
                    MIS PRODUCTOS:
                </h1>
            </div>

            <div className='productos-container'>
                {productos.map((producto, index) => (
                    <div className="producto" key={index}>
                        <div className="caja">
                        <div className="imagen">
                            <img className='img' src={producto.imagen} alt={producto.nombre} />
                            </div>
                            <label>Nombre: {producto.nombre}</label><br />
                            <label>Precio: {producto.precio}</label>
                            <button onClick={() => eliminarProducto(producto.id)} className='boton'>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    <div className="derecha">
        <h1 className='titulo'><svg className='svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
    </svg> AGREGA UN PRODUCTO: </h1>
        <div className="formulario">

            <form className='formulario' onSubmit={registrarProducto}>
                <input placeholder='NOMBRE' name='nombre' value={values.nombre} onChange={handleInputChange} className='input' type="text" required/>
                <input placeholder='PRECIO' name='precio' value={values.precio} onChange={handleInputChange} className='input' type="number" required/>
                <input placeholder='IMAGEN' name='imagen' value={values.imagen} onChange={handleInputChange} className='input' type="text" required/>

                <div className='botones'>
                    <button className="boton btn1" type='submit'>ENVIAR</button>
                    <button type='none' onClick={() => limpiarForm()} className="boton btn2">LIMPIAR</button>
                </div>
            </form>
            
        </div>
    </div>

    </div>
    </Contenedor>
   )
}

const Contenedor = styled.div`
    .navbar{
        width: 100%;
        height: 50px;
        background: black;
        display: flex;
        //PARA EL PARRAFO
        color: wheat;
        justify-content: center;
        align-items: center;
        text-align: center;
        p{
            margin: 10px;
        }
    }
    .contenido{
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 100vh;
    }

    .izquierda {
    display: grid;
    flex-direction: row;
    justify-items: center;
    grid-template-columns: repeat(1fr);
    grid-template-areas: 
        "titulo"
        "caja";
    grid-gap: 20px;
    }

    .titulo {
        position: relative;
        text-align: center;
        top: 130px;
        color: #2a2a2a;
        grid-area: titulo;
    }

    .productos-container{
        display: flex;
        justify-items: center;
        flex-direction: row;

        .boton{
            display: flex;
            align-items: center;
            border-radius: 10px;
            justify-content: center;
            padding: 5px;
            height: 30px;
            background: black;
            color: wheat;
            border: none;
        }
    }

    .caja {
        background: #666866;
        margin: 20px;
        border-radius: 5px;
        height: 280px;
        width: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        grid-area: caja;

        .imagen{
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                margin-bottom: 5px;
                border-radius: 2px;
                max-width: 150px;
                max-height: 150px;
            }
        }
    }


    .derecha{
        /* background: blue; */
        display: flex;
        flex-direction: column;
        align-items: center;

        .titulo{
            position: relative;
            top: 130px;
            color: #2a2a2a;
        }

        .formulario{
            display: flex;
            height: 100vh;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .input{
            width: 500px;
            height: 50px;
            text-align: left;
            padding-left: 10px;
            margin: 10px;
            border-radius: 30px;
            border:2px solid black;

            &:placeholder-shown{
                text-align: left;
                padding-left: 10px;
            }
        }
        }
        
        .botones{
            display: flex;
            flex-direction: row;
            .boton{
                display: flex;
                align-items: center;
                border-radius: 10px;
                justify-content: center;
                padding: 20px;
                margin: 20px;
                height: 20px;

            }
            .btn1{
                    background: black;
                    color: wheat;
                    border: none;

            }
            .btn2{
                    background: #ffffff;
                    border: 1px solid black;
                    color: #000000;
            }
        }
    }
`

export default Inicio