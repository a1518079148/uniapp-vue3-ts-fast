import http from "@/utils/http";

export function getUserId(id) {
    return http.post('/api/v1/getUserinfo')
}