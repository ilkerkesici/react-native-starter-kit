import io from "socket.io-client";
import {IP} from '../../config';


export const socket = io.connect(IP);