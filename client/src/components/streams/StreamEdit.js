import _ from 'lodash'; 
import React from 'react'; 
import { connect } from 'react-redux'; 
import {fetchStream, editStream} from '../../actions'; 
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }; 

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }; 


    // initialValues is a special property of redux forms 
    // lodash used to get the values we want from the stream state. 
    // You can also use the 
    //{{title: this.props.stream.title, description: this.props.stream.description }}

    render(){
        if(!this.props.stream){
            return(
                <div>loading...</div>
            );  
        }else{
            return(
                <div>
                  <h3 className = "ui header Black">Edit a Stream</h3>
                  <StreamForm 
                    initialValues ={_.pick(this.props.stream, 'title', 'description')} 
                    name = "Edit Stream"
                    onSubmit={this.onSubmit} />
                </div>
                
            ); 
        }
    };
} 

const mapStateToProps = (state, ownProps) =>{
    return {stream: state.streams[ownProps.match.params.id]}; 
}

export default connect(mapStateToProps, 
    {fetchStream,editStream})(StreamEdit);