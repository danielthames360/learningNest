import { Manager, Socket } from "socket.io-client"

export const connectToServer = () => {
    const manager = new Manager('http://localhost:3000/socket.io/socket.io.js')

    const socket = manager.socket('/')

    addListeners(socket)
}

const addListeners = (socket: Socket) => {
    const serverStatusLabel = document.querySelector('#server-status')!

    const list = document.querySelector('#clients')!;

    socket.on('connect', () => {
        serverStatusLabel.innerHTML = 'Online';
    })

    socket.on('disconnect', () => {
        serverStatusLabel.innerHTML = 'Offline';
    })

    socket.on('clients-updated', (clients: string[]) => {
        let clientsHtml = '';
        clients.forEach(clientId => {
            clientsHtml += `
                <li>${clientId}</li>
            `
        });
        list.innerHTML = clientsHtml;
    })
}