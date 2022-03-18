import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Documents.css';

import AuthService from '../../services/auth-service';
import documentsService from '../../services/documents-service';

function Documents() {
	const user = AuthService.getCurrentUser()
	const [data, setData] = useState(null);
	useEffect(() => {
		documentsService.getDocuments().then(documents => {
		  setData(documents.data)
		})
	  })
	// Gets post from database and returns parsed jsx elements
	//          <input type="button" value="Submit" onClick={deletePost(e._id)}></input>

	const generateDocuments = () => {
		return data.map(e => {
	
		  return(
			<div className = 'blurbs'>
			  <div className='cardHead'>
				<h1>{e.title}</h1>			
			  </div>
			  <p>{e.content}</p>
			  <div>
			  <input type="button" value="Delete" onClick={() => documentsService.deleteDocument(e._id, AuthService.getCurrentUser().accessToken)}></input>
			  </div>
	   
			</div>
		  )
		})
	
	}


	return (
		<div className="documents">
		  <h1>Documents</h1>		
	
		  {/* Create Post button | Accessed via log-in*/}
		  {user &&
			<button>
			  <NavLink className="createDocument" to="/createDocument"> + Document</NavLink>
			</button>
		  }
		  
		  {/* DisplaysPosts */}
		  <div className="displayDocuments">
			{data ? generateDocuments() : 'loading'}
		  </div>
		  
	
		</div>
	 )
}

export default Documents;