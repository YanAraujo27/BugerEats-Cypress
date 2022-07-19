

class SignupPage{
    
    go(){
        cy.viewport(1440,900)
        cy.visit('https://buger-eats-qa.vercel.app/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

    }

    fillForm(deliverMan){
        
    cy.get('.field input[name="fullName"]').type(deliverMan.name)
    cy.get('.field input[name="cpf"]').type(deliverMan.cpf)
    cy.get('.field input[name="email"]').type(deliverMan.email)
    cy.get('.field input[name="whatsapp"]').type(deliverMan.whatsapp)

    cy.get('.field input[name="postalcode"]').type(deliverMan.address.postalcode)
    cy.get('.field input[type="button"][value="Buscar CEP"]').type(deliverMan.address.postalcode).click()
    cy.get('.field input[name="address-number"]').type(deliverMan.address.adNumber)

    cy.get('.field input[name="address"]').should('have.value', deliverMan.address.steet)
    cy.get('.field input[name="district"]').should('have.value', deliverMan.address.district)
    cy.get('.field input[name="city-uf"]').should('have.value', deliverMan.address.cityUf)

    cy.get('.delivery-method li img[alt="Van/Carro"]').click()
    //cy.contains('.delivery-method li', entregador.metodo_entrega).click() forma mais simplificada
    cy.get('.dropzone input[accept^="image"]').attachFile(deliverMan.cnh)

    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expecteMessage){
        cy.get('.swal2-container [class="swal2-html-container"]').should('have.text', expecteMessage)
    }

    alertMessageShouldBe(expecteMessage){
        //cy.get('.alert-error').should('have.text', expecteMessage)
        cy.contains('.alert-error', expecteMessage).should('be.visible')
    }

    //requiredField(expecteMessage){
      //  SignupPage.alertMessageShouldBe('É necessário informar o nome')
        //SignupPage.alertMessageShouldBe('É necessário informar o CPF')
        //SignupPage.alertMessageShouldBe('É necessário informar o email')
        //SignupPage.alertMessageShouldBe('É necessário informar o CEP')
        //SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
        //SignupPage.alertMessageShouldBe('Selecione o método de entrega')
        //SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    //}
}

export default new SignupPage;