var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11988487528',
            address: {
                postalcode: '07181020',
                steet: 'Rua Segundo-Tenente Naylor Correia de Martins Mendes',
                adNumber: '200',
                complement: 'Casa Verde',
                district: 'Cidade Jardim Cumbica',
                cityUf: 'Guarulhos/SP'
            },

            metodo_entrega: 'Van/Carro',
            cnh: 'images/cnh-digital.jpg'


        }

        return data
    }
}