//These imports are mandatory for all components created under ./subComponents
//If these aren't imported, than it'll break, as you're usin React, and SplitPane
// import { SplitPane } from "../../index";
import React from 'react';
import {  Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react'

// import from './CreateEditClass.css'
import './CreateEditClass.css';

//Components to be combined together for the specific framework, such as Leaderboard
import MenuBar from "../MenuBar";
// import LandingPage from "../LandingPage";
import ClassCreateEdit from "./ClassCreateEdit";
import StudentList from "./StudentList";


function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
        </div>
    );
}

//Left Component
function LeftContent() {
    return (
        <div className="LeftContent" style={{ height: '100%' }}>
            <MenuBar />
        </div>
    );
}

//Right Component
function RightContent(props) {

    return (
        <div className="RightContent" style={{ height: '100%' }}>
            <div style={{ height: '50%' }}>
                < ClassCreateEdit props={props} />

            </div>
            <div className="ClassList" style={{ height: '50%' }} >
                {console.log("Props", props)}

                <StudentList props={props}/>

            </div>

        </div>
    );
}

//These styles can go into a CSS file, such as HomeTemplate.css
//I did them this way because it's faster
const CreateEdit = (props) => {
    // const linkBox = {
    //     //I had to specify top, bottom, left, right
    //     //It doesn't work if I say simply, borderColor: '2px solid black' <--- FAILS
    //     // So, you'll have to play around with CSS, until something works.
    //     //So, specificity, being more specific is a way around this issue.
    //     borderTop: ' 2px solid black',
    //     borderRight: ' 2px solid black',
    //     borderBottom: ' 2px solid black',
    //     borderLeft: ' 2px solid black',
    //     width: '12%',
    //     height: '100%',
    //     marginLeft: '80%',
    //     marginRight: '20%'
    // }
    return (
        <div style={{ height: '100%' }}>
            {/*<div >*/}

                {/*<Breadcrumb tag="nav">*/}
                    {/*<BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>*/}
                    {/*<BreadcrumbItem tag="a" href="/classlist">Classes</BreadcrumbItem>*/}
                    {/*/!*<BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>*!/*/}
                    {/*<BreadcrumbItem active tag="span">Create or Edit Class</BreadcrumbItem>*/}
                {/*</Breadcrumb>*/}
            <div className="ui big breadcrumb" style={{height: '7%'}}>
                <a className="section" href="/">Home</a>
                <i className="right chevron icon divider"></i>
                <a className="section" href="/classlist">Classes</a>
                <i className="right chevron icon divider"></i>
                <div className="active section">Create or Edit Class</div>
            </div>
                {/*<div style={linkBox} >*/}
                        {/*<Link style={{marginRight: '8%', textDecoration: 'none' }} to="/class">*/}

                            {/*Classes*/}
                        {/*</Link>*/}
                        {/*<Link style={{marginRight: '8%', textDecoration: 'none' }} to="/">*/}
                            {/*Home*/}
                        {/*</Link>*/}
                        {/*<Link style={{marginRight: '8%', textDecoration: 'none' }} to="/signout">*/}
                            {/*Sign Out*/}
                        {/*</Link>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<ClassCreateEdit/>*/}
            <SplitPane left={<LeftContent />} right={<RightContent props={props} />} />
        </div>
    )
}
export default CreateEdit;
