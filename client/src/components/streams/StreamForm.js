import React from 'react'; 
// Field is a react component, and reduxForm is a function
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{
//Helper function
    renderError({error, touched}){
        if(touched && error){
            return(
                <div className = "ui error message">
                    <div className ="header">{error} </div>
                </div>
            ); 
        }
    }
//Helper function 
    renderInput = ({ input, label, meta }) => {
        //does not show by default
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className= {className}> 
                <label>{label}</label>
                <input {...input} autoComplete ="off" />
                {this.renderError(meta)}
            </div>
             
        ); 
    }

    // Submits to the API server 
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className ="ui form error">
                <Field name ="title" component={this.renderInput} label = "Enter Title" /> 
                <Field name ="description" component={this.renderInput} label = "Enter Description" /> 
                <button className = "ui button primary">{this.props.name}</button>
            </form>

        ); 
    }
}

const validate = (formValues) => { 
    const errors = {}; 

   if(!formValues.title){
        errors.title ='You must enter a title'; 
   } 

   if(!formValues.description){
       errors.description = 'You must enter a description'
   }

   return errors;
}; 

export default reduxForm({
    form: 'streamForm', 
    validate: validate
})(StreamForm);
