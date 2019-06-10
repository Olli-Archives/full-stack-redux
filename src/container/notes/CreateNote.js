import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import NoteForm from '../../components/notes/NoteForm';


class CreateNote extends PureComponent{
  static PropTypes = {
    creatNote: PropTypes.func.isRequired
  }
  state = {
    title:'',
    body:''
  }

  handleChange = ({ target })=>{
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event =>{
    event.preventDefault();
    this.props.createNote({ title, body });
  }

  render(){
    return (
      <NoteForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        title={title}
        body={body}
        submitText="create"
      />
    );

    const mapDispatchTopProps = dispactch =>({
      createNote(note){
        
      }

    });
  }
}
