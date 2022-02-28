import { screen,render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TransactionCreateStepTwo from "components/TransactionCreateStepTwo"


test('on amount and note is submit,then pay button is enable',async ()=>{
    render(<TransactionCreateStepTwo sender={{id:'5'}} receiver={{id:'5'}}/>)

    expect(await screen.findByRole('button',{name:/pay/i})).toBeDisabled()
    
    userEvent.type(screen.getByPlaceholderText(/Amount/i),'50')
    userEvent.type(screen.getByPlaceholderText(/Add a note/i),'dinner')

   expect(await screen.findByRole('button',{name:/pay/i})).toBeEnabled()
    })