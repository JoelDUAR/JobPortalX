import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import ButtonGeneral from "../../components/Button/ButtonGeneral";
import NavBarLog from "../../components/NavBar/NavBarLog";
import style from "./Registro.module.css";
import { getEmail } from "../../Redux/Actions/actionsFunction/FiltersHome";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";

const Registro = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.dataEmail[0])

    const [isLoading, setIsLoading] = useState(true)

    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        const handleUserAuthentication = () => {
            if (isAuthenticated && user) {
                dispatch(getEmail(user.email));
            }
        };
        handleUserAuthentication();
        console.log(currentUser)
    }, [dispatch, isAuthenticated, user]);


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        console.log(currentUser)
        return <Loading />;
    };

    if (currentUser) {

        currentUser.business_name ? navigate('/empresa') : navigate('/applicant')
    } else {
        return (
            <>
                <div className={style.mainContainer}>
                    <NavBarLog></NavBarLog>
                    <div className={style.container}>
                        <h1>Selecciona tu perfil</h1>
                        <div className={style.cardsContainer}>
                            <div className={style.cardContainer1}>
                                <ButtonGeneral
                                    textButton='Soy empresa'
                                    handlerClick={() => navigate('/registroini-empresa')}
                                ></ButtonGeneral>
                                <p className={style.parrafo}>Encuentra los mejores candidatos para tu empresa</p>
                            </div>
                            <div className={style.cardContainer2}>
                                <ButtonGeneral
                                    textButton='Soy aplicante'
                                    handlerClick={() => navigate('/registro-usuario')}
                                ></ButtonGeneral>
                                <p className={style.parrafo}>Filtra las miles de vacantes que tenemos disponibles segun tus preferencias</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }
}

export default Registro;