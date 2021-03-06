import axios from 'axios'
import {API_URL} from '../../components/all/Constants'

class TodoDataService {
    retrieveAllTodos(name) {
        //console.log('executed service')
        return axios.get(`${API_URL}/users/${name}/todos`);
    }
// update
    retrieveTodo(name,id) {
        //console.log('executed service')
        return axios.get(`${API_URL}/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`);
    }


 updateTodo(name, id , todo ) {
        //console.log('executed service')
        return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo);
    }

// metodo post
    createTodo(name,  todo ) {
        //console.log('executed service')
        return axios.post(`${API_URL}/users/${name}/todos/`, todo);
    }
}

export default new TodoDataService()