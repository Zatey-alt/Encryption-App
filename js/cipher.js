import { processMessage } from './process_message';

export default {
    encode: (message, offset)=>processMessage(message, offset, true),
    decode: (message, offset)=>processMessage(message, offset, false)
}