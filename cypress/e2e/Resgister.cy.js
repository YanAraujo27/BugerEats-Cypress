import signup from '../pages/SignupPage'
import RegisterFacroty from '../factories/RegisterFactory'
import SignupPage from '../pages/SignupPage'

describe('Register', ()=>{

    // before(function(){
    //     cy.log('Executa uma unica vez antes de todos os casos de testes')
    // })

//beforeEach(function() {
    //cy.fixture('deliver').then((d)=>{
        //this.deliver = d 

   // })
//})
    // beforeEach(function(){
    //     cy.log('Executa uma unica vez antes de cada casos de testes')
    // })

    // after(function(){
    //     cy.log('Executa uma unica vez depois de todos os casos de testes')
    // })

    // afterEach(function(){
    //     cy.log('Executa uma unica vez depois de cada casos de testes')
    // })

    it.skip('User should be deliver', function (){
    
    var deliver = RegisterFacroty.deliver()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    const expecteMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expecteMessage)
})  

it.skip('Invalid Component - CPF', function(){
    
    var deliver = RegisterFacroty.deliver()

    deliver.cpf = '00000000010a'
    
    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    signup.alertMessageShouldBe('Oops! CPF inválido')
}) 

it.skip('Invalid Component - Email', function(){
    
    var deliver = RegisterFacroty.deliver()

    deliver.email = 'michasjas'
    
    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    signup.alertMessageShouldBe('Oops! Email com formato inválido.')
}) 

context('Required field', function(){

   const messages = [
        {field: 'name', output:'É necessário informar o nome'},
        {field: 'cpf', output:'É necessário informar o CPF'},
        {field: 'email', output:'É necessário informar o email'},
        {field: 'postalcode', output:'É necessário informar o CEP'},
        {field: 'number', output:'É necessário informar o número do endereço'},
        {field: 'deliveryMethod', output:'Selecione o método de entrega'},
        {field: 'cnh', output:'Adicione uma foto da sua CNH'},
    ]

    before(function(){
        SignupPage.go()
        SignupPage.submit()  
    })

    messages.forEach(function(msg){
        it(`${msg.field} is required`, function(){
            SignupPage.alertMessageShouldBe(msg.output)
        })
    })

})

it ('Riquired fields', function(){
    SignupPage.go()
    SignupPage.submit()
    //SignupPage.requiredField()

    SignupPage.alertMessageShouldBe('É necessário informar o nome')
    SignupPage.alertMessageShouldBe('É necessário informar o CPF')
    SignupPage.alertMessageShouldBe('É necessário informar o email')
    SignupPage.alertMessageShouldBe('É necessário informar o CEP')
    SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    SignupPage.alertMessageShouldBe('Selecione o método de entrega')
    SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    


})
})