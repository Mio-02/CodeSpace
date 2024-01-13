import http from './http';
export async function getSearchHotDetail() {
    const { data } = await http.get('/search/hot/detail')
    return data
}