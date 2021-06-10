import req from '../utils/request'
export default {
    addComment(data) {
        return req({
            method: 'post',
            url: 'http://localhost:8080/commentary',
            data: JSON.stringify(data)
        })
    }
}