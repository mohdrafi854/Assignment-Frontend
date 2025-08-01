import apiClient from "./apiClient"

export const createLogin = (data) => {
    return apiClient.post("auth/login", data)
}

export const getEngineer = () => apiClient.get("/engineers")
export const getProject = () => apiClient.get("/projects")
export const getAssignment = () => apiClient.get("/assignments")

export const assignEngineerToProject = (data) =>{
    return apiClient.post("/assignments", data)
}

export const addEngineer = (data) => {
    return apiClient.post("/engineers", data)
}

export const editEngineer = (id, data) => {
    return apiClient.put(`engineers/${id}`, data)
}

export const addProject = (data) => {
    return apiClient.post("/projects", data)
}

