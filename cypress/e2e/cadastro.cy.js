describe('Cadastro', ()=>{
    it('Usuario dever se tronar um integrador', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    
    
    var entregador ={
        nome: 'Yan Vitor',
        cpf: '00000000054',
        email: 'yan@gmail.com',
        whatsapp: '11988487528',
        endereco: {
            cep:'07181020',
            rua:'Rua Segundo-Tenente Naylor Correia de Martins Mendes',
            numero:'200',
            complemento:'Casa Verde',
            bairro:'Cidade Jardim Cumbica',
            cidade_uf:'Guarulhos/SP'
        },
        metodo_entrega: 'Van/Carro',
        cnh: 'images/cnh-digital.jpg'

    }
    
    cy.get('.field input[name="name"]').type(entregador.nome)
    cy.get('.field input[name="cpf"]').type(entregador.cpf)
    cy.get('.field input[name="email"]').type(entregador.email)
    cy.get('.field input[name="whatsapp"]').type(entregador.whatsapp)

    cy.get('.field input[name="postalcode"]').type(entregador.endereco.cep)
    cy.get('.field input[type="button"][value="Buscar CEP"]').type(entregador.endereco.cep).click()
    cy.get('.field input[name="address-number"]').type(entregador.endereco.numero)

    cy.get('.field input[name="address"]').should('have.value', entregador.endereco.rua)
    cy.get('.field input[name="district"]').should('have.value', entregador.endereco.bairro)
    cy.get('.field input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)
    
   
    cy.get('.delivery-method li img[alt="Van/Carro"]').click()
    //cy.contains('.delivery-method li', entregador.metodo_entrega).click() forma mais simplificada


    cy.get('.dropzone input[accept^="image"]').attachFile(entregador.cnh)

    cy.get('form button[type="submit"]').click()

    const expecteMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    cy.get('.swal2-container [class="swal2-html-container"]').should('have.text', expecteMessage)
})  
})