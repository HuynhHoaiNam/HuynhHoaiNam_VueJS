import axios from "axios";

const getAllList = async () => {
    try {
        return await axios
            .get('http://localhost:3000/mask')
            .then(next => next.data)
    } catch (error) {
        console.log(error)
    }
}

const deleteMaskApi = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/mask/${id}`);
    } catch (error) {
        console.log(error);
    }
}

const createMask = async (mask) => {
    try {
        await axios.post('http://localhost:3000/mask', mask)
    } catch (error) {
        console.log(error);
    }
}

const getAllListLayer = async () => {
    try {
        return await axios.get('http://localhost:3000/layer')
            .then(next => next.data);
    } catch (error) {
        console.log(error);
    }
}

const updateMask = async (id, mask) => {
    try {
        await axios.put(`http://localhost:3000/mask/${id}`, mask);
    } catch (error) {
        console.log(error);
    }
}


const getMaskById = async (id) => {
    try {
        return await axios.get(`http://localhost:3000/mask/${id}`)
            .then(next => next.data);
    } catch (error) {
        console.log(error);
    }
}

const maskService = {
    getAllList,
    deleteMaskApi,
    createMask,
    getAllListLayer,
    updateMask,
    getMaskById
}

export default maskService;