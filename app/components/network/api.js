import React from 'react'

export const Api = () => {
    const serverHost = 'http://172.20.10.2:8000';
    const clientHost = 'http://localhost:19000';
    return { serverHost, clientHost }
}
