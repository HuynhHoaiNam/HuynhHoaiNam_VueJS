import axios from "axios";

const getAllList = async () => {
    return await axios
        .get('http://localhost:3000/mask')
        .then(next => next.data)
        .catch(error => console.log(error));
}

const maskService = {
    getAllList
}

export default maskService;