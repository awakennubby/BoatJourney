import React from 'react';
import awsIcon from '../../../../assets/icons/awsIcon.svg'
import bashIcon from '../../../../assets/icons/bashIcon.svg'
import bootstrapIcon from '../../../../assets/icons/bootstrapIcon.svg'
import cppIcon from '../../../../assets/icons/cppIcon.svg'
import css3Icon from '../../../../assets/icons/css3Icon.svg'
import djangoIcon from '../../../../assets/icons/djangoIcon.svg'
import dockerIcon from '../../../../assets/icons/dockerIcon.svg'
import flaskIcon from '../../../../assets/icons/flaskIcon.svg'
import githubIcon from '../../../../assets/icons/githubIcon.svg'
import html5Icon from '../../../../assets/icons/html5Icon.svg'
import javaIcon from '../../../../assets/icons/javaIcon.svg'
import jsIcon from '../../../../assets/icons/jsIcon.svg'
import kubernetesIcon from '../../../../assets/icons/kubernetesIcon.svg'
import linuxIcon from '../../../../assets/icons/linuxIcon.png'
import mongodbIcon from '../../../../assets/icons/mongodbIcon.svg'
import mysqlIcon from '../../../../assets/icons/mysqlIcon.svg'
import nodejsIcon from '../../../../assets/icons/nodejsIcon.svg'
import phpIcon from '../../../../assets/icons/phpIcon.svg'
import pythonIcon from '../../../../assets/icons/pythonIcon.svg'
import reactIcon from '../../../../assets/icons/reactIcon.svg'
import gitIcon from '../../../../assets/icons/gitIcon.svg'
import d3jsIcon from '../../../../assets/icons/d3jsIcon.png'
import vscodeIcon from '../../../../assets/icons/vscodeIcon.svg'
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class Skills extends React.Component{
    render(){
        return(
            <Container id="SkillSect">
                <h2>Tools I've used...</h2>
                <Col>
                <img height={70} src={awsIcon}></img>
                <img height={70} src={bashIcon}></img>
                <img height={70} src={bootstrapIcon}></img>
                <img height={70} src={cppIcon}></img>
                <img height={70} src={gitIcon}></img>
                </Col>

                <Col>
                <img height={70} src={css3Icon}></img>
                <img height={70} src={djangoIcon}></img>
                <img height={70} src={dockerIcon}></img>
                <img height={70} src={flaskIcon}></img>
                <img height={60} src={d3jsIcon}></img>
                </Col>

                <Col>
                <img height={70} src={githubIcon}></img>
                <img height={70} src={html5Icon}></img>
                <img height={70} src={jsIcon}></img>
                <img height={70} src={javaIcon}></img>
                <img height={60} src={vscodeIcon}></img>
                </Col>

                <Col>
                <img height={70} src={linuxIcon}></img>
                <img height={70} src={kubernetesIcon}></img>
                <img height={70} src={mongodbIcon}></img>
                <img height={70} src={mysqlIcon}></img>
                </Col>

                <Col>
                <img height={70} src={nodejsIcon}></img>
                <img height={70} src={phpIcon}></img>
                <img height={70} src={reactIcon}></img>
                <img height={70} src={pythonIcon}></img>
                </Col>
            </Container>
        )
    }
}