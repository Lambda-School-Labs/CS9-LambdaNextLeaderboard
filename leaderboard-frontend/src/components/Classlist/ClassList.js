//________MODULES________
import React, {Component} from 'react'
import Fetch from './FetchData'
import {Link} from 'react-router-dom';
import {connectAsync} from "iguazu";
import {connect} from 'react-redux'
import {queryAllMyData, getClassesStudentsAction} from "../../actions";
//________STYLING________
import './ClassList.css'
import CardClass from "./CardClass";
import AddClass from "./AddClass";


function MyContainer({isLoading, loadedWithErrors, myData}) {
    if (isLoading()) {
        return <div>Loading...</div>
    }

    if (loadedWithErrors()) {
        return <div>Oh no! Something went wrong</div>
    }
    return (
        < ClassList myData={myData}/>
    )
}

//________CLASSLIST________
class ClassList extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        if (this.props.isLoading()) {
            return <div>Loading...</div>
        }

        if (this.props.loadedWithErrors()) {
            return <div>Oh no! Something went wrong</div>
        }
        const myData = this.props.myData
        // console.log(this.props)
        // if (this.state.classes && this.state.loading === false) {
        if (this.props.myData) {
            console.log(this.props.myData)
            return (
                <div className="APP__CLASSLIST">
                    {this.props.myData.map((myData, index) => {
                        return (
                            <div key={myData + index}>
                                <CardClass fetchData={this.fetchData} props={this.props.props.props} classname={myData.name}
                                           students={myData.students}/>
                            </div>
                        );
                    })}
                    <AddClass fetchData={this.fetchData} solo={"no"}/>

                </div>
            );
        } else {  // Highlight "Add a new class", if there are no classes
            return <AddClass fetchData={this.fetchData} solo={"yes"}/>
        }
    }
};

const mapStateToProps = state => {
    return {
        error: state.error,
        allClasses: state.allClasses,
        fetchClasses: state.fetchClasses
    }
}

//________EXPORT________
// export default ClassList;
export function loadDataAsProps({store, ownProps}) {
    const {dispatch, getState, subscribe} = store;
    const path = "/"; // Use the actual path when it's created as needed
    console.log(ownProps);
    return {
        myData: () => dispatch(queryAllMyData(path)),
    };
}


export default connectAsync({loadDataAsProps})(ClassList);
