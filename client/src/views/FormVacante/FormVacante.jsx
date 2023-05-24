import Form from 'react-bootstrap/Form';
import style from "./FormVacante.module.css"
import { useState } from "react";
import { FormGroup, FormLabel, FormSelect, FormControl, Row, Col } from 'react-bootstrap';
import NavBar from "../../components/NavBar/NavBarLog"
import ButtonGeneral from '../../components/Button/ButtonGeneral';
import { useDispatch, useSelector } from "react-redux";
import { postVacant } from '../../Redux/Actions/actionsFunction/axtionsVacants';
import validateFormInputs from './validation';
import { useEffect } from 'react';
import { getEmail } from '../../Redux/Actions/actionsFunction/FiltersHome';
import { useAuth0 } from '@auth0/auth0-react';

export default function FormVacante({setCurrentUserStore}) {

    const today = new Date();
    const dateOnly = today.toISOString().slice(0, 10);

    const dispatch = useDispatch();
    const currentUser = useSelector(state=>state.dataEmail[0])
    console.log(currentUser)
    const { user, isAuthenticated } = useAuth0();

    const [validated, setValidated] = useState(false);

    

    

    useEffect(() => {
        const handleUserAuthentication = () => {
            if (isAuthenticated && user) {
                dispatch(getEmail(user.email));
            }
        };
        handleUserAuthentication();
    }, [dispatch, isAuthenticated, user]);



    const [newVacant, setNewVacant] = useState({
        title: "",
        description: "",
        WorkdayId: "",
        WorkMethodId: "",
        SeniorityId: "",
        creation_date: dateOnly
    });


    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setNewVacant({ ...newVacant, [property]: value });
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        if (!validateFormInputs(newVacant)) {
            alert('Completa todos los campos')
        } else {
            setValidated(true)
            dispatch(postVacant({...newVacant,  CompanyId: currentUser.id} ))
            setNewVacant({
                title: "",
                description: "",
                CompanyId: currentUser.id,
                WorkdayId: "",
                WorkMethodId: "",
                SeniorityId: "",
                creation_date: dateOnly
            })
            setValidated(false)
        }
    };


    return (

        <div className={style.mainContainer}>

            <NavBar setCurrentUserStore={setCurrentUserStore} ></NavBar>


            <h2 style={{ 'margin': '20px' }}>Crear nueva vacante</h2>
            <Form validated={!validated} className={style.Form} onSubmit={handleSubmit} >

                <Form.Group as={Col} md='12' className="mb-3"  >
                    <FormLabel>Titulo de la vacante</FormLabel>
                    <FormControl
                        name='title'
                        placeholder='Titulo de tu nuvea vacante'
                        value={newVacant.title}
                        type="text"
                        onChange={handleInputChange}
                        required />
                    <Form.Control.Feedback type="invalid">
                        Rellena este campo
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md='12' className="mb-3" >
                    <Form.Label>Descripcion de la vacante</Form.Label>
                    <Form.Control
                        name='description'
                        value={newVacant.description}
                        placeholder='Realiza una descripción detallada de tu vacante'
                        as="textarea"
                        rows={5}
                        onChange={handleInputChange}
                        required />
                    <Form.Control.Feedback type="invalid">
                        Rellena este campo
                    </Form.Control.Feedback>
                </Form.Group>

                <Row>

                    <FormGroup as={Col} md='4'>
                        <FormLabel className="me-2">Modalidad</FormLabel>
                        <FormSelect name='WorkMethodId'
                            value={newVacant.WorkMethodId}
                            onChange={handleInputChange}
                            required>
                            <option disabled></option>
                            <option value={1}>Presencial</option>
                            <option value={2} >Hibrido</option>
                            <option value={3}>Remoto</option>
                        </FormSelect>
                        <Form.Control.Feedback type="invalid">
                            Selecciona una opcion
                        </Form.Control.Feedback>
                    </FormGroup>

                    <FormGroup as={Col} md='4'>
                        <FormLabel className="me-2">Jornada</FormLabel>
                        <FormSelect name='WorkdayId'
                            value={newVacant.WorkdayId}
                            onChange={handleInputChange}
                            required>
                            <option disabled ></option>
                            <option value={1}>Tiempo completo</option>
                            <option value={2}>Medio tiempo</option>
                            <option value={3}>Otro</option>
                        </FormSelect>
                        <Form.Control.Feedback type="invalid">
                            Selecciona una opcion
                        </Form.Control.Feedback>
                    </FormGroup>

                    <FormGroup as={Col} md='4'>
                        <FormLabel className="me-2">Experiencia</FormLabel>
                        <FormSelect name='SeniorityId'
                            value={newVacant.SeniorityId}
                            onChange={handleInputChange}
                            required>
                            <option disabled ></option>
                            <option value={0}>Sin Experiencia</option>
                            <option value={4}>Trainee</option>
                            <option value={3}>Junior</option>
                            <option value={2}>Semi-senior</option>
                            <option value={1}>Senior</option>
                        </FormSelect>
                        <Form.Control.Feedback type="invalid">
                            Selecciona una opcion
                        </Form.Control.Feedback>
                    </FormGroup>
                </Row>
            </Form>

            <div>
                <ButtonGeneral
                    textButton='Crear vacante'
                    type='submit'
                    handlerClick={handleSubmit}>
                </ButtonGeneral>
            </div>

        </div>
    )
}


