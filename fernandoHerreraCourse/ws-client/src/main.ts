import './style.css'
import chat from './chat/chat.html?raw'
import { connectToServer } from './chat/socket-client';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = chat;

connectToServer();