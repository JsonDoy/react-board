import axios from 'axios';
const BOARD_API_BASE_URL = "http://localhost:8080/api";

let count = 0;

class BoardService {

    constructor() {
        this.page = 0;
        this.limit = 10;
    }

    getBoardPage(page, limit){
        if(page > 0){
            this.page = page - 1 || 0;
        }
        if(limit > 0){
            this.limit = limit || 10;
        }

        return {
            page : this.page,
            limit : this.limit,
        }
    }

    getBoardList(page, limit){
        return axios.get(BOARD_API_BASE_URL + "/board", {params : this.getBoardPage(page,limit)})
    }

    getBoards() {
        return axios.get(BOARD_API_BASE_URL+ "/list");
    }

    createBoard(board){
        return axios.post('http://localhost:8080/api/save', board);
    }

    getOneBoard(num) {
        return axios.get(BOARD_API_BASE_URL + '/select' , { params : { num : num}});
    }

    getDelivary(deli){
        return axios.get(BOARD_API_BASE_URL + "/delivary", {params : deli });
    }
}

export default new BoardService();
