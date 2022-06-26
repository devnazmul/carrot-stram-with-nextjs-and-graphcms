import FormData from 'form-data';
import fs from 'fs';
import { gql, GraphQLClient } from 'graphql-request';
import initMiddleware from '../../middleware/init-middelware';
import multipartParserForm from '../../middleware/multipartParser';

// tern bodyParser OFF.

export const config = {
    api: {
        bodyParser: false
    }
}


// Define Middleware
const multipartParser = initMiddleware(multipartParserForm);

// Initialize Middleware
await multipartParser(req, res)

// File upload to graphCMS 
const { file_1 } = req.files
const form = new FormData();
form.append("fileUpload", fs.createReadStream(file_1.filepath))

const upload = await fetch(`${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}/upload`, {
    method: 'POST',
    headers: {
        authorizaton: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`
    },
    body: form
}).then((response) => response.json());


// create object for mutation 
const { name, message } = req.body;
let id = upload.id;
const authorObject = {
    name,
    message,
    id
}

const query = gql`
mutation createAuthMutation($fullName:String!,$usename:String!,$email:String!,$password:String!,$id: ID!) {
    createAuthor(data: {fullName: $fullName, usename: $usename, email: $email, password: $password, avatar: {connect: {id: $id}}}){id}
  }
  `
  try{
    await GraphQLClient.request(query,authorObject);
    return res.status(200).send({message:"Author submited"})
  }catch(error){
    console.error(error);
  }