class MessageDTO {

    constructor(messageData) {
        this.id = messageData._id;
        this.email = messageData.author.id;
        this.nombre = messageData.author.nombre;
        this.apellido = messageData.author.apellido;
        this.timestamp = messageData.timestamp;
        this.mensaje = messageData.text;
        
    }

    getId() {
        return this.id;
    }

    getMensaje() {
        return this.mensaje;
    }

    getEmail() {
        return this.email;
    }

    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getTimestamp() {
        return this.timestamp
    }
}

module.exports = MessageDTO;