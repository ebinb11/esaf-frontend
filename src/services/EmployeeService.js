import axios from 'axios';

const BASE_URL = "http://localhost:8081/api/employee/";

class EmployeeService {

    listEmployees() {
        // let page = "0";
        // let size = "10";
        // let search = "";
        // let id = "";
        // return axios.get(BASE_URL+"/getEmployeeListPage", page, size, search, id);
        return axios.get(BASE_URL+"getEmployeeList");
    }

    entryEsaf(esaf) {
        return axios.post(BASE_URL+"employeeEntry", esaf);
    }

    getEsaf(id) {

        return axios.get(BASE_URL+"employeeGet" +'/'+id);
    }

    updateEsaf(id, esaf){
        return axios.put(BASE_URL+"employeeUpdate" +'/'+id, esaf);
    }
    deleteEsaf(id) {
        return axios.delete(BASE_URL+"employeeDelete"+'/'+ id);
    }
}

export default new EmployeeService()