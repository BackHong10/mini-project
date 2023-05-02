import coolsms from 'coolsms-node-sdk'
import {Token} from './model/token.model.js'
const mysms = coolsms.default


export function checkPhone(myphone){
    if(myphone.length < 10 || myphone.length > 11){
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해주세요!!!")
        return false
    }
    else{
        return true
    }
}

export function getToken(){
    const result = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    console.log(result)
    return result
}
export async function sendTokenToSMS(myphone, mytoken){
    const SMS_KEY = process.env.SMS_KEY
    const SMS_SECRET = process.env.SMS_SECRET
    const SMS_SENDER = process.env.SMS_SENDER
    const messageService = new mysms(SMS_KEY,SMS_SECRET)
    const result = await messageService.sendOne({
        to: myphone,
        from: SMS_SENDER,
        text:`안녕하세요 요청하신 인증번호는 ${mytoken} 입니다.`
    })
    console.log(result)
    
    console.log(myphone + "번호로 안증번호 " + result + "를 전송합니다.")
}


export async function saveTokenData({myToken,myPhone}){
    const token = new Token({
        token: myToken,
        phone: myPhone,
        isAuth: false
    
      })
      await token.save()
}





