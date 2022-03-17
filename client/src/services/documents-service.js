import axios from "axios";

const API_URL = "/document";

// handles features for posts (submitting, updating, deleting, retrieving posts)
class documentsService {

    // makes a POST req to backend to submit post into the database
    // takes in title and body of post as well as the author 
    submitDocument(title, content, accessToken) {
        axios
        .post(`${API_URL}/create`, {
            title,
            content
        },
        {
            headers: {
                'x-access-token': accessToken
            }
        })
        .then( response => {
            if (response.status === '200') {
                console.log('Document was successfully submitted')
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    deleteDocument(documentid, accessToken) {
        axios.delete(API_URL + '/delete/'+ documentid, {
            headers: {
            'x-access-token': accessToken
            },
            data: documentid
        });
    }

    getDocuments() {
        return axios.get(API_URL)
        //.then(function(posts){
          //  console.log(posts)
        //}
        //);
    }


}

export default new documentsService();