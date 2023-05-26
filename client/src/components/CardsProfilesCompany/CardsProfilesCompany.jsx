import style from './CardsProfilesCompany.module.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";



const CardProfileCompany = ({ id, logo, business_name, description, work_sector, name, country, cuit, email, web }) => {
   
  const experience = cv.Experiences[0];


  return (
        <div className={style.mainContainer} >
        <div className={style.containerImgEmpresa}>
        {/* <img className={style.img} variant="top" src={photo}/> */}
        <img className={style.img} variant="top" src="https://henry-social-resources.s3-sa-east-1.amazonaws.com/LOGO-REDES-01_og.jpg"/>
        </div>
        <Card.Body >
          <Card.Title className={style.title}>{business_name} {lastName}</Card.Title>
          {/* <Card.Text className={style.text}>{description}</Card.Text> */}
          <Card.Text className={style.text}>La mejor empresa de todo el mundo, ven y trabaja con nosotros, la pasaras genial y con un sueldo impresionante</Card.Text>
        </Card.Body>
        <ListGroup className={style.infoContainer}>
        <ListGroup.Item className={style.item}>Sector de trabajo: Tecnológico </ListGroup.Item>
          {/* <ListGroup.Item className={style.item}>Sector de trabajo: {work_sector} </ListGroup.Item> */}
          <ListGroup.Item className={style.item}>País: {country}</ListGroup.Item>
          <ListGroup.Item className={style.item}>CUIT : {cuit}</ListGroup.Item>
          <ListGroup.Item className={style.item}>Reclutador: {name}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {/* <Link to={web}> */}
          <Link to="https://www.soyhenry.com/">
          <BsLinkedin className={style.linkedin}/>
          </Link>
          </Card.Body>
      </div>
    )
};

export default CardProfileCompany;