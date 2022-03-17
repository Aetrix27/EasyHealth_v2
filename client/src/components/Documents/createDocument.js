import { React, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// importing authService in order to use function that gets info of currently authenticated user
import authService from "../../services/auth-service";
import documentsService from "../../services/documents-service";

// form for submitting a post


function DocumentsComponent() {
    //constructor(props) {
    //    super(props); 

    // refs for title and body of post
    //var cardTitle = React.createRef(); 
    //var cardBody = React.createRef(); 
    const [documentTitle, setDocumentTitle] = useState('');
	const [documentBody, setBody] = useState('');

    var history = useHistory();
    
    // function for submitting post
    //this.submitCard = this.submitCard.bind(this);
   

    //}

    //submits posts with title, body, and currently authenticated user's accessToken
    const submitDocument = () => {
        history.push('/documents');

        const title = documentTitle
        const content = documentBody
        const accessToken = authService.getCurrentUser().accessToken
        documentsService.submitDocument(title, content, accessToken)
        
    }
    
    
    return (
        <div>
            <h1> Document Submission </h1>
            <form>
            <label for="DocumentTitle"> Title: </label>
				<br />

				<input
					type="text"
					onChange={(e) => {
						setDocumentTitle(e.target.value);
					}}
				></input>
				<br />
				<label for="documentBody"> Body: </label>
				<br />
				<textarea
					rows="4"
					cols="50"
					onChange={(e) => {
						setBody(e.target.value);
					}}
				></textarea>
				<br />

                <input type="button" value="Submit" onClick={() => submitDocument(documentTitle, documentBody)}></input>
            </form>
        </div>
    )
    
}

export default DocumentsComponent